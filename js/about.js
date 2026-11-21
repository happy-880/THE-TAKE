// ===== About Us Page: Join Our Team form (Lamar) =====

let joinForm = document.getElementById("join-team-form");

joinForm.onsubmit = function () {

    let name = document.getElementById("applicant-name").value.trim();
    let photo = document.getElementById("applicant-photo").value;
    let birth = document.getElementById("applicant-dob").value;
    let email = document.getElementById("applicant-email").value;
    let expertise = document.getElementById("applicant-expertise").value;
    let skills = document.getElementById("applicant-skills").value;
    let education = document.getElementById("applicant-education").value;

    // check empty fields
    if (name == "") {
        alert("Please enter your name.");
        return false;
    }
    if (photo == "") {
        alert("Please choose a photo.");
        return false;
    }
    if (birth == "") {
        alert("Please enter your date of birth.");
        return false;
    }
    if (email == "") {
        alert("Please enter your email.");
        return false;
    }
    if (expertise == "") {
        alert("Please enter your area of expertise.");
        return false;
    }
    if (skills == "") {
        alert("Please enter your skills.");
        return false;
    }
    if (education == "") {
        alert("Please enter your education.");
        return false;
    }

    // the name can not start with a number
    if (name.search(/^[0-9]/) != -1) {
        alert("The name cannot start with a number.");
        return false;
    }

    // the file must be an image
    let type = photo.substring(photo.lastIndexOf(".") + 1).toLowerCase();
    if (type != "jpg" && type != "jpeg" && type != "png" && type != "gif") {
        alert("Please choose an image file (JPG or PNG).");
        return false;
    }

    // the year of birth must be 2008 or earlier
    let year = new Date(birth).getFullYear();
    if (year > 2008) {
        alert("The year of birth must be 2008 or earlier.");
        return false;
    }

    // the form is valid
    alert("Thank you, " + name + "! Your request to join our team has been sent successfully.");
    return false; // stay on the same page
};