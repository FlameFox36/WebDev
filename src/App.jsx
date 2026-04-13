import { useState, useEffect } from 'react';
import { fetchBooks } from './data/booksData';
import BookCatalog from './components/BookCatalog';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const loadBooks = async () => {
      try {
        setLoading(true);
        const data = await fetchBooks();
        setBooks(data);
        setError(null);
      } catch (err) {
        setError('Ошибка загрузки книг. Попробуйте позже.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    loadBooks();
  }, []);
  
  return (
    <div className="app">
      <header className="app-header">
        <h1>Онлайн-библиотека</h1>
        <p>Каталог книг с фильтрацией по доступности</p>
      </header>
      
      <main>
        {error ? (
          <div className="error-message">
            <p>{error}</p>
          </div>
        ) : (
          <BookCatalog books={books} loading={loading} />
        )}
      </main>
      
      <footer className="app-footer">
        <p>2026 - Все права защищены Бэтменом.</p>
      </footer>
    </div>
  );
}

export default App;