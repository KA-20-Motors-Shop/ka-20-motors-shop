import Button from "../button";
import { ProductCard } from "./style";

interface ICardProduct {
  product: object;
}

const Product = () => {
  const images = [
    "https://static.wixstatic.com/media/532c77_0f9316e263b441a0969b69921d881785~mv2.png/v1/fill/w_460,h_236,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/carro.png",
    "https://static.wixstatic.com/media/532c77_0f9316e263b441a0969b69921d881785~mv2.png/v1/fill/w_460,h_236,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/carro.png",
  ];

  return (
    <ProductCard>
      <div className="imgBox">
        <img src="https://static.wixstatic.com/media/532c77_0f9316e263b441a0969b69921d881785~mv2.png/v1/fill/w_460,h_236,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/carro.png" />
      </div>
      <div className="detailBox">
        <h1>Carro top o mais foda vc tem que comprar esse carrao 3000</h1>
        <div className="priceYearKmBox">
          <div className="yearKmBox">
            <div className="year">
              <span>2011</span>
            </div>
            <div className="km">
              <span>30000km</span>
            </div>
          </div>
          <h3 className="price">R$ 100000.00</h3>
        </div>
        <Button>Comprar</Button>
      </div>

      <div className="descriptionBox">
        <h1>Descrição</h1>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, magnam
          exercitationem repudiandae quam maxime minima fuga. Quibusdam, optio,
          magnam nihil quisquam distinctio nemo harum autem iste animi ea
          corrupti voluptate.
        </p>
      </div>

      <div className="photosBox">
        <h1>Fotos</h1>
        {images.map((element, index) => {
          return (
            <div key={index} className="smallImgBox">
              <img src={element} />
            </div>
          );
        })}
      </div>

      <div className="sellerDescriptionBox">
        <div className="profilePicture">
          <img src="https://static.wixstatic.com/media/532c77_0f9316e263b441a0969b69921d881785~mv2.png/v1/fill/w_460,h_236,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/carro.png" />
        </div>
        <h1>Agnes Eu</h1>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam a eos
          numquam quibusdam nesciunt architecto eum obcaecati odio molestiae
          molestias excepturi autem, explicabo nobis ducimus temporibus eius
          labore facilis ea?
        </p>
        <Button>Ver todos anúncios</Button>
      </div>
    </ProductCard>
  );
};

export default Product;
