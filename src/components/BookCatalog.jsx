import { useState, useEffect } from 'react';
import BookCard from './BookCard';
import LoadingSpinner from './LoadingSpinner';
import FilterBar from './FilterBar';

function BookCatalog({ books, loading }) {
  const [filterStatus, setFilterStatus] = useState('all');
  const [filteredBooks, setFilteredBooks] = useState([]);
  
  // Фильтрация книг при изменении фильтра или списка книг
  useEffect(() => {
    if (!books.length) return;
    
    let filtered = [...books];
    
    if (filterStatus === 'available') {
      filtered = filtered.filter(book => book.isAvailable === true);
    } else if (filterStatus === 'unavailable') {
      filtered = filtered.filter(book => book.isAvailable === false);
    }
    
    setFilteredBooks(filtered);
  }, [filterStatus, books]);
  
  const totalCount = books.length;
  const availableCount = books.filter(book => book.isAvailable).length;
  
  if (loading) {
    return <LoadingSpinner />;
  }
  
  return (
    <div className="book-catalog">
      <FilterBar
        filterStatus={filterStatus}
        onFilterChange={setFilterStatus}
        totalCount={totalCount}
        availableCount={availableCount}
      />
      
      {filteredBooks.length === 0 ? (
        <div className="empty-catalog">
          <p>📖 Книг не найдено</p>
          <p>Попробуйте изменить параметры фильтрации</p>
        </div>
      ) : (
        <div className="books-grid">
          {filteredBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}

export default BookCatalog;