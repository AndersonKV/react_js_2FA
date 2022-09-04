import styled from 'styled-components';


export const StyledButton = styled.button`
  padding: 10px;
  width: 100%;
  font-weight: bold;
  cursor: pointer;
   color: #fff;
  border: none;

  background-color: ${props => props.theme};

`;
