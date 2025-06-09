function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const resultCard = document.getElementById('result-card');
  const resultText = document.getElementById('result-text');

  if (!weight || !height || weight <= 0 || height <= 0) {
    resultCard.style.display = 'block';
    resultCard.className = 'result-card';
    resultText.innerText = "Please enter valid values.";
    return;
  }

  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

  let category = "";
  let cssClass = "";

  if (bmi < 18.5) {
    category = "Underweight";
    cssClass = "underweight";
  } else if (bmi < 24.9) {
    category = "Normal weight";
    cssClass = "normal";
  } else {
    category = "Overweight";
    cssClass = "overweight";
  }

  resultCard.style.display = 'block';
  resultCard.className = `result-card ${cssClass}`;
  resultText.innerText = `Your BMI is ${bmi} (${category})`;
}
