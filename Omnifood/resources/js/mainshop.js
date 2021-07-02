"use strict";
let carts = document.querySelectorAll('.add-cart');
//when we select class add-cart
let products = [
    {
        name: 'ramen',
        tag: 'ramen',
        price: 15,
        inCart: 0
    },
    {
        name: 'pizza',
        tag: 'pizza',
        price: 20,
        inCart: 0
    },
    {
        name: 'steak',
        tag: 'steak',
        price: 10,
        inCart: 0
    },
    {
        name: 'soup',
        tag: 'soup',
        price: 10,
        inCart: 0
    }
];

for (let i = 0; i < carts.length; i++) { //0-3
    carts[i].addEventListener('click', () => { //add on click
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers); //convert the string into a number
    if (productNumbers) { //if its numbers in local storage
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    console.log("My cartItems are", cartItems);

    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));

}

function totalCost(product) {

    //console.log("products price is", product.price);
    let cartCost = localStorage.getItem('totalCost');
    console.log("My cartCost is", cartCost);

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }

}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let cartCost = localStorage.getItem('totalCost');
    console.log("My cartCost is", cartCost);
    if (cartItems) {
        let productContainer = document.querySelector(".products");
        if (cartItems && productContainer) {
            productContainer.innerHTML = '';
            Object.values(cartItems).map(item => {
                productContainer.innerHTML += `
                <div class="product">
                <img src="./resources/img/${item.tag}.jpg">
                <span>${item.name}</span>
             
             
             <div class="price">$${item.price},00</div>
             <div class="quantity">
            
             <span>${item.inCart}</span>
            
             </div >
             <div class ="total">
             $${item.inCart * item.price},00
             </div>`
            });
            productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Basket total: 
                </h4>
                <h4 class="basketTotal">
                    $${cartCost},00
                </h4>
            `
        }
    }
}
displayCart();
onLoadCartNumbers();
//if we have numbers in the local storage