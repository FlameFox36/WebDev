function CategoryFilter({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="category-filter">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={`category-btn ${activeCategory === cat.id ? 'category-btn--active' : ''}`}
          onClick={() => onCategoryChange(cat.id)}
        >
          <span>{cat.name}</span>
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;