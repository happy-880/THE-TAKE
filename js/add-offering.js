let form = document.getElementById("offering-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("offering-name").value.trim();
    let image = document.getElementById("offering-image").files[0];
    let price = document.getElementById("offering-price").value.trim();
    let description = document.getElementById("offering-description").value.trim();

    // check empty fields
    if (name == "") {
        alert("Please enter the offering name.");
        return;
    }
    if (image == undefined) {
        alert("Please choose an image for the offering.");
        return;
    }
    if (price == "") {
        alert("Please enter the price (write 0 if it is free).");
        return;
    }
    if (description == "") {
        alert("Please enter the offering description.");
        return;
    }

    // the name can not start with a number
    if (!isNaN(name.charAt(0))) {
        alert("The offering name cannot start with a number.");
        return;
    }

    // the file must be an image
    if (!image.type.startsWith("image/")) {
        alert("Please choose an image file (JPG or PNG).");
        return;
    }

    // the price must be a number
    if (isNaN(price) || price < 0) {
        alert("The price must be a number.");
        return;
    }

    // read the image then save the offering in local storage
    let reader = new FileReader();

    reader.onload = function () {
        let offerings = JSON.parse(localStorage.getItem("offerings")) || [];

        let newOffering = {
            name: name,
            image: reader.result,
            price: price,
            description: description
        };

        offerings.push(newOffering);
        localStorage.setItem("offerings", JSON.stringify(offerings));

        alert("The offering \"" + name + "\" was added successfully!");
        form.reset();
    };

    reader.readAsDataURL(image);
});