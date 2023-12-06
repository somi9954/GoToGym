import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MemberList from '../../components/member/MemberList';
import { getLoginInfo } from '../../api/member/login';

const MemberListContainer = () => {
  const [members, setMembers] = useState([]);
  const [error, setError] = useState(null);
  const history = useNavigate();

  useEffect(() => {

    getLoginInfo()
      .then((userInfo) => {

        const membersArray = Array.isArray(userInfo) ? userInfo : [userInfo];
        setMembers(membersArray);
      })
      .catch((error) => {
        setError(error.message);
        alert(error.message);
        history.goBack();
      });
  }, [history]);

  if (error) {

    return null;
  }

  return <MemberList members={members} />;
};

export default MemberListContainer;