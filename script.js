let cart = [];
let total = 0;
function scrollProducts() {
    document.getElementById('products').scrollIntoView({
        behavior: 'smooth'
    });
}
function addToCart(productName, productPrice) {
    cart.push({
        name: productName,
        price: productPrice
    });
    total += productPrice;
    displayCart();
}
function displayCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    cart.forEach((item) => {
        cartItems.innerHTML += `
            <div class="cart-item">
                <h3>${item.name}</h3>
                <p>Price: ₹${item.price}</p>
            </div>
        `;
    });
    document.getElementById('totalPrice').innerText =
        `Total: ₹${total}`;
}
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('keyup', function () {
    const value = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        const productName = card.querySelector('h3')
            .innerText.toLowerCase();
        if (productName.includes(value)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});