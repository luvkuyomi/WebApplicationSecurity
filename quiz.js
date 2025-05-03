// quiz.js

// Wait for the DOM to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("quiz-form"); // gets quiz form element
    const resultDiv = document.getElementById("result"); // gets the results display container
    const scoreText = document.getElementById("score-text"); // gets the paragraph to display score

    // Create and configure the restart button
    const restartBtn = document.createElement("button");
    restartBtn.textContent = "Restart Quiz";
    restartBtn.style.marginTop = "10px";
    restartBtn.style.display = "none";
    resultDiv.appendChild(restartBtn);

    // Create a container to show correct answers
    const answerDetails = document.createElement("div");
    answerDetails.setAttribute("id", "answer-details");
    resultDiv.appendChild(answerDetails);

    // Add event listener to handle form submission
    quizForm.addEventListener("submit", function (event) {
        event.preventDefault(); // prevents form from refreshing on submit

        let score = 0; // initializes quiz score
        const totalQuestions = 3; // total number of quiz questions

        answerDetails.innerHTML = "<h4>Correct Answers:</h4>";
        const answers = []; // array to store correct answer text

    // Question 1: HTTPS purpose (radio buttons)
        const q1Answer = quizForm.q1.value;
        if (q1Answer === "b") {
            score++;
        }
        answers.push("1. HTTPS is used to encrypt data between the browser and server. (Correct answer: b)");

     // Question 2: Web security threats (checkboxes)
        const q2a = document.getElementById("q2a").checked;
        const q2b = document.getElementById("q2b").checked;
        const q2c = document.getElementById("q2c").checked;
        if (q2a && q2b && !q2c) {
            score++;
        }
        answers.push("2. Common threats include SQL Injection and XSS. (Correct answers: a and b)");

     // Question 3: Fill in the blank 
        const q3Answer = quizForm.q3.value.trim().toLowerCase();
        if (q3Answer === "firewall") {
            score++;
        }
        answers.push("3. A firewall helps prevent unauthorized access. (Correct answer: firewall)");

    // Display Results
        resultDiv.style.display = "block"; // makes results section visible
        scoreText.innerHTML = `You scored ${score} out of ${totalQuestions}.`;

    // Adds feedback based on score
        if (score === totalQuestions) {
            scoreText.innerHTML += " <strong>Excellent job! You passed with a perfect score!</strong>";
        } else if (score >= 2) {
            scoreText.innerHTML += " <strong>Good effort! Review some topics and try again.</strong>";
        } else {
            scoreText.innerHTML += " <strong>Keep studying and try again to improve your score!</strong>";
        }

// Show correct answers
        answerDetails.innerHTML += "<ul>" + answers.map(ans => `<li>${ans}</li>`).join("") + "</ul>";

        restartBtn.style.display = "inline-block"; // Show restart button
    });

// Add functionality to restart the quiz when button is clicked
    restartBtn.addEventListener("click", function () {
        quizForm.reset(); // reset all form fields
        resultDiv.style.display = "none"; // hide the results section
        restartBtn.style.display = "none"; // hide the restart button again
        answerDetails.innerHTML = ""; // clear correct answers
    });
});
