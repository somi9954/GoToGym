import React, { useContext } from 'react';
import UserContext from '../../../modules/user';
import loadable from '@loadable/component';
const UnAuthorized = loadable(() => import('../errors/UnAuthorized'));

/**
 * 관리자 페이지는 항상 이 컴포넌트로 감싸주고, 관리자가 아닌 경우 접근 권한 없음 컴포넌트 출력
 *
 * @returns
 */
const AdminOnly = ({ children }) => {
  const {
    state: { isAdmin },
  } = useContext(UserContext);
  return isAdmin ? children : <UnAuthorized />;
};

export default React.memo(AdminOnly);
