import styled from 'styled-components';
import {Link, NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';

const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  border-top: 1px solid black;
  background: white;
  > ul {
  width: 100%;
  display: flex;
  > li {
  width: 33.3333%;
  text-align: center;
  > a {
   padding: 4px 16px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   > .icon {
    width: 30px;
    height: 30px;
  }
  &.active {
    .icon {
      fill: #fedb43;
    }
  }
  }
  }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName="active">
            <Icon name="label"/>
            标签
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="active">
            <Icon name="morny"/>
            记账
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="active">
            <Icon name="chart"/>
            统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
