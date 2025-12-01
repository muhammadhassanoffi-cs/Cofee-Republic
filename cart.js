
let cart = JSON.parse(localStorage.getItem("cart")) || [];


function addtocart(id, name, price) {
    const product = { id, name, price };
    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 }); 
    }

    savecart();
    rendercart();
}

function removefromcart(id) {
    cart = cart.filter(item => item.id !== id); 
    savecart();
    rendercart();
}

function savecart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function rendercart() {
    const tbody = document.querySelector("#cart-table tbody");
    const subtotalEl = document.getElementById("subtotal");
    if (!tbody || !subtotalEl) return;

    tbody.innerHTML = "";
    let subtotal = 0;

    cart.forEach(item => {
        const total = item.price * item.quantity;
        subtotal += total;

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price}</td>
            <td>${item.quantity}</td>
            <td>$${total}</td>
            <td><button onclick="removefromcart(${item.id})">Remove</button></td>
        `;
        tbody.appendChild(row);
    });

    subtotalEl.textContent = subtotal;
}

rendercart();
