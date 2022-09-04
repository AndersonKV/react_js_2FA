import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  div:first-of-type {
    background-color: #fff;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    span:first-of-type {
      font-weight: bold;
    }
  }

  div:last-of-type {
   margin-top: 10px;
   a {
    padding: 5px;
    color: #fff;
    font-weight: bold;
    }
  }
 
`;
