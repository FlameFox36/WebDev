import { useState, useEffect } from 'react';
import './TimerPanel.css';

function TimerPanel({ time, setTime, isActive, setIsActive }) {
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval = null;
    
    if (isActive && !isPaused && time > 0) {
      interval = setInterval(() => {
        setTime(prev => prev - 1);
      }, 1000);
    } else if (time === 0) {
      setIsActive(false);
    }
    
    return () => clearInterval(interval);
  }, [isActive, isPaused, time, setTime, setIsActive]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleReset = () => {
    setIsActive(false);
    setIsPaused(false);
    setTime(300);
  };

  return (
    <div className="timer-panel">
      <div className="timer-display" style={{ color: time <= 10 ? '#E67E80' : '#D3C6AA' }}>
        {formatTime(time)}
      </div>
      <div className="timer-controls">
        <button onClick={handleStart} disabled={isActive && !isPaused}>
          Начать
        </button>
        <button onClick={handlePause} disabled={!isActive || isPaused}>
          Пауза
        </button>
        <button onClick={handleReset}>
          Сбросить
        </button>
      </div>
    </div>
  );
}

export default TimerPanel;