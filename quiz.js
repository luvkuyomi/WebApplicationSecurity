// quiz.js

document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("quiz-form");
    const resultDiv = document.getElementById("result");
    const scoreText = document.getElementById("score-text");

    quizForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from reloading the page
        
        let score = 0;
        const totalQuestions = 3;

        // Question 1: HTTPS purpose (radio buttons)
        const q1Answer = quizForm.q1.value;
        if (q1Answer === "b") {
            score++;
        }

        // Question 2: Web security threats (checkboxes)
        const q2a = document.getElementById("q2a").checked;
        const q2b = document.getElementById("q2b").checked;
        const q2c = document.getElementById("q2c").checked;
        if (q2a && q2b && !q2c) {
            score++;
        }

        // Question 3: Fill in the blank (text input, case insensitive)
        const q3Answer = quizForm.q3.value.trim().toLowerCase();
        if (q3Answer === "firewall") {
            score++;
        }

        // Display the results
        resultDiv.style.display = "block";
        scoreText.innerHTML = `You scored ${score} out of ${totalQuestions}.`;

        if (score === totalQuestions) {
            scoreText.innerHTML += " <strong>Excellent job! You passed with a perfect score!</strong>";
        } else if (score >= 2) {
            scoreText.innerHTML += " <strong>Good effort! Review some topics and try again.</strong>";
        } else {
            scoreText.innerHTML += " <strong>Keep studying and try again to improve your score!</strong>";
        }
    });
});