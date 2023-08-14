document.addEventListener('DOMContentLoaded', function () {
  const calculateButton = document.getElementById('calculate');
  const weightInput = document.getElementById('weight');
  const heightInput = document.getElementById('height');
  const resultDiv = document.getElementById('result');
  const bmiResultDiv = document.getElementById('bmiResult');
  const bmiTable = document.getElementById('bmiTable');

  calculateButton.addEventListener('click', function () {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100; // Convert height to meters
    if (isNaN(weight) || isNaN(height) || height === 0) {
      resultDiv.textContent = 'Please enter valid weight and height.';
      bmiResultDiv.textContent = '';
    } else {
      const bmi = weight / (height * height);
      const classification = getClassification(bmi);
      resultDiv.textContent = `Your BMI is: ${bmi.toFixed(2)}`;
      bmiResultDiv.textContent = `Classification: ${classification}`;
    }
  });

  function getClassification(bmi) {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
      return 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
      return 'Overweight';
    } else {
      return 'Obesity';
    }
  }
});
