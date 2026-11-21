// Request to Join an Offering page

let requestForm = document.getElementById("request-form");
let requestsBox = document.getElementById("new-requests");

// the requests added while the member is on this page
let newRequests = [];

requestForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let offeringList = document.getElementById("offering");
    let offering = offeringList.value;
    let offeringName = offeringList.options[offeringList.selectedIndex].text;
    let fullName = document.getElementById("full-name").value.trim();
    let date = document.getElementById("preferred-date").value;

    // 1) an offering must be selected
    if (offering == "") {
        alert("Please select an offering.");
        return;
    }

    // 2) check the name
    if (fullName == "") {
        alert("Please enter your full name.");
        return;
    }
    if (fullName.indexOf(" ") == -1) {
        alert("Please enter your full name (first and last name).");
        return;
    }
    if (/[0-9]/.test(fullName)) {
        alert("The name cannot contain numbers.");
        return;
    }
    if (!/^[A-Za-z ]+$/.test(fullName)) {
        alert("The name cannot contain symbols such as ? ! or @.");
        return;
    }

    // 3) the date must be in the future
    if (date == "") {
        alert("Please choose a preferred date.");
        return;
    }

    let now = new Date();
    let month = String(now.getMonth() + 1).padStart(2, "0");
    let day = String(now.getDate()).padStart(2, "0");
    let today = now.getFullYear() + "-" + month + "-" + day;

    // dates in YYYY-MM-DD format can be compared as text
    if (date <= today) {
        alert("The preferred date must be a future date.");
        return;
    }

    // the form is valid: save the request
    newRequests.push({ offering: offeringName, name: fullName, date: date });

    let stay = confirm("Your request was sent successfully!\n\n" +
        "Press OK to stay on this page and add another request,\n" +
        "or Cancel to go back to the dashboard.");

    if (stay) {
        showRequests();
        requestForm.reset();
    } else {
        window.location.href = "member-dashboard.html";
    }
});

// show all the new requests in a table
function showRequests() {
    let html = "<h2 class='requests-title'>Your New Requests</h2>" +
        "<div class='table-wrap'>" +
        "<table class='offerings-table member-requests-table'>" +
        "<thead><tr><th>Offering Name</th><th>Member Name</th><th>Preferred Date</th></tr></thead>" +
        "<tbody>";

    for (let i = 0; i < newRequests.length; i++) {
        html += "<tr>" +
            "<td>" + newRequests[i].offering + "</td>" +
            "<td>" + newRequests[i].name + "</td>" +
            "<td>" + newRequests[i].date + "</td>" +
            "</tr>";
    }

    html += "</tbody></table></div>";
    requestsBox.innerHTML = html;
}