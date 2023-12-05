import React, { useState, useEffect } from 'react';
import CommunityList from '../../components/Community/CommunityList';
import apiRequest from '../../lib/apiRequest';

const CommunityListContainer = () => {
  const [boardList, setBoardList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // API에서 게시판 목록 데이터 가져오기
    apiRequest.get('/api/v1/board/list') // 엔드포인트에서 {bId}를 제거
      .then(response => {
        setBoardList(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('게시판 목록을 가져오는 중 에러 발생:', error);
        setLoading(false);
      });
  }, []);

  return <CommunityList boardList={boardList} loading={loading} />;
};

export default CommunityListContainer;
