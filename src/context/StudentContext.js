import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const StudentContext = createContext();

const StudentContextProvider = (props) => {
  const [students, setStudents] = useState([
    {
      id: uuidv4(),
      firstName: 'Le',
      lastName: 'Hoang',
      age: 22,
      studentClass: 'A1',
    },
    {
      id: uuidv4(),
      firstName: 'Tran',
      lastName: 'An',
      age: 22,
      studentClass: 'A2',
    },
    {
      id: uuidv4(),
      firstName: 'Vo',
      lastName: 'Yen',
      age: 22,
      studentClass: 'A3',
    },
    {
      id: uuidv4(),
      firstName: 'Nguyen',
      lastName: 'Ly',
      age: 22,
      studentClass: 'A5',
    },
    {
      id: uuidv4(),
      firstName: 'Duong',
      lastName: 'Ngoc',
      age: 22,
      studentClass: 'A4',
    },
  ]);

  const addStudent = (firstName, lastName, age, studentClass) => {
    setStudents([
      ...students,
      { id: uuidv4(), firstName, lastName, age, studentClass },
    ]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const updateStudent = (id, updatedStudent) => {
    setStudents(
      students.map((student) => (student.id === id ? updatedStudent : student)),
    );
  };

  return (
    <StudentContext.Provider
      value={{ students, addStudent, deleteStudent, updateStudent }}
    >
      {props.children}
    </StudentContext.Provider>
  );
};

export default StudentContextProvider;
