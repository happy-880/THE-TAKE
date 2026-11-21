let offerings = JSON.parse(localStorage.getItem("offerings")) || [];
let tableBody = document.getElementById("offerings-body");

// add every saved offering as a new row in the table
for (let i = 0; i < offerings.length; i++) {
    let price = "SAR " + offerings[i].price;
    if (offerings[i].price == 0) {
        price = "SAR 0 (FREE)";
    }

    tableBody.innerHTML += "<tr>" +
        '<td><img src="' + offerings[i].image + '" alt="' + offerings[i].name + '" class="offering-thumbnail"></td>' +
        "<td>" + offerings[i].name + "</td>" +
        "<td>" + price + "</td>" +
        "<td>" + offerings[i].description + "</td>" +
        "</tr>";
}