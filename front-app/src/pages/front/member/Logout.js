import { Navigate } from 'react-router-dom';
import { logout } from '../../../api/member/login';
import React, { useContext, useEffect } from 'react';
import UserContext from '../../../modules/user';

const Logout = () => {
  const {
    action: { setIsLogin, setUserInfo },
  } = useContext(UserContext);
  useEffect(() => {
    logout();

    setIsLogin(false);
    setUserInfo({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Navigate to="/login" replace={true} />;
};

export default Logout;
