let readlineSync = require('readline-sync');

function calculateBMR() {
  let sex = readlineSync.question("Enter your biological sex (male/female): ");
  let weight = parseFloat(readlineSync.question("Enter your weight in kg: "));
  let height = parseFloat(readlineSync.question("Enter your height in cm: "));
  let age = parseFloat(readlineSync.question("Enter your age in years: "));

  let bmr;
  if (sex === "male") {
    bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  } else if (sex === "female") {
    bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
  } else {
    console.log("Invalid sex value");
    return;
  }

  console.log("Your BMR equals: " + bmr.toFixed(2) + " kcal");

  let activityLevels = {
    'Sedentary': 1.2,
    'Lightly active': 1.375,
    'Moderately active': 1.55,
    'Very active': 1.725,
    'Extra active': 1.9
  };

  let activity_level = readlineSync.question("Enter your activity level (Sedentary/Lightly active/Moderately active/Very active/Extra active): ");

  let tdee = bmr * activityLevels[activity_level];
  if (tdee) {
    console.log("Your TDEE is: " + tdee.toFixed(2) + " kcal");
  } else {
    console.log("Invalid activity level");
  }
}

calculateBMR();
