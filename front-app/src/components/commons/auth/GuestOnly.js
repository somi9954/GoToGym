import React, { useContext, useEffect } from 'react';
import UserContext from '../../../modules/user';
import { useNavigate } from 'react-router-dom';
/**
 * 비회원 전용 페이지에는 이 컴포넌트를 항상 감싸 주고,로그인 상태일떄는 이전 페이지로 이동
 *
 */
const GuestOnly = ({ children }) => {
  const {
    state: { isLogin },
  } = useContext(UserContext);

  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogin) {
      navigate(-1);
    }
  }, [isLogin, navigate]);

  return children;
};

export default React.memo(GuestOnly);
