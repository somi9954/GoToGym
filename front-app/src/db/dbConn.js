const oracledb = require('oracledb');
const bcrypt = require('bcrypt');
const dbConfig = require('./dbConfig.js');

oracledb.autoCommit = true;

function hashPassword(password, callback) {
  const saltRounds = 10;
  bcrypt.hash(password, saltRounds, function (err, hashedPassword) {
    if (err) {
      return callback(err);
    }
    callback(null, hashedPassword);
  });
}

oracledb.getConnection(
  {
    user: dbConfig.user,
    password: dbConfig.password,
    connectString: dbConfig.connectString,
  },
  function (err, conn) {
    if (err) {
      throw err;
    }

    console.log('Oracle DB 연결 성공!!');

    const seqQuery = 'SELECT member_seq.NEXTVAL FROM DUAL';
    const insertQuery = `
        INSERT INTO member (seq, email, password, name, mobile, type, created_at)
        VALUES (:seq, :email, :password, :name, :mobile, :type, SYSTIMESTAMP)
    `;

    const userEmail = 'user02@test.org'; // 중복 체크 및 삽입에 사용할 이메일 변수

    conn.execute(seqQuery, [], function (errSeq, resultSeq) {
      if (errSeq) {
        throw errSeq;
      }

      const nextVal = resultSeq.rows[0][0];

      // 이미 존재하는 데이터인지 디비에서 확인
      const duplicateCheckQuery = `
        SELECT COUNT(*) AS count
        FROM member
        WHERE email = :email
      `;

      conn.execute(
        duplicateCheckQuery,
        [userEmail],
        function (errDuplicateCheck, resultDuplicateCheck) {
          if (errDuplicateCheck) {
            throw errDuplicateCheck;
          }

          const duplicateCount = resultDuplicateCheck.rows[0][0];

          if (duplicateCount > 0) {
            // 이미 존재하는 경우에 대한 처리
            console.log('이미 존재하는 데이터입니다. 중복을 방지합니다.');
            doRelease(conn);
            return;
          }

          hashPassword('_aA123456', function (hashErr, hashedPassword) {
            if (hashErr) {
              throw hashErr;
            }

            const members = [
              [
                nextVal,
                userEmail,
                hashedPassword,
                '사용자02',
                '01044445555',
                'ADMIN',
              ],
            ];

            const options = {};

            conn.executeMany(
              insertQuery,
              members,
              options,
              function (errInsert, resultInsert) {
                if (errInsert) {
                  // 오류가 발생한 경우 여기서 디버깅하고 적절한 조치를 취할 수 있습니다.
                  console.error(errInsert);

                  // 오류 처리 또는 롤백 등 추가 작업을 수행할 수 있습니다.
                  throw errInsert;
                }
                console.log('입력 완료!!');

                const selectQuery = 'SELECT * FROM member';
                conn.execute(selectQuery, [], function (
                  errSelect,
                  resultSelect,
                ) {
                  if (errSelect) {
                    throw errSelect;
                  }

                  console.log(resultSelect.rows);

                  doRelease(conn);
                });
              },
            );
          });
        },
      );
    });

    function doRelease(conn) {
      conn.release(function (err) {
        if (err) {
          throw err;
        }
      });
    }
  },
);
