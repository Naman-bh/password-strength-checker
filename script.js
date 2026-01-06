const passwordInput = document.getElementById("passwordInput");
const strengthBarFill = document.getElementById("strength-bar-fill");
const strengthText = document.getElementById("strength-text");
const toggleIcon = document.getElementById("toggleIcon");

// Regex Patterns
const hasLower = /[a-z]/;
const hasUpper = /[A-Z]/;
const hasNumber = /\d/;
const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/;

passwordInput.addEventListener("input", function() {
    const password = passwordInput.value;
    let strength = 0;

    // 1. Check Length
    if (password.length > 0) strength += 1;
    if (password.length >= 8) strength += 1;

    // 2. Check Character Types
    if (hasLower.test(password)) strength += 1;
    if (hasUpper.test(password)) strength += 1;
    if (hasNumber.test(password)) strength += 1;
    if (hasSpecial.test(password)) strength += 1;

    // Update UI based on Strength (0 to 5)
    updateStrength(strength);
});

function updateStrength(strength) {
    switch (strength) {
        case 0:
            strengthBarFill.style.width = "0%";
            strengthBarFill.style.backgroundColor = "#ff4d4d";
            strengthText.innerText = "Strength: Empty";
            break;
        case 1:
            strengthBarFill.style.width = "20%";
            strengthBarFill.style.backgroundColor = "#ff4d4d"; // Red
            strengthText.innerText = "Strength: Very Weak";
            break;
        case 2:
            strengthBarFill.style.width = "40%";
            strengthBarFill.style.backgroundColor = "#ff9f43"; // Orange
            strengthText.innerText = "Strength: Weak";
            break;
        case 3:
            strengthBarFill.style.width = "60%";
            strengthBarFill.style.backgroundColor = "#feca57"; // Yellow
            strengthText.innerText = "Strength: Medium";
            break;
        case 4:
            strengthBarFill.style.width = "80%";
            strengthBarFill.style.backgroundColor = "#1dd1a1"; // Light Green
            strengthText.innerText = "Strength: Strong";
            break;
        case 5:
            strengthBarFill.style.width = "100%";
            strengthBarFill.style.backgroundColor = "#10ac84"; // Dark Green
            strengthText.innerText = "Strength: Very Strong";
            break;
    }
}

// Toggle Password Visibility (Eye Icon)
toggleIcon.addEventListener("click", function() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.classList.remove("fa-eye");
        toggleIcon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        toggleIcon.classList.remove("fa-eye-slash");
        toggleIcon.classList.add("fa-eye");
    }
});
// --- Show/Hide Tooltip Logic ---
const infoIcon = document.querySelector('.info-icon');
const tooltipContent = document.querySelector('.tooltip-content');

infoIcon.addEventListener('click', () => {
    // Toggle between 'block' (show) and 'none' (hide)
    if (tooltipContent.style.display === 'block') {
        tooltipContent.style.display = 'none';
    } else {
        tooltipContent.style.display = 'block';
    }
});

