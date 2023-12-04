import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { FcMenu, FcAutomatic, FcConferenceCall  } from 'react-icons/fc';
import { makeStyles } from '@material-ui/core/styles';
import sizeNames from '../../styles/sizes';

const { Big } = sizeNames;

const useStyles = makeStyles({

  icon: {
    fontSize : Big,
    margin:  '0 auto',
  }
});


const Side = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <aside>
      <ul>
        <li>
          <NavLink
            to="/admin/config"
            className={({ isActive }) => classNames({ on: isActive })}
          >
            <FcAutomatic className={classes.icon}/>
            {t('사이트 설정')}
          </NavLink>
          <NavLink
            to="/admin/member"
            className={({ isActive }) => classNames({ on: isActive })}
          >
            <FcConferenceCall className={classes.icon} />
            {t('회원 관리')}
          </NavLink>
          <NavLink
            to="/admin/board"
            className={({ isActive }) => classNames({ on: isActive })}
          >
            <FcMenu className={classes.icon} />
            {t('게시판 관리')}
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Side;
