import { useState } from "react";

function AddStudent({ addStudent, onCancel }) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [physics, setPhysics] = useState("");
  const [maths, setMaths] = useState("");
  const [english, setEnglish] = useState("");


  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleGenderChange(e) {
    setGender(e.target.value);
  }

  function handlePhysicsChange(e) {
    setPhysics(e.target.value);
  }

  function handleMathsChange(e) {
    setMaths(e.target.value);
  }
  function handleEnglishChange(e) {
    setEnglish(e.target.value);
  }


  function handleSubmit(e) {
    e.preventDefault();
    addStudent({
      name,
      gender,
      physics,
      maths,
      english,
    });
    setName("");
    setGender("");
    setPhysics("");
    setMaths("");
    setEnglish("");
  }

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label>Gender:</label>
          <input type="text" value={gender} onChange={handleGenderChange} />
        </div>
        <div>
          <label>Physics:</label>
          <input
            type="number"
            value={physics}
            onChange={handlePhysicsChange}
          />
        </div>
        <div>
          <label>Maths:</label>
          <input
            type="number"
            value={maths}
            onChange={handleMathsChange}
          />
        </div>
        <div>
          <label>English:</label>
          <input type="number" value={english} onChange={handleEnglishChange} />
        </div>
        <button type="submit">Add</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default AddStudent;
