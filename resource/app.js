
    function calculateScore() {
        const form = document.getElementById('quizForm');
        const scoreElement = document.getElementById('score');
        const resultContainer = document.getElementById('result');

        let score = 0;

        // Check answers
        if (form.q1.value === 'a') {
            score++;
        }
        if (form.q2.value === 'b') {
            score++;
        }
        if (form.q3.value === 'b') {
            score++;
        }
        if (form.q4.value === 'a') {
            score++;
        }
        if (form.q5.value === 'b') {
            score++;
        }
        if (form.q6.value === 'b') {
            score++;
        }
        if (form.q7.value === 'a') {
            score++;
        }
        if (form.q8.value === 'b') {
            score++;
        }
        if (form.q9.value === 'b') {
            score++;
        }
        if (form.q10.value === 'b') {
            score++;
        }


        // Display the result
        scoreElement.textContent = `You scored ${score} out of 10.`;
        resultContainer.style.display = 'block';
    }
