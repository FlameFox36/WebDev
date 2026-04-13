import NewsCard from './NewsCard';

function NewsBlock({ news, categoryName }) {
  const topCount = news.filter(item => item.isTop).length;
  
  return (
    <div className="news-block">
      <div className="news-header">
        <h2 className="news-category-title">{categoryName}</h2>
        <div className="news-stats">
          <span>Всего:  {news.length}</span>
          <span>Топовых:  {topCount}</span>
        </div>
      </div>
      
      {news.length === 0 ? (
        <div className="news-empty">Новостей в этой категории пока нет</div>
      ) : (
        <div className="news-grid">
          {news.map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default NewsBlock;