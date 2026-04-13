function NewsCard({ news }) {
  const cardClasses = `news-card ${news.isTop ? 'news-card--top' : ''}`;
  
  return (
    <article className={cardClasses}>
      {news.isTop && <div className="top-badge">Топ новость!</div>}
      <h3 className="news-title">{news.title}</h3>
      <p className="news-description">{news.description}</p>
      <div className="news-footer">
        <span className="news-date">{news.date}</span>
      </div>
    </article>
  );
}

export default NewsCard;