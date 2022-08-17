import styled from "styled-components";

export const StyledFormSection = styled.section`
  background-color: #f1f3f5;
  padding: 50px;
`;

export const StyledFormDiv = styled.div`
  width: 40%;
  background-color: #ffffff;
  margin: 0px auto;
  border-radius: 4px;
  min-width: 300px;
  max-width: 400px;
  padding: 15px;

  h3 {
    margin-top: 0;
  }

  form {
    width: 90%;
    text-align: left;
    margin: 0 auto;
    div {
      margin: 10px auto;
    }
    input {
      width: 100%;
    }
  }
`;
