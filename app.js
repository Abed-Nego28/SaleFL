// Tableau pour stocker les produits du panier
const cart = [];

// Fonction pour charger les produits
function loadProducts() {
    const products = [
        { id: 1, name: 'Pomme', price: 1.2, image: 'images/apple.jpg' },
        { id: 2, name: 'Banane', price: 0.8, image: 'images/banana.jpg' },
        { id: 3, name: 'Carotte', price: 0.5, image: 'images/carrot.jpg' },
        { id: 4, name: 'Tomate', price: 1.0, image: 'images/tomato.jpg' },
        { id: 5, name: 'Brocoli', price: 1.3, image: 'images/broccoli.jpg' },
        { id: 6, name: 'Orange', price: 1.1, image: 'images/orange.jpg' },
        { id: 7, name: 'Concombre', price: 0.7, image: 'images/cucumber.jpg' },
        { id: 8, name: 'Raisin', price: 2.0, image: 'images/grapes.jpg' },
        { id: 9, name: 'Poire', price: 1.5, image: 'images/pear.jpg' },
        { id: 10, name: 'Kiwi', price: 1.8, image: 'images/kiwi.jpg' }
    ];

    const productList = document.getElementById('product-list');
    productList.innerHTML = products.map(product => `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price} €</p>
            <button onclick="addToCart(${product.id}, '${product.name}', ${product.price}, '${product.image}')">Ajouter au panier</button>
        </div>
    `).join('');
}

// Fonction pour ajouter un produit au panier
function addToCart(productId, productName, productPrice, productImage) {
    const productIndex = cart.findIndex(item => item.id === productId);
    if (productIndex !== -1) {
        cart[productIndex].quantity += 1;
    } else {
        cart.push({ id: productId, name: productName, price: productPrice, image: productImage, quantity: 1 });
    }
    updateCart();
}

// Fonction pour mettre à jour le contenu du panier
function updateCart() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div>
                <h4>${item.name}</h4>
                <p>${item.quantity} x ${item.price} €</p>
            </div>
        </div>
    `).join('');
}

// Fonction pour afficher ou masquer le modal du panier
function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = cartModal.style.display === 'none' || !cartModal.style.display ? 'block' : 'none';
}

// Fonction pour fermer le modal du panier
function closeCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'none';
}

// Fonction pour faire défiler vers le formulaire de contact
function openContactForm() {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
}

// Fonction pour naviguer entre les sections
function navigateTo(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Fonction pour simuler le passage à la caisse
function checkout() {
    alert('Fonctionnalité de paiement à venir !');
}
