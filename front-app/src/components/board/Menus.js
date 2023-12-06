import React from 'react';
import MenuDetail from './MenuDetail';
import styled from 'styled-components';

const ListBox = styled.ul`
  .submenus {
    margin-top: 45px;
    background: #fff;
    box-shadow: 1px 1px 5px #cdced5;
    margin-bottom: 30px;
    display: flex;
    height: 60px;
  }
  a.on {
    background: #596b99;
    color: #fff;
  }

  .submenus a {
    line-height: 60px;
    padding: 0 40px;
    font-size: 18px;
  }
`;


const Menus = ({ code }) => {
  const getMenuDetails = () => {
    const menus = [
      { code: 'board', label: '게시판 목록', link: '/admin/board' },
      {
        code: 'register',
        label: '게시판 등록/수정',
        link: '/admin/board/register',
      },
      { code: 'posts', label: '게시판 관리', link: '/admin/board/posts' },
    ];

    return code ? menus.filter((menu) => menu.code === code) : menus;
  };

  return (
    <ListBox>
      <nav className="submenus">
        {getMenuDetails().map((menu) => (
          <MenuDetail key={menu.code} {...menu}  isActive={menu.code === code} />
        ))}
      </nav>
    </ListBox>
  );
};

export default Menus;
