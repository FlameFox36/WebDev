import CommentItem from './CommentItem';

function CommentList({ comments, onLike }) {
  if (comments.length === 0) {
    return (
      <div className="empty-comments">
        <p>Пока нет комментариев...</p>
        <p>Будьте первым, кто оставит комментарий!</p>
      </div>
    );
  }
  
  return (
    <div className="comment-list">
      <div className="comment-list-header">
        <h3>Комментарии ({comments.length})</h3>
      </div>
      {comments.map(comment => (
        <CommentItem 
          key={comment.id} 
          comment={comment} 
          onLike={onLike}
        />
      ))}
    </div>
  );
}

export default CommentList;