import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GradeCell = ({ grade, subject, onGradeChange }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [localGrade, setLocalGrade] = useState(grade);

  const getGradeColor = () => {
    if (localGrade >= 80) return '#A7C080';
    if (localGrade >= 60) return '#DBBC7F';
    return '#E67E80';
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (localGrade !== grade) {
      onGradeChange(localGrade);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleBlur();
    }
  };

  const handleChange = (e) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) value = 0;
    if (value < 0) value = 0;
    if (value > 100) value = 100;
    setLocalGrade(value);
  };

  return (
    <motion.td
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onDoubleClick={handleDoubleClick}
      style={{
        backgroundColor: isHovered ? '#384B55' : 'transparent',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease',
        textAlign: 'center'
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      {isEditing ? (
        <input
          type="number"
          value={localGrade}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyPress={handleKeyPress}
          autoFocus
          style={{
            width: '70px',
            padding: '6px',
            backgroundColor: '#272E33',
            color: '#D3C6AA',
            border: `2px solid ${getGradeColor()}`,
            borderRadius: '4px',
            textAlign: 'center',
            fontSize: '14px',
            outline: 'none'
          }}
        />
      ) : (
        <motion.span
          style={{
            color: getGradeColor(),
            fontWeight: 'bold',
            fontSize: '16px',
            display: 'inline-block'
          }}
          animate={{
            scale: isHovered ? 1.1 : 1
          }}
        >
          {localGrade}
        </motion.span>
      )}
    </motion.td>
  );
};

export default GradeCell;