import LoginForm from '../../components/member/LoginForm';
import React, { useState, useCallback, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { loginProcess, getLoginInfo } from '../../api/member/login';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../modules/user';
import cookie from 'react-cookies';

const LoginContainer = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const {
    action: { setIsLogin, setUserInfo, setIsAdmin },
  } = useContext(UserContext);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const requiredFields = {
        email: t('NotBlank_email'),
        password: t('NotBlank_password'),
      };

      const _errors = {};
      setErrors(() => _errors);
      let hasError = false; // 검증 실패 여부
      for (const field in requiredFields) {
        if (!form[field] || !form[field].trim()) {
          _errors[field] = _errors[field] || [];

          _errors[field].push(requiredFields[field]);

          hasError = true;
        }
      }

      if (hasError) {
        setErrors(() => _errors);

        return;
      }

      // 로그인 처리
      loginProcess(form)
        .then((result) => {
          if (result && typeof result.success === 'undefined') {
            // 로그인 성공
            setErrors(() => {});
            setForm({});
            const expires = new Date();
            expires.setDate(expires.getDate() + 7);
            // 로그인 처리
            cookie.save('token', result, {
              path: '/',
              expires,
            });

            getLoginInfo()
              .then((userInfo) => {
                setUserInfo(userInfo);
                setIsLogin(true);
                setIsAdmin(userInfo.type === 'ADMIN'); // // 관리자 여부 업데이트
                navigate('/');
              })
              .catch((err) => console.error(err));
          } else {
            // 로그인 실패
            setErrors(() => ({ global: t('Login_fail') }));
          }
        })
        .catch(() => setErrors(() => ({ global: t('Login_fail') })));
    },
    [t, form, setUserInfo, setIsLogin, setIsAdmin, navigate],
  );

  const onChange = useCallback((e) => {
    const target = e.currentTarget;

    setForm((form) => ({ ...form, [target.name]: target.value }));
  }, []);
  return <LoginForm onSubmit={onSubmit} onChange={onChange} errors={errors} />;
};

export default React.memo(LoginContainer);
