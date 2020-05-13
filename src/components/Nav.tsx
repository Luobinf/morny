import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import x from 'icons/label.svg';

console.log(x);
const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  border-top: 1px solid black;
  > ul {
  width: 100%;
  display: flex;
  > li {
  width: 33.3333%;
  text-align: center;
  padding: 16px;
  }
  }
`;

const Nav = () => {
  return (
      <NavWrapper>
        <ul>
          <li>
            <Link to="/tags">标签</Link>
            <img src={x} alt=""/>
          </li>
          <li>
            <Link to="/money">记账</Link>
          </li>
          <li>
            <Link to="/statistics">统计</Link>
          </li>
        </ul>
      </NavWrapper>
  );
};

export default Nav;
