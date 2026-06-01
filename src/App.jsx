import { useState, useEffect } from 'react';
import TimerPanel from './components/TimerPanel/TimerPanel';
import ScoreCounter from './components/ScoreCounter/ScoreCounter';
import LivesCounter from './components/LivesCounter/LivesCounter';
import HighScore from './components/HighScore/HighScore';
import useLocalStorage from './hooks/useLocalStorage';
import useSound from './hooks/useSound';
import './App.css';

function App() {
  const [time, setTime] = useLocalStorage('timer-time', 300);
  const [score, setScore] = useLocalStorage('timer-score', 0);
  const [lives, setLives] = useLocalStorage('timer-lives', 3);
  const [highScore, setHighScore] = useLocalStorage('timer-highscore', 0);
  const [isActive, setIsActive] = useState(false);
  const [bgColor, setBgColor] = useState('#1E2326');
  const { playBeep, playGameOver } = useSound();

  useEffect(() => {
    if (time === 0) {
      setIsActive(false);
      playGameOver();
    }
  }, [time, playGameOver]);

  useEffect(() => {
    if (lives === 0) {
      setIsActive(false);
      playGameOver();
    }
  }, [lives, playGameOver]);

  useEffect(() => {
    if (time <= 10 && time > 0 && isActive) {
      playBeep();
    }
  }, [time, isActive, playBeep]);

  useEffect(() => {
    if (score % 100 === 0 && score !== 0) {
      playBeep();
    }
  }, [score, playBeep]);

  useEffect(() => {
    if (lives === 1) {
      setBgColor('#493B40');
    } else if (lives === 0) {
      setBgColor('#4C3743');
    } else if (time <= 10) {
      setBgColor('#45443C');
    } else {
      setBgColor('#1E2326');
    }
  }, [lives, time]);

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [bgColor]);

  const handleResetGame = () => {
    setTime(300);
    setScore(0);
    setLives(3);
    setIsActive(false);
  };

  return (
    <div className="app">
      <h1 className="game-title">Игровой Таймер</h1>
      <div className="game-container">
        <div className="stats-panel">
          <ScoreCounter score={score} setScore={setScore} />
          <LivesCounter lives={lives} setLives={setLives} />
          <HighScore score={score} highScore={highScore} setHighScore={setHighScore} />
        </div>
        <div className="timer-wrapper">
          <TimerPanel 
            time={time} 
            setTime={setTime} 
            isActive={isActive} 
            setIsActive={setIsActive} 
          />
          <button className="reset-game-btn" onClick={handleResetGame}>
            Сбросить Игру
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;