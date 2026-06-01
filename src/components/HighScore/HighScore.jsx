import { useEffect } from 'react';
import './HighScore.css';

function HighScore({ score, highScore, setHighScore }) {
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }
  }, [score, highScore, setHighScore]);

  return (
    <div className="high-score">
      <div className="high-score-display">
        Рекорд: {highScore}
      </div>
    </div>
  );
}

export default HighScore;