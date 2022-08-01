import Button from "../button";
import CommentsCard from "./style"

interface ICardComments {
    product: object;
  }
  
  const Comments = ({ product }: ICardComments) => {
    return (
        <CommentsCard>
            <h1>Comentários</h1>
            <div>
                {product.comments.map(comment => {
                    return (
                        <div className="commentBox">
                            <div className="photoNameDateBox">
                                <img src={comment.user.photo} alt={comment.user.name} />
                                <h2>{comment.user.name}</h2>
                                <span>{comment.date}</span>                          
                            </div>
                            <p className="description">{comment.content}</p>
                        </div>    
                    )
                })}
            </div>
        </CommentsCard>
    )
  }
  export default Comments