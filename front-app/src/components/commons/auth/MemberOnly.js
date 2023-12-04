import React, { useContext } from 'react';
import UserContext from '../../../modules/user';
import { Navigate } from 'react-router-dom';
/**
 * 회원 전용 페이지에는 이 컴포넌트를 항상 감싸 주고, 미로그인 상태일떄는 로그인 페이지 이동
 *
 */
const MemberOnly = ({ children }) => {
  const {
    state: { isLogin },
  } = useContext(UserContext);

  return isLogin ? children : <Navigate to="/login" />;
};

export default React.memo(MemberOnly);
