// quiz.js

// Waits for DOM to be fuly loaded before executing script
document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("quiz-form"); // Gets quiz form element
    const resultDiv = document.getElementById("result"); // Gets result display container
    const scoreText = document.getElementById("score-text"); // Gets paragraph to display score text

    // Create and configure the restart button
    const restartBtn = document.createElement("button");
    restartBtn.textContent = "Restart Quiz";
    restartBtn.style.marginTop = "10px";
    restartBtn.style.display = "none";
    resultDiv.appendChild(restartBtn);

    // event listener to handle form submission
    quizForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from refreshing the page on submit

        let score = 0; // initializes quiz score
        const totalQuestions = 3; // total number of quiz questions

        // Question 1: HTTPS purpose (radio buttons) 
        const q1Answer = quizForm.q1.value; // Get selected value for question 1
        if (q1Answer === "b") {
            score++; // increments score if correct answer selected
        }

        // Question 2: Web security threats (checkboxes) 
        const q2a = document.getElementById("q2a").checked; // is SQL Injection checked?
        const q2b = document.getElementById("q2b").checked; // is XSS checked?
        const q2c = document.getElementById("q2c").checked; // is incorrect option checked?
        if (q2a && q2b && !q2c) {
            score++; // increments score if correct boxes are checked and incorrect is not
        }

        // Question 3: Fill in the blank 
        const q3Answer = quizForm.q3.value.trim().toLowerCase(); // gets and normalizes user input
        if (q3Answer === "firewall") {
            score++; // increment score if answer is correct (firewall)
        }

        //  Display Results 
        resultDiv.style.display = "block"; // make result section visible
        scoreText.innerHTML = `You scored ${score} out of ${totalQuestions}.`; // shows score

        // add feedback based on user score
        if (score === totalQuestions) {
            scoreText.innerHTML += " <strong>Excellent job! You passed with a perfect score!</strong>";
        } else if (score >= 2) {
            scoreText.innerHTML += " <strong>Good effort! Review some topics and try again.</strong>";
        } else {
            scoreText.innerHTML += " <strong>Keep studying and try again to improve your score!</strong>";
        }

        restartBtn.style.display = "inline-block"; // shows restart button
    });

    // add the function to restart the quiz when button is clicked
    restartBtn.addEventListener("click", function () {
        quizForm.reset(); // resets all form fields
        resultDiv.style.display = "none"; // hides the results section
        restartBtn.style.display = "none"; // hides the restart button again
    });
});
