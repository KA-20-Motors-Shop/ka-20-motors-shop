
import Button from "../button";
import { MakeCommentCard } from "./style";

interface IMakeComment {
    user: object;
  }
  
  const MakeComment = ({ user }: IMakeComment) => {
    return (
        <MakeCommentCard>
            <div className="photoName">
                <img src={user.photo} alt={user.name} />
                <h2>{user.name}</h2>
            </div>
            <div className="commentBox">
                <input className="textField" placeholder="Carro muito confortável, 
                foi uma ótima experiência de compra..." />
                <Button>Comentar</Button>
            </div>
            <div className="quickResponsesBox">
                <button className="quickResponse">Gostei Muito!</button>
                <button className="quickResponse">Incrível</button>
                <button className="quickResponse">Recomendarei para meus amigos!</button>
            </div>
        </MakeCommentCard>
    )
  }

  export default MakeComment