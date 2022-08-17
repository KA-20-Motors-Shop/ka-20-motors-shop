import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  height: 70px;
  border-bottom: 2px solid lightgray;

  .desktopNav {
    display: none;
  }

  @media screen and (min-width: 1024px) {
    .desktopNav {
      width: 50%;
      display: flex;
      justify-content: space-evenly;
    }

    .leftDivNav {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: space-evenly;
      border-right: 3px solid lightgray;
    }
  }
`;

export const StyledMenuButton = styled.button`
  border: none;
  background: transparent;
  font-size: 16px;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
