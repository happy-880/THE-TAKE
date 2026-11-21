
// JavaScript for Club Offerings Page

var offeringsGrid = document.getElementsByClassName("offerings-grid")[0];
var offeringCards = document.getElementsByClassName("offering-card");

var offerings = [];

// Store offerings information in an array
for (var i = 0; i < offeringCards.length; i++) {

    var name = offeringCards[i].getElementsByTagName("h2")[0].innerHTML;

    var priceText = offeringCards[i]
        .getElementsByClassName("price")[0]
        .getElementsByTagName("span")[0].innerHTML;

    var price = parseInt(priceText.substring(5));

    offerings[i] = {
        name: name,
        price: price,
        content: offeringCards[i].innerHTML
    };
}


// Display offerings
function displayOfferings() {

    offeringsGrid.innerHTML = "";

    for (var i = 0; i < offerings.length; i++) {

        offeringsGrid.innerHTML +=
            '<div class="offering-card">' +
            offerings[i].content +
                        '</div>';
    }

    // keep the search result after sorting
    searchOfferings();
}


// Search offerings by name
function searchOfferings() {

    var searchText = document.getElementById("search-offerings").value.toLowerCase().trim();
    var cards = document.getElementsByClassName("offering-card");
    var shown = 0;

    for (var i = 0; i < cards.length; i++) {

        var cardName = cards[i].getElementsByTagName("h2")[0].innerHTML.toLowerCase();

        if (cardName.indexOf(searchText) != -1) {
            cards[i].style.display = "";
            shown++;
        } else {
            cards[i].style.display = "none";
        }
    }

    // show a message when nothing matches
    if (shown == 0) {
        document.getElementById("no-results").style.display = "block";
    } else {
        document.getElementById("no-results").style.display = "none";
    }
}

// Search while the user is typing
document.getElementById("search-offerings").oninput = searchOfferings;


// Random order
function randomOrder() {

    for (var i = offerings.length - 1; i > 0; i--) {

        var randomIndex = Math.floor(Math.random() * (i + 1));

        var temp = offerings[i];

        offerings[i] = offerings[randomIndex];

        offerings[randomIndex] = temp;
    }

    displayOfferings();
}


// Sort offerings
function sortOfferings() {

    var sortingOption =
        document.getElementById("sort-offerings").value;

    for (var i = 0; i < offerings.length - 1; i++) {

        for (var j = i + 1; j < offerings.length; j++) {

            var shouldSwap = false;

            if (sortingOption == "az" &&
                offerings[i].name > offerings[j].name) {

                shouldSwap = true;
            }

            else if (sortingOption == "za" &&
                offerings[i].name < offerings[j].name) {

                shouldSwap = true;
            }

            else if (sortingOption == "low-high" &&
                offerings[i].price > offerings[j].price) {

                shouldSwap = true;
            }

            else if (sortingOption == "high-low" &&
                offerings[i].price < offerings[j].price) {

                shouldSwap = true;
            }

            if (shouldSwap) {

                var temp = offerings[i];

                offerings[i] = offerings[j];

                offerings[j] = temp;
            }
        }
    }

    displayOfferings();
}


// Connect sorting menu with JavaScript
document.getElementById("sort-offerings").onchange = sortOfferings;


// Display random offerings when page loads
randomOrder();
