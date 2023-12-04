import React, { useContext } from 'react';
import UserContext from '../../modules/user';
import loadable from '@loadable/component';
const UnAuthorized = loadable(() =>
  import('../../components/commons/errors/UnAuthorized'),
);

/**
 * 관리자 페이지는 항상 이 컨테이너를 감싸주고, 관리자가 아닌 경우 접근 권한 없음 컴포넌트 출력
 *
 * @returns
 */
const AdminOnlyContainer = ({ children }) => {
  const { isAdmin } = useContext(UserContext);
  return isAdmin ? children : <UnAuthorized />;
};

export default React.memo(AdminOnlyContainer);
