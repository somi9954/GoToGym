// 오라클 DB 설정 파일

module.exports = {
  user: process.env.NODE_ORACLEDB_USER || 'GOTOGYM',
  password: process.env.NODE_ORACLEDB_PASSWORD || '_aA123456',
  connectString:
    process.env.NODE_ORACLEDB_CONNECTIONSTRING || 'localhost:1521/orcl',
  externalAuth: process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false,
};