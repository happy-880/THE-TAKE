// Offering Evaluation page

let evaluationForm = document.getElementById("evaluation-form");

evaluationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let offering = document.getElementById("offering");
    let feedback = document.getElementById("feedback");
    let stars = document.querySelector(".rating-stars");
    let rating = document.querySelector('input[name="rating"]:checked');

    // remove the old highlights
    offering.classList.remove("input-error");
    stars.classList.remove("input-error");
    feedback.classList.remove("input-error");

    // highlight every unfilled input
    let missing = "";

    if (offering.value == "") {
        offering.classList.add("input-error");
        missing += "\n- Select an offering";
    }
    if (rating == null) {
        stars.classList.add("input-error");
        missing += "\n- Add a rating";
    }
    if (feedback.value.trim() == "") {
        feedback.classList.add("input-error");
        missing += "\n- Write your feedback";
    }

    if (missing != "") {
        alert("Please complete the following:" + missing);
        return;
    }

    // good rating = thank you, low rating = apology
    if (rating.value >= 4) {
        alert("Thank you for your great rating! We are happy you enjoyed the offering.");
    } else {
        alert("We are sorry the offering did not meet your expectations. Thank you for your feedback, we will work on improving it.");
    }

    // go to the member dashboard
    window.location.href = "member-dashboard.html";
});