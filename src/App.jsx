import React, { useState } from 'react';
import GradeTable from './components/GradeTable';
import { studentsData, subjects } from './data/studentsData';

function App() {
  const [students, setStudents] = useState(studentsData);

  const handleUpdateStudent = (studentId, subjectKey, newGrade) => {
    setStudents(prevStudents =>
      prevStudents.map(student =>
        student.id === studentId
          ? { ...student, [subjectKey]: newGrade }
          : student
      )
    );
  };

  const totalStudents = students.length;
  const averageClass = Math.round(
    students.reduce((sum, student) => {
      const total = subjects.reduce((s, subject) => s + student[subject.key], 0);
      const avg = total / subjects.length;
      return sum + avg;
      }, 0) / totalStudents
    );

  return (
    <div className="container">
      <h1>Таблица успеваемости</h1>
      <div style={{ 
        marginBottom: '20px', 
        padding: '16px',
        backgroundColor: '#2E383C',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <span style={{ color: '#D3C6AA' }}>Всего студентов: </span>
          <span style={{ color: '#A7C080', fontWeight: 'bold', fontSize: '20px' }}>
            {totalStudents}
          </span>
        </div>
        <div>
          <span style={{ color: '#D3C6AA' }}>Средний балл группы: </span>
          <span style={{ color: '#A7C080', fontWeight: 'bold', fontSize: '20px' }}>
            {averageClass}%
          </span>
        </div>
      </div>
      <GradeTable 
        students={students} 
        onUpdateStudent={handleUpdateStudent}
      />
    </div>
  );
}

export default App;