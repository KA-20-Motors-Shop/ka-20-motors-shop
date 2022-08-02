import Button from "../button";
import { ProductCard } from "./style";

interface ICardProduct {
    product: object;
  }
  
const Product = ({ product }: ICardProduct) => {
    return (
      <ProductCard>
        <div className="imgBox">
          <img alt={product.title} src={product.image}/>
        </div>
        <div className="detailBox">
          <h1>{product.title}</h1>
          <div className="priceYearKmBox">
            <div className="yearKmBox">
              <h3 className="yearKm">{product.year}</h3>
              <h3 className="yearKm">{product.km}</h3>
            </div>
            <h3 className="price">{product.price}</h3>
          </div>
          <Button>Comprar</Button>
        </div>
        <div className="descriptionBox">
          <h1>Descrição</h1>
          <p className="description">{product.description}</p>
        </div>
        <div className="photosBox">
          <h1>Fotos</h1>
          {product.images.map(element => {
            return (
            <img src={element.url} alt={product.title} />
            )
          })}
        </div>
        <div className="sellerDescriptionBox">
          <div className="profilePicture">
            <img src={product.seller.image} alt={product.seller.name} />
          </div>
          <h1>{product.seller.name}</h1>
          <p className="description">{product.seller.description}</p>
          <Button>Ver todos anúncios</Button>
        </div>
      </ProductCard>
    );
  };
  
  export default Product;
  