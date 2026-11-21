// Journey page: switch between the five filmmaking stages with JavaScript

let stages = ["idea", "script", "shooting", "editing", "premiere"];
let currentStage = 0;

// show one stage and hide the others
function showStage(number) {
    for (let i = 0; i < stages.length; i++) {
        let section = document.getElementById(stages[i]);
        let icon = document.querySelector("." + stages[i] + "-step .timeline-icon");

        if (i == number) {
            section.style.display = "flex";
            icon.classList.add("active-icon");
        } else {
            section.style.display = "none";
            icon.classList.remove("active-icon");
        }
    }

    currentStage = number;
    document.getElementById("stage-" + stages[number]).checked = true;
}

// clicking a timeline icon or an arrow selects a stage
let radios = document.getElementsByName("journey-stage");

for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener("change", function () {
        showStage(i);
    });
}

// extra: use the left and right arrow keys to move between stages
document.addEventListener("keydown", function (event) {
    if (event.key == "ArrowRight") {
        showStage((currentStage + 1) % stages.length);
    } else if (event.key == "ArrowLeft") {
        showStage((currentStage - 1 + stages.length) % stages.length);
    }
});

// start with the first stage
showStage(0);