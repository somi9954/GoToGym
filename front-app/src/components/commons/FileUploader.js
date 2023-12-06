import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import loadable from '@loadable/component';
//import apiRequest from '../../lib/apiRequest';

const Message = loadable(() => import('./Message'));

const FileUploader = ({ children }) => {
  const { t } = useTranslation();
  const [message, setMessage] = useState('');
  const onClick = useCallback(() => {
    const fileEl = document.createElement('input');
    fileEl.type = 'file';
    fileEl.click();
    fileEl.onchange = (e) => {
      try {
        const files = e.target.files;
        if (files.length === 0) {
          throw new Error(t('업로드할 파일을 선택하세요.'));
        }
      } catch (err) {
        setMessage(() => err.message);
        console.error(err);
      }
    };
  }, [t]);
  return (
    <>
      <button type="button" onClick={onClick}>
        {children}
      </button>
      {message && <Message>{message}</Message>}
    </>
  );
};

export default React.memo(FileUploader);
