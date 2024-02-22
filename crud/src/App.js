import React, { useState} from "react";
import './App.css';
import StudentList from "./components/StudentList";
import EditStudent from "./components/EditStudent";
import AddStudent from "./components/AddStudent";
import DeleteStudent from "./components/DeleteStudent";
import data from "./student data/student.json";

function App() {
  const [students, setStudents] = useState(data); // Corrected access to 'data' directly
  const [currentStudent, setCurrentStudent] = useState(null);
  const [showEditStudent, setShowEditStudent] = useState(false);
  const [showAddStudent, setShowAddStudent] = useState(false);
  const [showDeleteStudent, setShowDeleteStudent] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState(null); // Corrected variable name

  const handleDelete = (id) => {
    setStudentToDelete(id);
    setShowDeleteStudent(true);
  };

  const deleteStudent = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id); // Renamed variable to avoid conflict
    setStudents(updatedStudents);
    setShowDeleteStudent(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteStudent(false);
  };

  const handleEdit = (id) => {
    const student = students.find((student) => student.id === id);
    setCurrentStudent(student);
    setShowEditStudent(true);
  };

  const editStudent = (updatedStudent) => {
    const updatedStudents = students.map((student) =>
      student.id === updatedStudent.id ? updatedStudent : student
    );
    setStudents(updatedStudents);
    setCurrentStudent(null);
    setShowEditStudent(false);
  };

  const handleCancelEdit = () => {
    setCurrentStudent(null);
    setShowEditStudent(false);
  };

  const handleAddStudent = () => {
    setShowAddStudent(true);
  };

  const addStudent = (student) => {
    const newStudent = {
      id: Math.floor(Math.random() * 1000),
      ...student,
    };
    const updatedStudents = [...students, newStudent]; // Corrected variable name
    setStudents(updatedStudents);
    setShowAddStudent(false);
  };

  const handleCancelAdd = () => {
    setShowAddStudent(false);
  };

  return (
    <div className="App">
      <h1>Student Group</h1>
      {showDeleteStudent ? (
        <DeleteStudent
          student={students.find((student) => student.id === studentToDelete)}
          deleteStudent={deleteStudent}
          onCancel={handleCancelDelete}
        />
      ) : showEditStudent ? (
        <EditStudent
          student={currentStudent} // Corrected prop name to 'student'
          editStudent={editStudent}
          onCancel={handleCancelEdit}
        />
      ) : showAddStudent ? (
        <AddStudent addStudent={addStudent} onCancel={handleCancelAdd} />
      ) : (
        <StudentList
          students={students}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onAdd={handleAddStudent}
        />
      )}
    </div>
  );
}

export default App;
