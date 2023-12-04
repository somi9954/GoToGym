import React, { useState, useCallback } from 'react';
import { produce } from 'immer';
import { useTranslation } from 'react-i18next';
import JoinForm from '../../components/member/JoinForm';
import { registerUser } from '../../api/member/join';
import { useNavigate } from 'react-router-dom';

const JoinContainer = () => {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    agree: false,
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      /**
       * 필수 항목
       */
      const requiredFields = {
        email: t('NotBlank_email'),
        password: t('NotBlank_password'),
        confirmPassword: t('NotBlank_confirmPassword'),
        name: t('NotBlank_name'),
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

      /* 약관 동의 체크 */
      if (!form.agree) {
        _errors.agree = _errors.agree || [];
        _errors.agree.push(t('AssertTrue_join_agree'));
        hasError = true;
      }

      if (hasError) {
        setErrors(() => _errors);

        return;
      }

      // 회원가입 처리
      registerUser(form)
        .then((result) => {
          if (result.success) {
            setForm(() => ({
              agree: false,
            }));
            setErrors(() => {});

            navigate('/login');
          } else {
            setErrors(() => result.message);
          }
        })
        .catch((err) => {});
    },
    [form, t, navigate],
  );

  const onChange = useCallback((e) => {
    const target = e.currentTarget;
    setForm(
      produce((draft) => {
        draft[target.name] = target.value;
      }),
    );
  }, []);

  const onToggle = useCallback((e) => {
    setForm(
      produce((draft) => {
        draft.agree = !draft.agree;
      }),
    );
  }, []);

  return (
    <JoinForm
      onSubmit={onSubmit}
      onChange={onChange}
      onToggle={onToggle}
      form={form}
      errors={errors}
    />
  );
};

export default React.memo(JoinContainer);
