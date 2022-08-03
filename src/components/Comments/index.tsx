import Button from "../button";
import CommentsCard from "./style";

interface ICardComments {
  product: object;
}

const Comments = ({ product }: ICardComments) => {
  return (
    <CommentsCard>
      <h1>Comentários</h1>
      <div>
        {product.comments.map((comment) => {
          return (
            <div className="commentBox">
              <div className="photoNameDateBox">
                <img
                  className="photo"
                  src={comment.user.photo}
                  alt={comment.user.name}
                />
                <h2 className="name">{comment.user.name}</h2>
                <div className="dot"></div>
                <span className="date">{comment.date}</span>
              </div>
              <p className="description">{comment.content}</p>
            </div>
          );
        })}
      </div>
    </CommentsCard>
  );
};
export default Comments;
