import styled from "styled-components";

export const StyledNavModal = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  background-color: #ffffff;
  top: 68px;
  width: 100%;
  max-width: 400px;
  right: 0;
  border-radius: 5px;
  box-shadow: 1px 10px 26px -3px #000000;
  nav {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    width: 100%;

    div {
      width: 100%;
      height: 236px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }

    button {
      width: 90%;
      text-align: left;
      margin: 5px auto;
      border: none;
      font-size: large;
      background-color: #ffffff;
    }

    .divisionNavModal {
      border-top: 2px solid #adb5bd;
      height: 184px;
    }
  }
`;
