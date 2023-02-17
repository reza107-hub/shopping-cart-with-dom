let serial = 0
let grandTotal = 0;
function getProductDetails(elementId) {
    const productName = document.getElementById(elementId).parentNode.parentNode.children[0].innerText;
    const productPrice = document.getElementById(elementId).parentNode.parentNode.children[2].children[0].innerText;
    const productQuantity = document.getElementById(elementId).parentNode.parentNode.children[3].children[0].innerText;
    const productTotalPrice = parseInt(productPrice) * parseInt(productQuantity)
    grandTotal += productTotalPrice;
    tableContainer(serial, productName, productPrice, productQuantity, productTotalPrice, grandTotal)
}

function tableContainer(serial, productName, productPrice, productQuantity, productTotalPrice, grandTotal) {
    const table = document.getElementById('table-container');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${productName}</td>
    <td>${productPrice}</td>
    <td>${productQuantity}</td>
    <td>${productTotalPrice}</td>
    <td>${grandTotal}</td>
    `;
    table.appendChild(tr)
    document.getElementById('total-product').innerText = serial;
}

document.getElementById('first-card').addEventListener('click', function () {
    serial += 1;
    getProductDetails('first-card');
    document.getElementById('first-card').setAttribute('disabled', true)
})

document.getElementById('second-card').addEventListener('click', function () {
    serial += 1;
    getProductDetails('second-card');
    document.getElementById('second-card').setAttribute('disabled', true)
})

document.getElementById('third-card').addEventListener('click', function () {
    serial += 1;
    getProductDetails('third-card');
    document.getElementById('third-card').setAttribute('disabled', true)
})

document.getElementById('second-last').addEventListener('click', function () {
    serial += 1;
    getProductDetails('second-last');
    document.getElementById('second-last').setAttribute('disabled', true)
})

document.getElementById('last-card').addEventListener('click', function () {
    serial += 1;
    const productName = document.getElementById('last-card').parentNode.parentNode.children[0].innerText;
    const productPrice = document.getElementById('last-card').parentNode.parentNode.children[2].value;
    const productQuantity = document.getElementById('last-card').parentNode.parentNode.children[3].value;
    if (productPrice === '' || productQuantity === '' || isNaN(productPrice) || isNaN(productQuantity) || parseInt(productPrice) <= 0 || parseInt(productQuantity) <= 0) {
        alert('Please enter valid values for product price and quantity.')
    } else {
        const productTotalPrice = parseInt(productPrice) * parseInt(productQuantity)
        grandTotal += productTotalPrice;
        tableContainer(serial, productName, productPrice, productQuantity, productTotalPrice, grandTotal)
        document.getElementById('last-card').setAttribute('disabled', true)
    }
})