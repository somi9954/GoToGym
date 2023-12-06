import apiRequest from '../../lib/apiRequest';

export const checkUserExists = (email) =>
  new Promise((resolve, reject) => {
    apiRequest(`/member/exists/${email}`)
      .then((res) => {
        if (res.data.success) {
          resolve(true);
        } else {
          reject(new Error('Not Reigstered'));
        }
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });

export const registerUser = (form) =>
  new Promise((resolve, reject) => {
    apiRequest(`/member`, 'POST', form)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        console.log('err', err);
        resolve(err);
      });
  });
