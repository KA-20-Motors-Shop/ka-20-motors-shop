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
    margin-top: 32px;
    margin-bottom: 32px;
    line-height: 172%;

    text-align: start;
  }

  .imgBox {
    background-color: #fdfdfd;
    border-radius: 4px;
  }

  .detailBox {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 28px;

    text-align: left;

    width: 351px;

    margin: 15px;

    @media (min-width: 768px) {
      padding: 28px 44px;

      width: 751px;
    }
  }

  .priceYearKmBox {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;

    margin-top: 20px;
    margin-bottom: 20px;

    @media (min-width: 768px) {
      margin-top: 40px;

      align-items: center;

      flex-direction: row;
    }
  }
  .yearKmBox {
    font-weight: 500;
    color: #4529e6;
    font-size: 14px;

    display: flex;
    flex-direction: row;

    margin-bottom: 16px;

    @media (min-width: 768px) {
      margin: 0px;
    }
  }

  .year {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-right: 6px;
    background-color: #edeafd;
    border-radius: 4px;
    padding: 4px 8px;
  }
  .km {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-left: 6px;
    background-color: #edeafd;
    border-radius: 4px;
    padding: 4px 8px;
  }

  .price {
    font-family: "Lexend";
    font-weight: 500;
    font-size: 16px;
    color: #212529;
  }

  .descriptionBox {
    background-color: #fdfdfd;
    border-radius: 4px;
    padding: 36px 28px;

    width: 351px;
    text-align: start;

    margin: 15px;

    @media (min-width: 768px) {
      padding: 36px 44px;

      width: 751px;
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

    width: 351px;

    margin: 15px;

    @media (min-width: 768px) {
      width: 440px;
    }
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

    width: 351px;

    margin: 15px;

    @media (min-width: 768px) {
      width: 440px;
    }
  }

  .profilePicture {
    img {
      border-radius: 50%;
      width: 77px;

      @media (min-width: 768px) {
        width: 104px;
      }
    }
  }

  @media (min-width: 768px) {
    width: 751px;
  }
`;
