import styled from 'styled-components';
const Span = styled.span`
  font-size: 24px;
  color: gray;
`;
const DeleteItem = styled.button`
  background-color: #1976d2;
  color: white;
  padding: 6px 14px;
  border-radius: 24px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  :hover,
  :focus {
    background-color: white;
    color: #1976d2;
    outline: 1px solid gray;
  }
`;
const List = styled.ul`
  list-style: none;

  padding: 0;
`;
const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  border: 1px solid gray;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 5px;
`;
export { Span, DeleteItem, List, ListItem };
