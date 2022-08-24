import Button from "../button";
import TextArea from "../TextArea";
import { MakeCommentCard } from "./style";
import { IUser, IAd } from "../../Interfaces/index";
import { getInitials } from "../../utils";

interface IMakeComment {
  user: IUser;
  ad: IAd;
}

const MakeComment = ({ ad, user }: IMakeComment) => {
  return (
    <MakeCommentCard>
      <div className="photoNameBox">
        <div className="photo">{getInitials(user.name!)}</div>
        <h2 className="name">{user.name}</h2>
      </div>
      <div className="commentBox">
        <TextArea
          placeholder="Carro muito confortável, 
                foi uma ótima experiência de compra..."
        />

        {ad.isActive ? <Button>Comentar</Button> : <Button>Comentar</Button>}
      </div>
      <div className="quickResponsesBox">
        <button className="quickResponse">Gostei Muito!</button>
        <button className="quickResponse">Incrível</button>
        <button className="quickResponse">
          Recomendarei para meus amigos!
        </button>
      </div>
    </MakeCommentCard>
  );
};

export default MakeComment;
