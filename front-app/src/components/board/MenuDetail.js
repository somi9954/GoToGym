import React from 'react';

const MenuDetail = ({ code, label, link, isActive }) => (
  <li>
    <a className={isActive ? 'on' : ''} href={link} data-code={code}>
      {label}
    </a>
  </li>
);

export default MenuDetail;