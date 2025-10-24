document.getElementById("Mail").addEventListener("click", function(e) {
    e.preventDefault();
    // Predefined message
    const subject = encodeURIComponent("Quiz Submission");
    const body = encodeURIComponent("Hello,\n\nThank you Anubhav\n\nI have completed the quiz.\n\n");
    const mailtoLink = `mailto:anubhavbhardwaj2004@gmail.com?subject=${subject}&body=${body}&score`;
    window.location.href = mailtoLink;
});
document.getElementById("answers").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("answerImage").innerHTML =
        '<div style="text-align:center; border-radius=10px  ">' +
        '<br>Question 1-answer is option -2' +
        '<br>Question 2-answer is option -2' +
        '<br>Question 1-answer is option -3' +
        '<br>Question 1-answer is option -1' +
        '</div>';
})
document.getElementById("Score").addEventListener("click", function(e) {
    e.preventDefault();
    // List all question groups
    const questionNames = ["option1", "option2", "option3", "option4"];
    let allAnswered = true;
    for (let name of questionNames) {
        if (!document.querySelector(`input[name="${name}"]:checked`)) {
            allAnswered = false;
            break;
        }
    }
    if (!allAnswered) {
        alert("Please answer all questions before checking your score.");
        return;
    }
    // If all answered, calculate score (placeholder logic)
    // Example correct answers:
    const correctAnswers = {
        option1: "b",
        option2: "b",
        option3: "c",
        option4: "a"
    };
    let score = 0;
    for (let name of questionNames) {
        const selected = document.querySelector(`input[name="${name}"]:checked`).value;
        if (selected === correctAnswers[name]) {
            score += 5;
        }
    }
    alert(`Your score is: ${score}`);
});
document.getElementById("certifiacte").addEventListener("click", function(e) {
    e.preventDefault();
    // Show certificate image in a centered div
    document.getElementById("answerImage").innerHTML = `
        <div style="text-align:center;">
            <img src="assets/certificate orignal.png" alt="Certificate" style="max-width:100%;height:auto;border-radius:10px;">
        </div>
    `;
});