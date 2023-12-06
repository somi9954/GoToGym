import styled from 'styled-components';
import { Navigate, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import UserContext from '../../modules/user';
import Banner from '../../components/Banner';
import ReactPlayer from 'react-player';

const OuterBox = styled.nav`
  white-space: pre-wrap;
  .menubar {
    justify-content: space-between;
    text-align: center;
    padding: 15px 0 15px;
    border: 1px solid #596b99;
    font-weight: bold;
    font-size: 15px;

    a {
      padding: 15px;
    }
  }
  h1 {
    display: flex; /* 플렉스 박스 속성을 추가하여 텍스트와 테두리가 같은 라인에 표시됩니다. */
    align-items: center; /* 수직으로 가운데 정렬합니다. */
    padding: 5px 15px;
    border-left: 8px solid #3c4e7a;
    user-select: auto !important;
    margin-left: 0;
    font-size: 23px;
  }
  h4 {
    margin-left: 15px;
  }

  .all_info {
    display: flex;
    margin: 0 auto;
    margin-bottom: 50px;
  }

  .info {
    display: flex; /* 플렉스박스 속성을 사용하여 플렉스 컨테이너 생성 */
    flex-direction: column; /* 항목을 세로로 배열 */
    align-items: center; /* 항목을 수평으로 가운데 정렬 */
    justify-content: center; /* 항목을 수직으로 가운데 정렬 */
    margin-left: 10px;
    margin-bottom: 40px;
    text-align: center;
    border: 2px solid #596b99;
    border-radius: 3px;
    margin: 0 auto;
  }
  .community {
    .list {
      .c1 {
        border: 2px solid #596b99;
        border-radius: 3px;
        margin-bottom: 15px; /* 시각적으로 요소를 구분하기 위해 여백 추가 */
        padding: 10px; /* 선택 사항: 더 나은 시각적 표시를 위해 여백 추가 */
      }
    }
  }

  .c1 {
    display: table-row;
    span {
      border-bottom: 1px solid #61729e;
      margin-right: 10px;
      font-size: 15px;
    }

    span::before {
      content: ' '; /* 비중단 공백 삽입 */
    }
  }
`;
const Main = () => {
  const { t } = useTranslation();
  const {
    state: { isLogin, isAdmin },
  } = useContext(UserContext);

  const [isWindow, setIsWindow] = useState(false);

  useEffect(() => {
    setIsWindow(true);
  }, []);

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
      <br />
      <br />
      <Banner />
      <br />
      <h1>운동정보</h1>
      <section className="all_info">
        <section className="info">
          <h4>부정적인 생각이 허리 통증을 악화시킨다</h4>
          {isWindow && (
            <div>
              <ReactPlayer
                className="react-player"
                url="https://youtu.be/C8-lYoIjGBs"
                width="530px"
                height="530px"
                muted={true} //chrome정책으로 인해 자동 재생을 위해 mute 옵션을 true로 해주었다.
                playing={false}
                loop={true}
              />
            </div>
          )}
        </section>
        <section className="info">
          <h4>단 하나의 이상적인 자세는 없다</h4>
          {isWindow && (
            <div>
              <ReactPlayer
                className="react-player"
                url="https://youtu.be/8iTag3XKncU"
                width="530px"
                height="530px"
                muted={true} //chrome정책으로 인해 자동 재생을 위해 mute 옵션을 true로 해주었다.
                playing={false}
                loop={true}
              />
            </div>
          )}
        </section>
        <section className="info">
          <h4>허리 통증은 약한 코어 때문이라고?</h4>
          {isWindow && (
            <div>
              <ReactPlayer
                className="react-player"
                url="https://youtu.be/cDZ2McjKb40"
                width="530px"
                height="530px"
                muted={true} //chrome정책으로 인해 자동 재생을 위해 mute 옵션을 true로 해주었다.
                playing={false}
                loop={true}
              />
            </div>
          )}
        </section>
      </section>
      <h1>커뮤니티</h1>
      <section className="community">
        <div className="list">
          <div className="c1">
            <span>
              초보 헬린이 무슨 운동부터 하면 좋을까요?{'    '} 2023-11-25
            </span>
          </div>
          <br />
          <div className="c1">
            <span>
              인천 운동할 좋은 헬스장 없나요?{'                 '} 2023-11-27
            </span>
          </div>
          <br />
          <div className="c1">
            <span>
              프로틴 추천 해주세요.{'                                '}{' '}
              2023-11-29
            </span>
          </div>
          <br />
          <div className="c1">
            <span>
              운동 루틴 좀 봐주세요.{'                               '}{' '}
              2023-11-30
            </span>
          </div>
          <br />
          <div className="c1">
            <span>
              운동 루틴 좀 봐주세요.{'                               '}{' '}
              2023-11-30
            </span>
          </div>
        </div>
      </section>
    </OuterBox>
  );
};

export default Main;
