import React, { useState } from "react";

const EditStudent = ({ student, editStudent, onCancel }) => {
  const [name, setName] = useState(student.name);
  const [gender, setGender] = useState(student.gender);
  const [physics,setPhysics] = useState(student.physics);
  const [maths,setMaths] = useState(student.maths);
  const [english, setEnglish] = useState(student.english);

  const handleNameChange = (e) => setName(e.target.value);
  const handleGenderChange = (e) => setGender(e.target.value);
  const handlePhysicsChange = (e) => setPhysics(e.target.value);
  const handleMathsChange = (e) => setMaths(e.target.value);
  const handleEnglishChange = (e) => setEnglish(e.target.value);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedStudent= {
      id: student.id,
      name,
      gender,
      physics,
      maths,
      english,
    };
    editStudent(updatedStudent);
  };

  return (
    <div>
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <input
            type="text"
            id="gender"
            value={gender}
            onChange={handleGenderChange}
          />
        </div>
        <div>
          <label htmlFor="physics">Physics:</label>
          <input
            type="number"
            id="physics"
            value={physics}
            onChange={handlePhysicsChange}
          />
        </div>
        <div>
          <label htmlFor="maths">Maths:</label>
          <input
            type="number"
            id="maths"
            value={maths}
            onChange={handleMathsChange}
          />
        </div>

        <div>
          <label htmlFor="english">English:</label>
          <input
            type="number"
            id="english"
            value={english}
            onChange={handleEnglishChange}
          />
        </div>
        <div>
          <button type="submit">Save</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditStudent;