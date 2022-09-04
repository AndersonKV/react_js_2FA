import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  
  input {
    width: 100%;
    padding: 12px 20px;
    margin: 5px 0;
    box-sizing: border-box;
    border: 1.5px solid #d3d3d3;
    transition: 0.2s;
    outline: none;
    border-radius: 4px;
    color: gray;
  }

  input:focus {
    border: 1.5px solid #c0c0c0;
  }

  div {
    margin: 0 0px;

    p {
      color: red;
      font-weight: bold;
      font-size: 10px;
      label {
        color: #34495e;
      }
    }
  }
`;
