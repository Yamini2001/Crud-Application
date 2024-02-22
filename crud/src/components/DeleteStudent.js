import React from "react";

const DeleteStudent = ({ student, deleteStudent, onCancel }) => {
  const handleDelete = () => {
    deleteStudent(student.id);
  };

  return (
    <div>
      <h2>Delete Student</h2>
      <p>Are you sure you want to delete {student.name}?</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default DeleteStudent;
