import styled from "styled-components";

export const ProductCard = styled.section`
  font-family: "Inter";
  h1 {
    font-family: "Lexend";
    font-weight: 600;
    font-size: 20px;
    color: #212529;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    color: #495057;
  }

  .imgBox {
    background-color: #fdfdfd;
    border-radius: 4px;
  }
  .DetailBox {
    display: flex;
    flex-direction: column;
    padding: 28px;

    @media (min-width: 768px) {
      padding: 28px 44px;
    }
  }
  .priceYearKmBox {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .yearKm {
    font-weight: 500;
    color: #4529e6;
    font-size: 14px;

    display: flex;
    flex-direction: row;
    text-align: center;
    background-color: #edeafd;
    border-radius: 4px;
    padding: 4px 8px;
  }
  .price {
    font-weight: 500;
    font-size: 16px;
    color: #212529;
  }

  .descriptionBox {
    background-color: #fdfdfd;
    border-radius: 4px;
    padding: 36px 28px;

    @media (min-width: 768px) {
      padding: 36px 44px;
    }
  }

  .photosBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 36px 44px;
    background: #fdfdfd;
    border-radius: 4px;
  }

  .smallImgBox {
    background: #e9ecef;
    border-radius: 4px;
    padding: 36px 44px;
  }

  .sellerDescriptionBox {
    background: #fdfdfd;
    border-radius: 4px;

    padding: 40px 28px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .profilePicture {
    border-radius: 50%;
  }
`;
