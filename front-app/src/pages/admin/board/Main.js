import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import AdminBoard from '../../../components/board/admin/AdminBoard';

const Main = () => {
  const { t } = useTranslation();

  const onSelectBoard = (boardId) => {
    console.log(`Selected board with ID: ${boardId}`);
  };

  return (
    <div>
      <Helmet>
        <title>{t('게시판 관리 - 게시판 목록')}</title>
      </Helmet>
      <AdminBoard />
    </div>
  );
};

export default React.memo(Main);
