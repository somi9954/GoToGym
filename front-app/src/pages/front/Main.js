import styled from 'styled-components';
import { Navigate, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import UserContext from '../../modules/user';


const OuterBox = styled.nav`
  .menubar {
    text-align: center;
    padding: 15px;
    margin-left: 15px;
  }
`;
const Main = () => {
  const { t } = useTranslation();
  const {
    state: { isLogin, isAdmin },
  } = useContext(UserContext);
  return (
    <OuterBox>
      <div className="menubar">
        <NavLink
          to="/Info"
          className={({ isActive }) => classNames({ on: isActive })}
        >
          {t('운동정보')}
        </NavLink>
        <NavLink
          to="/Diary"
          className={({ isActive }) => classNames({ on: isActive })}
        >
          {t('다이어리')}
        </NavLink>
        <NavLink
          to="/Community"
          className={({ isActive }) => classNames({ on: isActive })}
        >
          {t('커뮤니티')}
        </NavLink>
        <NavLink
          to="/location"
          className={({ isActive }) => classNames({ on: isActive })}
        >
          {t('내 주변 헬스장')}
        </NavLink>
      </div>

    </OuterBox>
  );
};

export default Main;
