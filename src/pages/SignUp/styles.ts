import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  height: 100vh;

  form {
    background-color: white;
    padding: 25px;
    width: 300px;
  }

  div:last-of-type {
     display: flex;
    justify-content: space-between;
  }
`;
