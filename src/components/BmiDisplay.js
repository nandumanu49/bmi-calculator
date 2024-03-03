import React from 'react';
import './BmiDisplay.css';

const BmiDisplay = ({ bmi }) => {
  let bmiCategory;

  if (bmi < 18.5) {
    bmiCategory = 'Underweight';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    bmiCategory = 'Normal weight';
  } else if (bmi >= 25 && bmi < 29.9) {
    bmiCategory = 'Overweight';
  } else {
    bmiCategory = 'Obese';
  }

  return (
    <div className="bmi-display">
      <p>Your BMI is: {bmi}</p>
      <p>BMI Category: {bmiCategory}</p>
    </div>
  );
};

export default BmiDisplay;