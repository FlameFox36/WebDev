import React, { useEffect, useState } from 'react';

const ProgressBar = ({ value, color, size = 60 }) => {
  const [progress, setProgress] = useState(0);
  const radius = size / 2 - 5;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(value);
    }, 100);
    return () => clearTimeout(timer);
  }, [value]);

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const getColor = () => {
    if (value >= 80) return '#A7C080';
    if (value >= 60) return '#DBBC7F';
    return '#E67E80';
  };

  const progressColor = getColor();

  return (
    <div style={{ 
      display: 'inline-flex', 
      alignItems: 'center', 
      gap: '8px',
      cursor: 'pointer'
    }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#2E383C"
          strokeWidth="4"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={progressColor}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{
            transition: 'stroke-dashoffset 1s ease-in-out',
            transform: 'rotate(-90deg)',
            transformOrigin: '50% 50%'
          }}
        />
        <text
          x={size / 2}
          y={size / 2 + 5}
          textAnchor="middle"
          fill={color}
          fontSize={size * 0.25}
          fontWeight="bold"
        >
          {`${Math.round(value)}%`}
        </text>
      </svg>
    </div>
  );
};

export default ProgressBar;