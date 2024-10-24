let products = [
    { name: 'Produto 1', quantity: 10, minQuantity: 2 },
    { name: 'Produto 2', quantity: 5, minQuantity: 1 }
];

function renderProducts() {
    const productList = document.getElementById('productList');
    productList.innerHTML = ''; // Limpa a lista

    products.forEach((product, index) => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - Quantidade: ${product.quantity}`;
        productList.appendChild(li);

        // Verifica quantidade mínima
        if (product.quantity < product.minQuantity) {
            const warning = document.createElement('span');
            warning.className = 'warning';
            warning.textContent = 'Produto em falta!';
            li.appendChild(warning);
        }
    });
}

function addProduct() {
    const productName = prompt('Nome do Produto:');
    const productQuantity = prompt('Quantidade do Produto:');
    
    if (productName && productQuantity) {
        products.push({ name: productName, quantity: parseInt(productQuantity), minQuantity: 1 });
        renderProducts();
    }
}

function openMenu() {
    document.getElementById('menu').classList.toggle('show');
}

function goToPage(page) {
    if (page === 'mainPage') {
        window.location.href = '/src/views/mainPage.html';
    } else if (page === 'stockManagement') {
        window.location.href = '/src/views/stockManagement.html';
    }
}

renderProducts();
