import { useState } from 'react';
import { newsData, categories } from './data/newsData';
import CategoryFilter from './components/CategoryFilter';
import NewsBlock from './components/NewsBlock';
import './App.css';

function App() {

  const [activeCategory, setActiveCategory] = useState('technology');
  const currentCategoryObj = categories.find(cat => cat.id === activeCategory);
  const categoryName = currentCategoryObj?.name || 'Новости';
  const currentNews = newsData[activeCategory] || [];
  
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };
  
  return (
    <div className="app">
      <header className="app-header">
        <h1>Новостной портал</h1>
        <p>Присутствует фильтр по категориям.</p>
      </header>
      
      <main>
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />
        
        <NewsBlock
          news={currentNews}
          categoryName={categoryName}
        />
      </main>
      
      <footer className="app-footer">
        <p>2026 - Все права защищены Бэтменом.</p>
      </footer>
    </div>
  );
}

export default App;