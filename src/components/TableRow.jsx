import React from 'react';
import { motion } from 'framer-motion';
import GradeCell from './GradeCell';
import ProgressBar from './ProgressBar';

const TableRow = ({ student, subjects, index, onGradeChange, rowColor }) => {
  const averageGrade = Math.round(
    subjects.reduce((sum, subject) => sum + student[subject.key], 0) / subjects.length
  );

  return (
    <motion.tr
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      layout
      style={{
        backgroundColor: rowColor,
        transition: 'background-color 0.3s ease'
      }}
      whileHover={{
        backgroundColor: '#374145',
        transition: { duration: 0.2 }
      }}
    >
      <motion.td layout style={{ color: '#D3C6AA', fontWeight: '500' }}>
        {student.name}
      </motion.td>
      
      {subjects.map((subject) => (
        <GradeCell
          key={subject.key}
          grade={student[subject.key]}
          subject={subject}
          onGradeChange={(newGrade) => onGradeChange(student.id, subject.key, newGrade)}
        />
      ))}
      
      <motion.td layout style={{ textAlign: 'center' }}>
        <ProgressBar value={averageGrade} color="#D3C6AA" size={50} />
      </motion.td>
    </motion.tr>
  );
};

export default TableRow;