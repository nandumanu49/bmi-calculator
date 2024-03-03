import React from 'react';
import UserInput from './components/UserInput';
import BmiDisplay from './components/BmiDisplay.js';
import './App.css';

function App() {
  const [bmi, setBmi] = React.useState(null);

  const handleCalculateBmi = (age, gender, height, weight) => {
    // Calculate BMI based on the formula: BMI = weight(kg) / height(m)^2
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(parseFloat(bmiValue.toFixed(2)));
  };

  return (
    <div className="App">
      <h1>Simplify Healthcare BMI Calculator</h1>
      <UserInput onCalculate={handleCalculateBmi} />
      {bmi && <BmiDisplay bmi={bmi} />}
    </div>
  );
}

export default App;