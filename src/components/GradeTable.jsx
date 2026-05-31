import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TableRow from './TableRow';
import { subjects } from '../data/studentsData';

const GradeTable = ({ students, onUpdateStudent }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [sortedStudents, setSortedStudents] = useState([...students]);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    
    const sorted = [...students].sort((a, b) => {
      if (key === 'name') {
        return direction === 'asc' 
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      } else if (key === 'average') {
        const avgA = (a.math + a.oop + a.threed + a.backend) / 4;
        const avgB = (b.math + b.oop + b.threed + b.backend) / 4;
        return direction === 'asc' ? avgA - avgB : avgB - avgA;
      } else {
        return direction === 'asc' 
          ? a[key] - b[key]
          : b[key] - a[key];
      }
    });
    
    setSortConfig({ key, direction });
    setSortedStudents(sorted);
  };

  const handleGradeChange = (studentId, subjectKey, newGrade) => {
    const updatedStudents = sortedStudents.map(student => {
      if (student.id === studentId) {
        return { ...student, [subjectKey]: newGrade };
      }
      return student;
    });
    setSortedStudents(updatedStudents);
    onUpdateStudent(studentId, subjectKey, newGrade);
  };

  const getRowColor = (index) => {
    const colors = ['transparent', '#2E383C', 'transparent', '#2E383C'];
    return colors[index % colors.length];
  };

  return (
    <div className="table-wrapper">
      <table className="grade-table">
        <thead>
          <tr>
            <th 
              className="sort-header"
              onClick={() => handleSort('name')}
            >
              Студент
              {sortConfig.key === 'name' && (
                <span className="sort-indicator">
                  {sortConfig.direction === 'asc' ? '▲' : '▼'}
                </span>
              )}
            </th>
            {subjects.map((subject) => (
              <th 
                key={subject.key}
                className="sort-header"
                onClick={() => handleSort(subject.key)}
              >
                {subject.label}
                {sortConfig.key === subject.key && (
                  <span className="sort-indicator">
                    {sortConfig.direction === 'asc' ? '▲' : '▼'}
                  </span>
                )}
              </th>
            ))}
            <th 
              className="sort-header"
              onClick={() => handleSort('average')}
            >
              Успеваемость
              {sortConfig.key === 'average' && (
                <span className="sort-indicator">
                  {sortConfig.direction === 'asc' ? '▲' : '▼'}
                </span>
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          <AnimatePresence mode="wait">
            {sortedStudents.map((student, index) => (
              <TableRow
                key={student.id}
                student={student}
                subjects={subjects}
                index={index}
                onGradeChange={handleGradeChange}
                rowColor={getRowColor(index)}
              />
            ))}
          </AnimatePresence>
        </tbody>
      </table>
    </div>
  );
};

export default GradeTable;