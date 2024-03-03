import React from 'react';
import './UserInput.css';

const UserInput = ({ onCalculate }) => {
  const [age, setAge] = React.useState(0);
  const [gender, setGender] = React.useState('');
  const [height, setHeight] = React.useState(0);
  const [weight, setWeight] = React.useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate(age, gender, height, weight);
  };

  return (
    <form onSubmit={handleSubmit} className="UserInput-form">
      <div className="UserInput-field">
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>

      <div className="UserInput-field">
        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className="UserInput-field">
        <label htmlFor="height">Height (cm):</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>

      <div className="UserInput-field">
        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>

      <button type="submit">Calculate BMI</button>
    </form>
  );
};

export default UserInput;

