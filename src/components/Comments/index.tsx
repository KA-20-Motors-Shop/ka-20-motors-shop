import { IAd } from "../../Interfaces";
import CommentsCard from "./style";
import { getInitials } from "../../utils";

const Comments = (ad: IAd) => {
  return (
    <CommentsCard>
      <h1>Comentários</h1>
      <div>
        {ad.comments.map((comment) => {
          return (
            <div className="commentBox">
              <div className="photoNameDateBox">
                <div className="photo">{getInitials(comment.user.name)}</div>
                <h2 className="name">{comment.user.name}</h2>
                <div className="dot"></div>
                <span className="date">{comment.createdOn}</span>
              </div>
              <p className="description">{comment.description}</p>
            </div>
          );
        })}
      </div>
    </CommentsCard>
  );
};
export default Comments;
