import styled from "styled-components";

const AdRegisterForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px 16px;
  text-align: left;

  align-items: stretch;

  form {
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .choiceButtons {
    display: flex;
    flex-direction: row;
    justify-content: center;

    button {
      width: 50%;
      margin-right: 5px;
      margin-left: 5px;
    }
  }

  .anoKmPreco {
    display: flex;
    flex-direction: row;

    div {
      width: 33%;
      margin-right: 5px;
      margin-left: 5px;
    }

    input {
      width: 100%;
    }

    @media (min-width: 768px) {
      div {
        width: 33%;
        margin-right: 5px;
        margin-left: 5px;
      }
    }
  }
  .cancelCreateButtons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;

    button {
      width: 100%;
    }

    .cancel {
      width: 100%;
      margin-right: 5px;
    }
    .create {
      width: 100%;
      margin-left: 5px;
    }

    @media (min-width: 768px) {
      justify-content: end;

      .cancel {
        width: 126px;
      }
      .create {
        width: 193px;
      }
    }
  }

  .addFieldButton {
    align-self: flex-start;
    width: 100%;

    button {
      width: 100%;
    }

    @media (min-width: 768px) {
      width: 315px;
    }
  }
  @media (min-width: 768px) {
    padding: 18px 24px;
  }
`;
export default AdRegisterForm;
