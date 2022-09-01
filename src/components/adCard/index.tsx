import { getInitials } from "../../utils";
import AdCardStyle from "./style";
import { IAd } from "../../Interfaces";

const AdCard = (Ad: IAd) => {
  const userName = Ad.user.name;
  return (
    <AdCardStyle>
      <div className="imgBox">
        <img src={Ad.image} alt={Ad.title} />
        {Ad.isActive ? (
          <span className="active">Ativo</span>
        ) : (
          <span className="inactive">Inativo</span>
        )}
      </div>
      <div className="descriptionBox">
        <h3 className="title">{Ad.title}</h3>
        <p className="description">{Ad.description}</p>
        <div className="userBox">
          <div className="userImg">{getInitials(userName)}</div>
          <p className="userName">{userName}</p>
        </div>
        <div className="kmYearPrice">
          <div>
            <span className="kmYear">{Ad.mileage}</span>
            <span className="kmYear">{Ad.year}</span>
          </div>
          <h3 className="price">{Ad.price}</h3>
        </div>
      </div>
    </AdCardStyle>
  );
};
export default AdCard;
