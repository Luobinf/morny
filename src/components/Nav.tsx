import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';

const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  border-top: 1px solid black;
  > ul {
  width: 100%;
  display: flex;
  > li {
  width: 33.3333%;
  text-align: center;
  padding: 4px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > .icon {
  width: 30px;
  height: 30px;
  }
  }
  }
`;

const Nav = () => {
  return (
      <NavWrapper>
        <ul>
          <li>
            <Icon name="label"/>
            <Link to="/tags">标签</Link>
          </li>
          <li>
            <Icon name="morny"/>
            <Link to="/money">记账</Link>
          </li>
          <li>
            <Icon name="chart"/>
            <Link to="/statistics">统计</Link>
          </li>
        </ul>
      </NavWrapper>
  );
};

export default Nav;
