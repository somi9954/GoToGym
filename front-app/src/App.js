import React, { useContext, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getLoginInfo } from './api/member/login';
import FrontLayout from './layouts/front/CommonLayout';
import AdminLayout from './layouts/admin/CommonLayout';
import NotFound from './pages/commons/NotFound';
import MemberListContainer from './containers/member/MemberListContainer';

/* 클라이언트 페이지 S */
import Main from './pages/front/Main';
import Login from './pages/front/member/Login';
import Join from './pages/front/member/Join';
import Logout from './pages/front/member/Logout';
import Diary from './pages/front/member/Diary';
import BoardForm from './components/board/BoardForm';
import CommunityList from './components/Community/CommunityList';

/* 클라이언트 페이지 E */

/* 관리자 페이지 S */
import AdminMain from './pages/admin/Main';
import AdminBoard from './pages/admin/board/Main';
/* 관리자 페이지 E */

import UserContext from './modules/user';

const App = () => {
  /* 로그인 유지 처리 S */
  const {
    state: { isLogin },
    action: { setUserInfo, setIsLogin, setIsAdmin },
  } = useContext(UserContext);

  useEffect(() => {
    if (isLogin) {
      return;
    }

    getLoginInfo()
      .then((userInfo) => {
        setUserInfo(userInfo);
        setIsLogin(true);
        setIsAdmin(userInfo.type === 'ADMIN'); // 관리자 여부 업데이트
      })
      .catch((err) => console.log(err));
    /* 로그인 유지 처리 E */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route path="/" element={<FrontLayout />}>
        <Route index element={<Main />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/diary" element={<Diary />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminMain />} />
        <Route path="member" element={<MemberListContainer />} />
        <Route path="/admin/board" element={<AdminBoard />} />
        <Route path="/admin/board/register" element={<BoardForm />} />
      </Route>

      <Route path="/Communtiy" element={<CommunityList />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
