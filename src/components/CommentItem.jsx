import { useState } from 'react';

function CommentItem({ comment, onLike }) {
  const [isLiked, setIsLiked] = useState(false);
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('ru-RU', {
      day: 'numeric',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  const handleLike = () => {
    if (!isLiked) {
      setIsLiked(true);
      onLike(comment.id);
    }
  };
  
  return (
    <div className={`comment-item ${comment.hasNotifications ? 'with-notification' : ''}`}>
      <div className="comment-header">
        <div className="comment-author">
          <strong>{comment.author}</strong>
        </div>
        <div className="comment-meta">
          <span className="comment-date">{formatDate(comment.date)}</span>
          {comment.hasNotifications && (
            <span className="notification-badge" title="У вас есть уведомления на этот комментарий">
              Уведомления
            </span>
          )}
        </div>
      </div>
      
      <div className="comment-text">
        {comment.text}
      </div>
      
      <div className="comment-footer">
        <button 
          className={`like-btn ${isLiked ? 'liked' : ''}`}
          onClick={handleLike}
          disabled={isLiked}
        >
          ❤️ {comment.likes + (isLiked ? 1 : 0)}
        </button>
      </div>
    </div>
  );
}

export default CommentItem;