import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const LinkContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const AppBarLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 16px;
  font-weight: 600;
  padding: 6px 8px;
  &.active {
    background-color: white;
    color: #1976d2;
    border-radius: 24px;
  }
  :hover,
  :focus {
    background-color: white;
    color: #1976d2;
    outline: 1px solid gray;
    border-radius: 24px;
  }
`;
export { AppBarLink, LinkContainer };
