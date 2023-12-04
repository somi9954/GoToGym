import styled from 'styled-components';
import Menus from './Menus';
import {InputText} from "../commons/InputStyle";

const FormBox = styled.form`

  
  h1 {
    font-size: 30px;
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 35px;
    line-height: 1;
    padding: 0;
  }

  h2 {
    font-size: 18px;
    font-weight: bold;
    margin: 25px 0 10px;
    line-height: 1;
  }
  Input[type='text'],
  Input[type='number'],
  Input[type='password'],
  Input[type='email'],
  Input[type='date'] {
    border: 1px solid #d5d5d5;
    width: 100%;
    height: 45px;
    padding: 0 10px;
    border-radius: 3px;
  }

  .btns {
    display: flex;
    width: 400px;
    margin: 0 auto;
  }
  .btns > button {
    width: 0;
    flex-grow: 1;
    height: 50px;
    font-size: 18px;
    border: 1px solid #000;
  }
  .btns > button:last-of-type {
    background: #000;
    color: #fff;
    margin-left: 10px;
  }

  Input[type='radio'] + label {
    display: inline-block;
    min-height: 24px;
    line-height: 24px;
    padding: 3px;
    cursor: pointer;
  }
  
  .table-cols {
    width: 100%;
    border-spacing: 0;
    padding: 0;
    border-top: 3px solid #222;
    margin-bottom: 20px;
  }
  .table-cols th {
    background: #f8f8f8;
    width: 160px;
    padding: 10px 20px;
    text-align: left;
  }
  .table-cols td {
    background: #fff;
    padding: 10px 15px;
  }
  .table-cols th,
  .table-cols td {
    border-bottom: 1px solid #d5d5d5;
  }
  textarea {
    border: 1px solid #d5d5d5;
    width: 100%;
    min-height: 150px;
    padding: 10px;
    resize: none;
  }

  .search_btn {
    margin: 20px 0 35px;
    text-align: center;
  }
`;


const BoardForm = ({onRadioClick, onCheckbox, formData}) => {
  console.log('Received props:', { onRadioClick, onCheckbox, formData });

  return (
    <section>
      <Menus />
      <FormBox>
        <h1>게시판 등록</h1>
        <h2>일반설정</h2>
        <table className="table-cols">
          <tbody>
            <tr>
              <th>게시판 ID</th>
              <td>
                <InputText type="text" name="bId" value={formData} />
              </td>
            </tr>
            <tr>
              <th>게시판명</th>
              <td>
                <InputText type="text" name="bName" value={formData} />
              </td>
            </tr>
            <tr>
              <th>사용여부</th>
              <td>
                <input
                  type="radio"
                  id="use_true"
                  value={formData}
                  onClick={onCheckbox}
                  defaultChecked={true}
                />
                <label htmlFor="use_true">사용</label>
                <input
                  type="radio"
                  id="use_false"
                  value={formData}
                  onChange={onCheckbox}
                  defaultChecked={false}
                />
                <label htmlFor="use_false">미사용</label>
              </td>
            </tr>
            <tr>
              <th>1페이지 게시글 수</th>
              <td>
                <input type="number" name="rowsOfPage" value={formData} />
              </td>
            </tr>
            <tr>
              <th>게시글 하단 목록</th>
              <td>
                <input
                  type="radio"
                  id="showViewList_true"
                  value={formData}
                  onChange={onRadioClick}
                  defaultChecked={true}
                />
                <label htmlFor="showViewList_true">사용</label>

                <input
                  type="radio"
                  id="showViewList_false"
                  value={formData}
                  onChange={onRadioClick}
                  defaultChecked={false}
                />
                <label htmlFor="showViewList_false">미사용</label>
              </td>
            </tr>
          </tbody>
        </table>

        <h2>분류 설정</h2>
        <table className="table-cols">
          <tbody>
            <tr>
              <th>분류</th>
              <td>
                <textarea
                  name="category"
                  value={formData}
                  placeholder="분류가 여러개인 경우 엔터키를 눌러 줄개행하여 입력하세요..."
                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>

        <h2>권한 설정</h2>
        <table className="table-cols">
          <tbody>
            <tr>
              <th>목록</th>
              <td>
                <input
                  type="radio"
                  id="listAccessRole_ALL"
                  value={formData}
                  onChange={onRadioClick}
                  defaultChecked={'ALL'}
                />
                <label htmlFor="listAccessRole_ALL">
                  전체(비회원+회원+관리자)
                </label>

                <input
                  type="radio"
                  id="listAccessRole_USER"
                  value={formData}
                  onChange={onRadioClick}
                />
                <label htmlFor="listAccessRole_USER">회원</label>

                <input
                  type="radio"
                  id="listAccessRole_ADMIN"
                  value={formData}
                  onChange={onRadioClick}
                />
                <label htmlFor="listAccessRole_ADMIN">관리자</label>
              </td>
            </tr>
            <tr>
              <th>글보기</th>
              <td>
                <input
                  type="radio"
                  id="viewAccessRole_ALL"
                  value={formData}
                  onChange={onRadioClick}
                  defaultChecked={'ALL'}
                />
                <label htmlFor="viewAccessRole_ALL">
                  전체(비회원+회원+관리자)
                </label>

                <input
                  type="radio"
                  id="viewAccessRole_USER"
                  value={formData}
                  onChange={onRadioClick}
                />
                <label htmlFor="viewAccessRole_USER">회원</label>

                <input
                  type="radio"
                  id="viewAccessRole_ADMIN"
                  value={formData}
                  onChange={onRadioClick}
                />
                <label htmlFor="viewAccessRole_ADMIN">관리자</label>
              </td>
            </tr>
            <tr>
              <th>글쓰기</th>
              <td>
                <input
                  type="radio"
                  id="writeAccessRole_ALL"
                  value={formData}
                  onChange={onRadioClick}
                  defaultChecked={'ALL'}
                />
                <label htmlFor="writeAccessRole_ALL">
                  전체(비회원+회원+관리자)
                </label>

                <input
                  type="radio"
                  id="writeAccessRole_USER"
                  value={formData}
                  onChange={onRadioClick}
                />
                <label htmlFor="writeAccessRole_USER">회원</label>

                <input
                  type="radio"
                  id="writeAccessRole_ADMIN"
                  value={formData}
                  onChange={onRadioClick}
                />
                <label htmlFor="writeAccessRole_ADMIN">관리자</label>
              </td>
            </tr>
            <tr>
              <th>답글</th>
              <td>
                <input
                  type="radio"
                  id="replyAccessRole_ALL"
                  value={formData}
                  onChange={onRadioClick}
                  defaultChecked={'ALL'}
                />
                <label htmlFor="replyAccessRole_ALL">
                  전체(비회원+회원+관리자)
                </label>

                <input
                  type="radio"
                  id="replyAccessRole_USER"
                  value={formData}
                  onChange={onRadioClick}
                />
                <label htmlFor="replyAccessRole_USER">회원</label>
                <input
                  type="radio"
                  id="replyAccessRole_ADMIN"
                  value={formData}
                  onChange={onRadioClick}
                />
                <label htmlFor="replyAccessRole_ADMIN">관리자</label>
              </td>
            </tr>
            <tr>
              <th>댓글</th>
              <td>
                <input
                  type="radio"
                  id="commentAccessRole_ALL"
                  value={formData}
                  onChange={onRadioClick}
                  defaultChecked={'ALL'}
                />
                <label htmlFor="commentAccessRole_ALL">
                  전체(비회원+회원+관리자)
                </label>

                <input
                  type="radio"
                  id="commentAccessRole_USER"
                  value={formData}
                  onChange={onRadioClick}
                />
                <label htmlFor="commentAccessRole_USER">회원</label>

                <input
                  type="radio"
                  id="commentAccessRole_ADMIN"
                  value={formData}
                  onChange={onRadioClick}
                />
                <label htmlFor="commentAccessRole_ADMIN">관리자</label>
              </td>
            </tr>
          </tbody>
        </table>
        <h2>기능 설정</h2>
        <table className="table-cols">
          <tbody>
            <tr>
              <th>에디터</th>
              <td>
                <input
                  type="radio"
                  id="useEditor_true"
                  value={formData}
                  onChange={onCheckbox}
                  defaultChecked={true}
                />
                <label htmlFor="useEditor_true">사용</label>

                <input
                  type="radio"
                  id="useEditor_false"
                  value={formData}
                  onChange={onCheckbox}
                  defaultChecked={false}
                />
                <label htmlFor="useEditor_false">미사용</label>
              </td>
            </tr>
            <tr>
              <th>파일첨부</th>
              <td>
                <input
                  type="radio"
                  id="useAttachFile_true"
                  value={formData}
                  onChange={onCheckbox}
                  defaultChecked={true}
                />
                <label htmlFor="useAttachFile_true">사용</label>

                <input
                  type="radio"
                  id="useAttachFile_false"
                  value={formData}
                  onChange={onCheckbox}
                  defaultChecked={false}
                />
                <label htmlFor="useAttachFile_false">미사용</label>
              </td>
            </tr>
            <tr>
              <th>이미지첨부</th>
              <td>
                <input
                  type="radio"
                  id="useAttachImage_true"
                  value={formData}
                  onChange={onCheckbox}
                  defaultChecked={true}
                />

                <label htmlFor="useAttachImage_true">사용</label>
                <input
                  type="radio"
                  id="useAttachImage_false"
                  value={formData}
                  onChange={onCheckbox}
                  defaultChecked={false}
                />
                <label htmlFor="useAttachImage_false">미사용</label>
              </td>
            </tr>
            <tr>
              <th>글작성 후 이동</th>
              <td>
                <input
                  type="radio"
                  id="locationAfterWriting_view"
                  value={formData}
                  onChange={onCheckbox}
                  defaultChecked={'view'}
                />
                <label htmlFor="locationAfterWriting_view">게시글</label>

                <input
                  type="radio"
                  id="locationAfterWriting_list"
                  value={formData}
                  onChange={onCheckbox}
                />
                <label htmlFor="locationAfterWriting_list">목록</label>
              </td>
            </tr>
            <tr>
              <th>답글사용</th>
              <td>
                <input
                  type="radio"
                  id="useReply_true"
                  value={formData}
                  onChange={onCheckbox}
                  defaultChecked={true}
                />
                <label htmlFor="useReply_true">사용</label>

                <input
                  type="radio"
                  id="useReply_false"
                  value={formData}
                  onChange={onCheckbox}
                  defaultChecked={false}
                />
                <label htmlFor="useReply_false">미사용</label>
              </td>
            </tr>
            <tr>
              <th>게시판 스킨</th>
              <td>
                <input
                  type="radio"
                  id="skin_default"
                  value={formData}
                  onChange={onCheckbox}
                  defaultChecked={'default'}
                />
                <label htmlFor="skin_default">기본</label>

                <input
                  type="radio"
                  id="skin_gallery"
                  value={formData}
                  onChange={onCheckbox}
                />
                <label htmlFor="skin_gallery">갤러리</label>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="btns">
          <button type="reset">다시작성</button>
          <button type="submit">등록하기</button>
        </div>
      </FormBox>
    </section>
  );
};


export default BoardForm
