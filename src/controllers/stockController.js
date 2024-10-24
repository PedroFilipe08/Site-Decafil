// Inicializando produtos com valores padrões
let products = [
    { name: 'Produto 1', quantity: 10, minQuantity: 2, price: 0 },
    { name: 'Produto 2', quantity: 5, minQuantity: 1, price: 0 }
];

function renderStockManagement() {
    const stockList = document.getElementById('stockList');
    const totalAmountElement = document.getElementById('totalAmount');
    stockList.innerHTML = '';

    let totalAmount = 0;

    products.forEach((product, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${product.name} - Quantidade: ${product.quantity} - 
            Preço por unidade: R$ <input type="number" value="${product.price}" onchange="updatePrice(${index}, this.value)">
        `;
        stockList.appendChild(li);

        // Atualiza o total ao multiplicar quantidade por preço
        totalAmount += product.quantity * product.price;
    });

    totalAmountElement.textContent = totalAmount.toFixed(2);
}

function updatePrice(index, newPrice) {
    products[index].price = parseFloat(newPrice);
    renderStockManagement();  // Atualiza a página e recalcula o total
}

function renderSettings() {
    const settingsList = document.getElementById('settingsList');
    settingsList.innerHTML = '';

    products.forEach((product, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${product.name} - Quantidade mínima: 
            <input type="number" value="${product.minQuantity}" onchange="updateMinQuantity(${index}, this.value)">
        `;
        settingsList.appendChild(li);
    });
}

function updateMinQuantity(index, newMinQuantity) {
    products[index].minQuantity = parseInt(newMinQuantity);
    alert(`Quantidade mínima de ${products[index].name} atualizada para ${newMinQuantity}`);
}

function goToPage(page) {
    if (page === 'mainPage') {
        window.location.href = '/src/views/mainPage.html';
    } else if (page === 'settings') {
        window.location.href = '/src/views/settings.html';
    }
}

renderStockManagement();
renderSettings();
