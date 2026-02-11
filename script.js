document.getElementById('calc-btn').addEventListener('click', () => {
    // Get values
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    
    const wUnit = document.getElementById('weight-unit').value;
    const hUnit = document.getElementById('height-unit').value;

    if (!weight || !height) {
        alert("Please enter values");
        return;
    }

    // 1. Convert Weight to KG
    if (wUnit === "lb") weight = weight * 0.453592;

    // 2. Convert Height to Meters
    if (hUnit === "cm") height = height / 100;
    else if (hUnit === "in") height = height * 0.0254;
    else if (hUnit === "ft") height = height * 0.3048;

    // 3. Calculate BMI
    const bmi = (weight / (height * height)).toFixed(1);

    // 4. UI Update
    const resultArea = document.getElementById('result-area');
    const bmiVal = document.getElementById('bmi-val');
    const category = document.getElementById('bmi-category');
    const progress = document.getElementById('progress-fill');
    const advice = document.getElementById('advice');

    resultArea.classList.remove('hidden');
    bmiVal.innerText = bmi;

    let color = "";
    let width = "";
    let msg = "";

    if (bmi < 18.5) {
        color = "#fbbf24"; width = "25%"; msg = "Time for some healthy snacks!";
        category.innerText = "Underweight";
    } else if (bmi <= 24.9) {
        color = "#10b981"; width = "50%"; msg = "You are in great shape!";
        category.innerText = "Healthy";
    } else if (bmi <= 29.9) {
        color = "#f97316"; width = "75%"; msg = "Try to move a bit more.";
        category.innerText = "Overweight";
    } else {
        color = "#ef4444"; width = "100%"; msg = "Consult a health expert.";
        category.innerText = "Obese";
    }

    progress.style.backgroundColor = color;
    progress.style.width = width;
    category.style.color = color;
    advice.innerText = msg;
});

// Add this inside your click event listener
const gender = document.querySelector('input[name="gender"]:checked').value;

// ... (keep your existing weight/height conversion logic) ...

// Updated advice logic
let msg = "";
if (bmi < 18.5) {
    msg = gender === "male" ? "Time to build some muscle, sir!" : "Focus on nutrient-dense meals, ma'am!";
} else if (bmi <= 24.9) {
    msg = "You're in peak condition. Keep it up!";
} else {
    msg = "Consider a balanced diet and regular exercise.";
}

// Update the advice text in the UI
document.getElementById('advice').innerText = msg;