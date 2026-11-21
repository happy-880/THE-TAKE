
let savedTheme = localStorage.getItem("theTakeTheme") || "light";

const themeButton = document.getElementById("theme-toggle");

function applyTheme() {
    document.body.classList.toggle("dark-theme", savedTheme === "dark");

    if (themeButton) {
        themeButton.textContent =
            savedTheme === "dark" ? "Light Mode" : "Dark Mode";
    }
}

if (themeButton) {
    themeButton.addEventListener("click", function () {
        savedTheme = savedTheme === "light" ? "dark" : "light";

        localStorage.setItem("theTakeTheme", savedTheme);

        applyTheme();
    });
}

applyTheme();

// Back to Top button (only on the Home page)
let backToTop = document.getElementById("back-to-top");

if (backToTop) {
    // show the button when the user scrolls down
    window.onscroll = function () {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    };

    // go back to the top when the button is clicked
    backToTop.onclick = function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
}

// Real-time clock in the footer (only on the Home page)
let clock = document.getElementById("clock");

if (clock) {
    let updateClock = function () {
        let now = new Date();
        clock.textContent = now.toLocaleTimeString("en-US");
    };

    updateClock();
    setInterval(updateClock, 1000);
}