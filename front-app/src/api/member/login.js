import apiRequest from '../../lib/apiRequest';
import cookie from 'react-cookies';

/**
 * 로그인 처리
 *
 * @param form
 * @returns
 */
export const loginProcess = (form) =>
  new Promise((resolve, reject) =>
    apiRequest('/member/token', 'POST', form)
      .then((res) => {
        if (res.data.success) {
          const token = res.data.data.accessToken;
          resolve(token);
        } else {
          reject(res.data);
        }
      })
      .catch((err) => reject(err)),
  );

/** 회원정보 조회  */
export const getLoginInfo = () =>
  new Promise((resolve, reject) => {
    const token = cookie.load('token');
    if (!token) {
      reject('Login_fail');
      return;
    }

    return apiRequest('/member/info', 'GET')
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          const userInfo = {
            token,
            seq: data.seq,
            email: data.email,
            name: data.name,
            type: data.type,
            mobile: data.mobile,
          };

          resolve(userInfo);
        } else {
          reject(res.data);
          cookie.remove('token');
        }
      })
      .catch((err) => {
        reject(err);
        cookie.remove('token');
      });
  });

export const logout = () => {
  cookie.remove('token');
};