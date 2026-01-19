Password Strength Checker 🔒

A responsive web application that helps users create strong passwords. Built with vanilla HTML, CSS, and JavaScript.

Password Checker DemoCSSJavaScript
✨ Features

    Real-time Analysis: Instantly calculates password strength as you type.
    Visual Feedback: Dynamic progress bar that changes color (Red to Green) based on complexity.
    Regex Validation: Checks for lowercase, uppercase, numbers, and special characters.
    User-Friendly: Includes a toggle button to show/hide the password.
    Interactive Info: Tooltip explaining the password requirements.

🛠️ Tech Stack

    HTML5
    CSS3
    JavaScript (Vanilla)

🧠 How it Works

    The application listens to every keystroke in the input field.
    It runs a series of checks using Regular Expressions (Regex) to see if the password contains:
        At least 8 characters.
        Lowercase letters.
        Uppercase letters.
        Numbers.
        Special symbols.
    Based on how many rules are passed, a score (0-5) is calculated.
    The UI updates the width and color of the strength bar accordingly.

🚦 Getting Started
Prerequisites

    A web browser (Chrome, Firefox, Edge, etc.)

Installation

    Clone the repository:

    git clone https://github.com/YOUR_USERNAME/password-strength-checker.git

 

    Open the index.html file in your browser. 

Usage 

     Type a password into the input box.
     Watch the strength bar change color (Red = Weak, Green = Strong).
     Click the "Eye" icon to toggle password visibility.
     Click the "Info" icon to see the security criteria.
     

📝 Future Improvements 

     Add a "Generate Password" feature.
     Include a list of common leaked passwords to warn the user.
     Add dark/light mode toggle.
     
