import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  position: relative;
  color: #8f9eb2;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  transition: color 300ms ease-in-out, after 300ms ease-in-out;

  &:hover,
  &:focus {
    color: #6487ef;
  }

  &.active {
    color: #6487ef;
  }
`;

export const Nav = styled.div`
  display: flex;
  gap: 20px;
`;
