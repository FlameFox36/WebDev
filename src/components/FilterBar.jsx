function FilterBar({ filterStatus, onFilterChange, totalCount, availableCount }) {
  return (
    <div className="filter-bar">
      <div className="filter-stats">
        <span>Всего книг: {totalCount}</span>
        <span className="available-stat">Доступно: {availableCount}</span>
      </div>
      <div className="filter-buttons">
        <button
          className={`filter-btn ${filterStatus === 'all' ? 'active' : ''}`}
          onClick={() => onFilterChange('all')}
        >
          Все книги
        </button>
        <button
          className={`filter-btn ${filterStatus === 'available' ? 'active' : ''}`}
          onClick={() => onFilterChange('available')}
        >
          Только доступные
        </button>
        <button
          className={`filter-btn ${filterStatus === 'unavailable' ? 'active' : ''}`}
          onClick={() => onFilterChange('unavailable')}
        >
          Только недоступные
        </button>
      </div>
    </div>
  );
}

export default FilterBar;