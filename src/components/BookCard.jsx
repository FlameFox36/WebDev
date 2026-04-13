function BookCard({ book }) {
  const availabilityClass = book.isAvailable ? 'available' : 'unavailable';
  const statusText = book.isAvailable ? 'В наличии' : 'Нет в наличии';
  
  return (
    <div className={`book-card ${availabilityClass}`}>
      <div className="book-header">
        <h3 className="book-title">{book.title}</h3>
        <span className={`book-status status-${availabilityClass}`}>
          {statusText}
        </span>
      </div>
      <div className="book-info">
        <p className="book-author">Автор: {book.author}</p>
        <p className="book-year">Год: {book.year}</p>
        <p className="book-genre">Жанр: {book.genre}</p>
      </div>
    </div>
  );
}

export default BookCard;