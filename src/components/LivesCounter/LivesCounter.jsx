import { useEffect } from 'react';
import './LivesCounter.css';

function LivesCounter({ lives, setLives }) {
  const handleLoseLife = () => {
    if (lives > 0) {
      setLives(prev => prev - 1);
    }
  };

  const handleResetLives = () => {
    setLives(3);
  };

  return (
    <div className="lives-counter">
      <div className="lives-display">
        Жизни: {lives}
      </div>
      <div className="lives-controls">
        <button onClick={handleLoseLife} disabled={lives === 0}>
          Потерять 1 Жизнь
        </button>
        <button onClick={handleResetLives}>
          Сбросить Жизни
        </button>
      </div>
    </div>
  );
}

export default LivesCounter;