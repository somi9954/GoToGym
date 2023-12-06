import React, { useState, useEffect } from 'react';
import apiRequest from '../../lib/apiRequest';
const Community = () => {
  console.log("CommunityList 컴포넌트가 렌더링되었습니다.");
  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    // API에서 게시판 목록 데이터 가져오기
    apiRequest.get('/api/v1/board/list/{bId}') // API 엔드포인트에 맞게 URL 업데이트
      .then(response => {
        setBoardList(response.data); // API가 게시판 데이터 배열을 반환한다고 가정
      })
      .catch(error => {
        console.error('게시판 목록을 가져오는 중 에러 발생:', error);
      });
  }, []); // 의존성 배열이 비어있으면 효과가 마운트될 때 한 번 실행됨

  return (
    <div>
      <h1>커뮤니티 목록</h1>
      <ul>
        {boardList.map(board => (
          <li key={board.id}>
            <a href={`/board/view/${board.id}`}>{board.title}</a>
            {/* 다른 게시판 정보를 필요에 따라 표시 */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Community;