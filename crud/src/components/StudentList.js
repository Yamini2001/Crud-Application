import React from "react";
const StudentList = ({ students, onDelete, onEdit, onAdd }) => {
  return (
    <div>
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Physics</th>
            <th>Maths</th>
            <th>English</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.gender}</td>
              <td>{student.physics}</td>
              <td>{student.maths}</td>
              <td>{student.english}</td>
              <td>
                <button onClick={() => onEdit(student.id)}>Edit</button>
                <button onClick={() => onDelete(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={onAdd}>Add New Student</button>
    </div>
  );
};

export default StudentList;
