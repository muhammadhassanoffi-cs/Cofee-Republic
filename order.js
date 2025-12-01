let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function renderOrder() {
    const tbody = document.querySelector("#orderTable tbody");
    const totalEl = document.getElementById("grandTotal");
    tbody.innerHTML = "";
    let grandTotal = 0;

    cart.forEach((item, index) => {
        const total = item.price * item.quantity;
        grandTotal += total;

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price}</td>
            <td>
                 
                ${item.quantity}
                 
            </td>
            <td>$${total}</td>
           
        `;
        tbody.appendChild(row);
    });

    totalEl.textContent = grandTotal;
}

// function increaseQty(i) {
//     cart[i].quantity++;
//     saveCart();
//     renderOrder();
// }

// function decreaseQty(i) {
//     if (cart[i].quantity > 1) {
//         cart[i].quantity--;
//     } else {
//         cart.splice(i, 1);
//     }
//     saveCart();
//     renderOrder();
// }

// function removeItem(i) {
//     cart.splice(i, 1);
//     saveCart();
//     renderOrder();
// }

renderOrder();
