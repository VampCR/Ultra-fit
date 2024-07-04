// Declare elements:
const bmiForm = document.getElementById("bmi-form");
const bmiSubmit = document.getElementById("bmi-submit");
const calorieForm = document.getElementById("calorie-form");
const calorieSubmit = document.getElementById("calorie-submit");
const showExercise = document.getElementById("show-exercise");
const exerciseSelect = document.getElementById("exercise-select");
const exercisePic = document.getElementById("exercise-pic");
// *****************

// Nav Bar Scroll
let lastScrollTop = 0;
window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar");
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Downscroll
        navbar.style.transform = "translateY(-100%)"; // Hide navbar
        navbar.classList.remove("scroll-up");
    } else {
        // Upscroll
        if(scrollTop <= 0){
            navbar.classList.remove("scroll-up");
            navbar.style.backgroundcolor = "transparent";
        }else{
            navbar.style.transform = "translateY(0)"; // Show navbar
            navbar.classList.add("scroll-up");
        }
    }
    lastScrollTop = scrollTop;
});


// BMI Calculator
document.getElementById('bmi-submit').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the height and weight values from the input fields
  var height = parseFloat(document.getElementById('bmi-height').value);
  var weight = parseFloat(document.getElementById('bmi-weight').value);

  // Check if the height and weight are valid numbers
  if (isNaN(height) || isNaN(weight)) {
      alert('Please enter valid numbers for height and weight.');
      return;
  }

  // Convert height from centimeters to meters
  height = height / 100;

  // Calculate BMI
  var bmi = weight / (height * height);
  bmi = bmi.toFixed(2); // Round to 2 decimal places

  // Display the result
  document.getElementById('bmi-result').textContent = 'YOUR BMI = ' + bmi;
});
  // *****************
  
  
  // Calorie Calculator:
  // 
  
  document.getElementById('calorie-submit').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the form values
    var gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        alert('Please select your gender.');
        return;
    }
    gender = gender.value;

    var age = parseFloat(document.getElementById('age').value);
    var height = parseFloat(document.getElementById('calorie-height').value);
    var weight = parseFloat(document.getElementById('calorie-weight').value);
    var activity = document.getElementById('activity').value;

    // Check if the age, height, and weight are valid numbers
    if (isNaN(age) || isNaN(height) || isNaN(weight)) {
        alert('Please enter valid numbers for age, height, and weight.');
        return;
    }

    // Convert height from centimeters to meters
    height = height / 100;

    // Calculate BMR based on gender
    var bmr;
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height * 100) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height * 100) - (4.330 * age);
    }

    // Adjust BMR based on activity level
    var calories;
    switch (activity) {
        case 'basal':
            calories = bmr * 1.0;
            break;
        case 'sedentary':
            calories = bmr * 1.2;
            break;
        case 'light':
            calories = bmr * 1.375;
            break;
        case 'moderate':
            calories = bmr * 1.55;
            break;
        case 'active':
            calories = bmr * 1.725;
            break;
        case 'very-active':
            calories = bmr * 1.9;
            break;
        case 'extra-active':
            calories = bmr * 2.0;
            break;
    }

    calories = calories.toFixed(2); // Round to 2 decimal places

    // Display the result
    document.getElementById('calorie-result').textContent = 'YOUR CALORIE NEEDING = ' + calories;
});
  // *****************
  
  
  // Exercise Guide:
  showExercise.addEventListener("click", function (event) {
    const select = exerciseSelect.value;
    if (select != "none"){
      // exercisePic.src = "img/exercises/" + select + ".svg";
      exercisePic.src = "Assests/exercise/" + select + ".svg";
      exercisePic.style = "background: #EBEBEB; padding: 2rem; border-radius: 16px; box-shadow: 0 0 4px #000";
    }
  });
  // *****************