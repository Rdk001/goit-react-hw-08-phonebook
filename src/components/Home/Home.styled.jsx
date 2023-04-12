import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
const HomeLink = styled(NavLink)`
  margin-top: 30px;
  padding: 8px 12px;

  text-decoration: none;
  border-radius: 24px;

  color: white;
  background-color: #1976d2;
  :hover,
  :focus {
    outline: 1px solid gray;
    background-color: white;
    color: #1976d2;
  }
`;
const Title = styled.h2`
  border-radius: 4px;
  padding: 10px;
  background-color: #1976d2;
  color: white;
  text-align: center;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
const Section = styled.section`
  background-color: ;
  padding: 50px;
  margin-top: 40px;
  border-radius: 6px;
`;

export { ButtonContainer, HomeLink, Section, Title };
