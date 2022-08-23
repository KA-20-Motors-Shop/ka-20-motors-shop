import styled from "styled-components";

const CommentsCard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 36px 28px;

  width: 351px;

  font-family: "Inter";

  h1 {
    font-family: "Lexend";
    font-weight: 600;
    font-size: 20px;
    color: #212529;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    color: #495057;
    text-align: start;

    line-height: 172%;
  }

  .commentBox {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 22px;
    margin-bottom: 22px;
  }

  .photoNameDateBox {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .photo {
    border-radius: 50%;
    margin-left: 4px;
  }
  .name {
    font-weight: 500;
    font-size: 14px;
    color: #212529;
    margin-left: 4px;
    margin-right: 4px;
  }
  .dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #adb5bd;
    margin-left: 4px;
    margin-right: 6px;
  }
  .date {
    font-weight: 400;
    font-size: 12px;
    color: #868e96;
    margin-left: 6px;
  }

  @media (min-width: 768px) {
    width: 751px;
  }
`;

export default CommentsCard;
