import MemberOnly from '../../../components/commons/auth/MemberOnly';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import AdminOnly from '../../../components/commons/auth/AdminOnly';
import BoardFormContainer from '../../../containers/board/BoardFormContainer';
const AdminBoard = () => {
  const { t } = useTranslation();
  return (
    <AdminOnly>
      <Helmet>
        <title>{t('게시판')}</title>
      </Helmet>
      <BoardFormContainer />
    </AdminOnly>
  );
};

export default AdminBoard;
