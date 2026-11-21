// list of instructors (array of objects)
let instructors = [
    { name: "Omar Alharbi", image: "images/OurTeam1.png", expertise: "Film Directing", email: "omar.alharbi@thetake.sa" },
    { name: "Layan Alqahtani", image: "images/OurTeam2.png", expertise: "Cinematography", email: "layan.alqahtani@thetake.sa" },
    { name: "Faisal Alothman", image: "images/OurTeam3.png", expertise: "Video Editing", email: "faisal.alothman@thetake.sa" },
    { name: "Noura Alshammari", image: "images/OurTeam4.png", expertise: "Screenwriting", email: "noura.alshammari@thetake.sa" },
    { name: "Khalid Almutairi", image: "images/OurTeam5.png", expertise: "Film Production", email: "khalid.almutairi@thetake.sa" }
];

// show the instructors in the table
function showInstructors() {
    let tableBody = document.getElementById("instructors-body");
    tableBody.innerHTML = "";

    for (let i = 0; i < instructors.length; i++) {
        tableBody.innerHTML += "<tr>" +
            '<td><input type="checkbox" name="instructor" value="' + i + '"></td>' +
            '<td><img src="' + instructors[i].image + '" alt="' + instructors[i].name + '" class="offering-thumbnail"></td>' +
            "<td>" + instructors[i].name + "</td>" +
            "<td>" + instructors[i].expertise + "</td>" +
            "<td>" + instructors[i].email + "</td>" +
            "</tr>";
    }
}

showInstructors();


// Delete 
document.getElementById("delete-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let checkboxes = document.getElementsByName("instructor");

    // count how many are selected
    let selected = 0;
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selected++;
        }
    }

    if (selected == 0) {
        alert("Please select at least one person to delete.");
        return;
    }

    if (confirm("Are you sure you want to delete the selected people?")) {
        // start from the end so the positions don't change while deleting
        for (let i = checkboxes.length - 1; i >= 0; i--) {
            if (checkboxes[i].checked) {
                instructors.splice(i, 1);
            }
        }
        showInstructors();
    }
});


// Add 
let addForm = document.getElementById("instructor-form");

addForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("instructor-name").value.trim();
    let photo = document.getElementById("instructor-photo").files[0];
    let birth = document.getElementById("instructor-birth").value;
    let email = document.getElementById("instructor-email").value.trim();
    let expertise = document.getElementById("instructor-expertise").value.trim();
    let skills = document.getElementById("instructor-skills").value.trim();
    let education = document.getElementById("instructor-education").value.trim();

    // check empty fields
    if (name == "") {
        alert("Please enter the name.");
        return;
    }
    if (photo == undefined) {
        alert("Please choose a photo.");
        return;
    }
    if (birth == "") {
        alert("Please enter the date of birth.");
        return;
    }
    if (email == "") {
        alert("Please enter the email.");
        return;
    }
    if (expertise == "") {
        alert("Please enter the area of expertise.");
        return;
    }
    if (skills == "") {
        alert("Please enter the skills.");
        return;
    }
    if (education == "") {
        alert("Please enter the education.");
        return;
    }

    // check the type of each field
    if (/[0-9]/.test(name)) {
        alert("The name cannot contain numbers.");
        return;
    }
    if (!photo.type.startsWith("image/")) {
        alert("Please choose an image file (JPG or PNG).");
        return;
    }
    if (new Date(birth) > new Date()) {
        alert("The date of birth cannot be in the future.");
        return;
    }
    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a correct email (example: name@thetake.sa).");
        return;
    }
    if (/[0-9]/.test(expertise)) {
        alert("The area of expertise cannot contain numbers.");
        return;
    }

    // read the photo then add the new person to the list
    let reader = new FileReader();

    reader.onload = function () {
        let newInstructor = {
            name: name,
            image: reader.result,
            expertise: expertise,
            email: email
        };

        instructors.push(newInstructor);
        showInstructors();

        alert(name + " was added successfully!");
        addForm.reset();
    };

    reader.readAsDataURL(photo);
});