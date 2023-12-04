import React, { useState, useEffect } from 'react';
import MemberList from '../../components/member/MemberList';
import { getLoginInfo } from '../../api/member/login';

const MemberListContainer = () => {
  const [members, setMembers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // getLoginInfo 함수를 호출하여 데이터를 받아오기
    getLoginInfo()
      .then((userInfo) => {
        // 데이터가 배열이 아니라면 배열로 변환
        const membersArray = Array.isArray(userInfo) ? userInfo : [userInfo];
        setMembers(membersArray);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <MemberList members={members} />;
};

export default MemberListContainer;