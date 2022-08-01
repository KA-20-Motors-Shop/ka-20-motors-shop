import styled from "styled-components";

export const InputOne = styled.input`
  height: 38px;
  border: 1.5px solid #f1f3f5;
  border-radius: 4px;
  color: #868e96;
  font-family: "Inter";
  font-size: 16px;
  text-align: start;

  margin: 8px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;

  :hover {
    background-color: #f1f3f5;
  }

  :focus {
    outline: none !important;
    border: 1.5px solid #5126ea;
    outline: none;
  }
`;

export const TextField = styled.input`
  height: 70px;
  border: 1.5px solid #f1f3f5;
  border-radius: 4px;
  color: #868e96;

  text-align: start;
  font-family: "Inter";
  font-size: 16px;

  margin: 8px;
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
`;
