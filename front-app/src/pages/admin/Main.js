import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const Main = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('사이트 관리')}</title>
      </Helmet>
      <h1>관리자 페이지 메인</h1>
    </>
  );
};

export default React.memo(Main);
