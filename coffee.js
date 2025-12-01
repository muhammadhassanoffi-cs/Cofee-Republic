const searchInput = document.getElementById("searchinput");
const products = document.getElementsByClassName("product");
const message = document.getElementById("search-message");

searchInput.addEventListener("input", function () {
    
    let text = searchInput.value.toLowerCase();
    let anyMatch = false;
    for (let i = 0; i < products.length; i++) {
        let productName = products[i].querySelector("h3").innerText.toLowerCase();
        if (productName.indexOf(text) !== -1) {
            products[i].style.display = "block"; 
            anyMatch = true;
        } else {
            products[i].style.display = "none";  
        }
    }

   
    if (text === "") {
        for (let i = 0; i < products.length; i++) {
            products[i].style.display = "block";
        }
        message.innerText = "";
    }

   
    else if (anyMatch === false) {
        message.innerText = "Coffee Not Found";
    } 
    else {
        message.innerText = "";
    }
});


