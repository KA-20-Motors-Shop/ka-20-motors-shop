import Button from "../button";
import TextArea from "../TextArea";
import TextField from "../TextArea/style";
import { MakeCommentCard } from "./style";

interface IMakeComment {
  user: object;
}

const MakeComment = () => {
  return (
    <MakeCommentCard>
      <div className="photoNameBox">
        <img
          className="photo"
          src="https://static.wixstatic.com/media/532c77_0f9316e263b441a0969b69921d881785~mv2.png/v1/fill/w_460,h_236,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/carro.png"
          alt="batata"
        />
        <h2 className="name">Agnes</h2>
      </div>
      <div className="commentBox">
        <TextArea
          placeholder="Carro muito confortável, 
                foi uma ótima experiência de compra..."
        />
        <Button>Comentar</Button>
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
