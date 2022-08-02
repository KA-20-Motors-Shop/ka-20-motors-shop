import styled from "styled-components";

const TextField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin-top: 10px;
  margin-bottom: 10px;

  label {
    font-size: 14px;
    color: #212529;
    font-family: "Inter";
    font-weight: 500;
  }
  input {
    height: 70px;
    border: 1.5px solid #f1f3f5;
    border-radius: 4px;
    color: #868e96;

    text-align: start;
    font-family: "Inter";
    font-weight: 400;
    font-size: 16px;

    margin-top: 8px;
    padding-top: 5px;
    padding-bottom: 35px;
    padding-left: 10px;

    :hover {
      background-color: #f1f3f5;
      border: 1.5px solid #e9ecef;
    }

    :focus {
      outline: none !important;
    }
  }
  span {
  }
`;

export default TextField;
