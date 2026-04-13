import { useState } from 'react';

function CommentForm({ onAddComment }) {
  // Двусторонняя привязка данных (two-way binding)
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [hasNotifications, setHasNotifications] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  
  // Валидация формы
  const validateForm = () => {
    const newErrors = {};
    if (!author.trim()) {
      newErrors.author = 'Имя не может быть пустым';
    } else if (author.length < 2) {
      newErrors.author = 'Имя должно содержать минимум 2 символа';
    }
    
    if (!text.trim()) {
      newErrors.text = 'Текст комментария не может быть пустым';
    } else if (text.length < 5) {
      newErrors.text = 'Комментарий должен содержать минимум 5 символов';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Обработчик отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault(); // Предотвращение стандартного поведения формы
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    const newComment = {
      author: author.trim(),
      text: text.trim(),
      hasNotifications: hasNotifications,
    };
    
    try {
      await onAddComment(newComment);
      // Очищаем форму после успешной отправки
      setAuthor('');
      setText('');
      setHasNotifications(false);
      setErrors({});
    } catch (error) {
      console.error('Ошибка при отправке:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Обработчики изменений полей (двусторонняя привязка)
  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
    // Очищаем ошибку при вводе
    if (errors.author) {
      setErrors({ ...errors, author: '' });
    }
  };
  
  const handleTextChange = (e) => {
    setText(e.target.value);
    if (errors.text) {
      setErrors({ ...errors, text: '' });
    }
  };
  
  const handleNotificationChange = (e) => {
    setHasNotifications(e.target.checked);
  };
  
  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <h3>Оставить комментарий</h3>
      
      <div className="form-group">
        <label htmlFor="author">Ваше имя *</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={handleAuthorChange}
          placeholder="Введите ваше имя"
          className={errors.author ? 'error' : ''}
        />
        {errors.author && <span className="error-message">{errors.author}</span>}
      </div>
      
      <div className="form-group">
        <label htmlFor="text">Комментарий *</label>
        <textarea
          id="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Напишите ваш комментарий..."
          rows="4"
          className={errors.text ? 'error' : ''}
        />
        {errors.text && <span className="error-message">{errors.text}</span>}
      </div>
      
      <div className="form-group checkbox-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={hasNotifications}
            onChange={handleNotificationChange}
          />
          <span> Получать уведомления о новых ответах</span>
        </label>
      </div>
      
      <button 
        type="submit" 
        className="submit-btn"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Отправка...' : 'Опубликовать комментарий'}
      </button>
    </form>
  );
}

export default CommentForm;