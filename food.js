const input = document.getElementById("searchinput");
const message = document.getElementById("search-message");
const products = document.getElementsByClassName("product");

// Run search whenever user types
input.addEventListener("input", function() {
    const search = input.value.toLowerCase().trim();
    let found = false;

    // Loop through all products
    for (let i = 0; i < products.length; i++) {
        const name = products[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
        
        if (name.includes(search) && search !== "") {
            products[i].style.display = "block"; // show matched
            found = true;
        } else if (search !== "") {
            products[i].style.display = "none"; // hide others
        } else {
            products[i].style.display = "block"; // show all if empty
        }
    }

    // Show message if no match
    if (search !== "" && !found) {
        message.innerText = "Food Not Found";
    } else {
        message.innerText = "";
    }
});