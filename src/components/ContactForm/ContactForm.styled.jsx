import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const FormContainer = styled.div`
  background-color: #1976d2;
  ${'' /* border-radius: 8px; */}
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Text = styled.p`
  font-size: 24px;
  padding: 0;
  margin: 0;
  margin-bottom: 5px;
  margin-top: 20px;
  color: white;
`;
const InputForm = styled.input`
  height: 25px;
  width: 300px;
  border: 1px solid #1976d2;
  border-radius: 4px;
`;
const Submit = styled.button`
  margin-top: 20px;
  width: 120px;
  padding: 8px 12px;
  border-radius: 24px;
  border: 1px solid white;
  font-size: 16px;
  font-weight: 500;
  background-color: white;
  color: #1976d2;
  cursor: pointer;
  :hover,
  :focus {
    background-color: #1976d2;
    color: white;
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
const Label = styled.label`
  background-color: #1976d2;
  margin-left: auto;
  margin-right: auto;
`;
const FilterInput = styled.input`
  height: 25px;
  width: 300px;
  border: 1px solid #1976d2;
  border-radius: 4px;
`;
const StyledLink = styled(NavLink)`
  font-size: 14px;
  color: #1976d2;
`;
export {
  FormContainer,
  Form,
  Text,
  InputForm,
  Submit,
  Title,
  Label,
  FilterInput,
  StyledLink,
};
