import { useState, useEffect } from 'react';
import { fetchComments, postComment } from './data/commentsData';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';
import './App.css';

function App() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState(null);
  
  useEffect(() => {
    const loadComments = async () => {
      try {
        setLoading(true);
        const data = await fetchComments();
        setComments(data);
      } catch (error) {
        console.error('Ошибка загрузки комментариев:', error);
        showNotification('Не удалось загрузить комментарии', 'error');
      } finally {
        setLoading(false);
      }
    };
    
    loadComments();
  }, []); 
  
  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };
  
  const handleAddComment = async (newComment) => {
    try {
      const savedComment = await postComment(newComment);
      setComments(prevComments => [savedComment, ...prevComments]);
      showNotification('Комментарий успешно опубликован!', 'success');
    } catch (error) {
      showNotification('Ошибка при публикации комментария', 'error');
      throw error;
    }
  };
  
  const handleLike = (commentId) => {
    setComments(prevComments =>
      prevComments.map(comment =>
        comment.id === commentId
          ? { ...comment, likes: comment.likes + 1 }
          : comment
      )
    );
  };
  
  return (
    <div className="app">
      <header className="app-header">
        <h1>Форум читателей</h1>
        <p>Вымышленный форум для вымышленных людей.</p>
      </header>
      
      <main>
        {notification && (
          <div className={`notification notification-${notification.type}`}>
            {notification.message}
          </div>
        )}
        
        <div className="forum-container">
          <div className="form-section">
            <CommentForm onAddComment={handleAddComment} />
          </div>
          
          <div className="comments-section">
            {loading ? (
              <div className="loading-spinner">
                <div className="spinner"></div>
                <p>Загрузка комментариев...</p>
              </div>
            ) : (
              <CommentList comments={comments} onLike={handleLike} />
            )}
          </div>
        </div>
      </main>
      
      <footer className="app-footer">
        <p>Форма публикации комментариев | Уведомления и автоматическая загрузка</p>
      </footer>
    </div>
  );
}

export default App;