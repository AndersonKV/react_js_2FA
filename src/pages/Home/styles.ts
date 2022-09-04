import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
   height: 100vh;

  div {
    display: flex;
    flex-direction: row;
   
    span:first-child{
      font-weight: bold;
      }
  }
`;
