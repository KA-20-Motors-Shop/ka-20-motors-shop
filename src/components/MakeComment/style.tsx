import styled from "styled-components";

export const MakeCommentCard = styled.section`
  width: 351px;
  display: flex;
  flex-direction: column;
  padding: 36px 26px;
  font-family: "Inter";

  .photoNameBox {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .photo {
    width: 32px;
    margin-right: 8px;
    img {
      border-radius: 50%;
    }
  }
  .name {
    font-weight: 500;
    font-size: 14px;
  }

  .commentBox {
    margin-top: 24px;
    margin-bottom: 24px;
  }

  .quickResponseBox {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .quickResponse {
    background-color: #e9ecef;
    border-radius: 24px;
    color: #868e96;
    font-weight: 500;
    font-size: 12px;
    margin-right: 8px;

    border: none;
  }
`;
