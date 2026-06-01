import { useEffect } from 'react';
import './ScoreCounter.css';

function ScoreCounter({ score, setScore }) {
  const handleAddScore = () => {
    setScore(prev => prev + 10);
  };

  const handleResetScore = () => {
    setScore(0);
  };

  return (
    <div className="score-counter">
      <div className="score-display">
        Счёт: {score}
      </div>
      <div className="score-controls">
        <button onClick={handleAddScore}>
          +10 Очков
        </button>
        <button onClick={handleResetScore}>
          Сбросить Счёт
        </button>
      </div>
    </div>
  );
}

export default ScoreCounter;