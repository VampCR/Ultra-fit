 // BMI Calculator
 function calculateBMI() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    if (height && weight) {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
        let status = '';
        if (bmi < 18.5) {
            status = 'Underweight';
        } else if (bmi < 24.9) {
            status = 'Normal weight';
        } else if (bmi < 29.9) {
            status = 'Overweight';
        } else {
            status = 'Obesity';
        }
        document.getElementById('bmi-result').innerHTML = `YOUR BMI = ${bmi} (${status})`;
    }
}

// Calorie Needs Calculator
function calculateCalories() {
    const gender = document.getElementById('gender').value;
    const age = document.getElementById('age').value;
    const height = document.getElementById('height-cal').value;
    const weight = document.getElementById('weight-cal').value;
    const activity = document.getElementById('activity').value;
    
    if (gender && age && height && weight && activity) {
        let bmr;
        
        if (gender === 'male') {
            bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
        } else {
            bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        }
        
        const calories = (bmr * activity).toFixed(0);
        document.getElementById('calorie-result').innerHTML = `Your daily calorie needs: ${calories} kcal`;
    }
}


// Exercise Guide
function showExercise() {
    const select = document.getElementById('exercise-select').value;
    if (select != "none") {
        document.getElementById('exercise-pic').src = "img/exercises/" + select + ".svg";
        document.getElementById('exercise-pic').style = "background: #EBEBEB; padding: 2rem; border-radius: 16px; box-shadow: 0 0 4px #000";
    }
}