// Pure Lilac Beauty JavaScript

// Welcome message
console.log("Welcome to Pure Lilac Beauty");

// ----------------------------
// Add to Basket
// ----------------------------

// Get basket from localStorage or create an empty one
let basket = JSON.parse(localStorage.getItem("basket")) || [];

// Find all Add to Basket buttons
let addButtons = document.querySelectorAll(".add-to-basket");

// Add product when button is clicked
addButtons.forEach(function(button){

    button.addEventListener("click", function(){

        let product = {
            name: button.dataset.name,
            price: button.dataset.price,
            image: button.dataset.image
        };

        basket.push(product);

        // Save basket
        localStorage.setItem("basket", JSON.stringify(basket));

        alert(product.name + " has been added to your basket!");

    });

});

// ----------------------------
// Search Bar
// ----------------------------

let searchBar = document.querySelector(".search input");

if(searchBar){

searchBar.addEventListener("keyup", function(){

let search = searchBar.value.toLowerCase();

let products = document.querySelectorAll(".product-card");

products.forEach(function(product){

let name = product.querySelector("h3").textContent.toLowerCase();

if(name.includes(search)){

product.style.display="block";

}

else{

product.style.display="none";

}

});

});

}

// ----------------------------
// Hamburger Menu
// ----------------------------

let menu=document.querySelector(".icons span:last-child");

let nav=document.querySelector("nav");

if(menu){

menu.addEventListener("click",function(){

if(nav.style.display=="block"){

nav.style.display="none";

}

else{

nav.style.display="block";

}

});

}

// ----------------------------
// Display Basket
// ----------------------------

let basketContainer = document.querySelector(".basket-items");

if(basketContainer){

    basket = JSON.parse(localStorage.getItem("basket")) || [];

    displayBasket();

}

function displayBasket(){

    basketContainer.innerHTML = "";

    if(basket.length === 0){

        basketContainer.innerHTML = "<p>Your basket is empty.</p>";
        return;

    }

    basket.forEach(function(product, index){

        basketContainer.innerHTML += `

        <div class="basket-item">

            <img src="${product.image}" alt="${product.name}" width="120">

            <div>

                <h3>${product.name}</h3>

                <p>£${product.price}</p>

                <button class="remove-btn" onclick="removeItem(${index})">
                    Remove
                </button>

            </div>

        </div>

        `;

    });

}

function removeItem(index){

    basket.splice(index, 1);

    localStorage.setItem("basket", JSON.stringify(basket));

    displayBasket();

}
// Set base font size
var baseSize = 16;

// Make text smaller
function smallerText() {
    if (baseSize > 12) { // Don't make it too small!
        baseSize = baseSize - 2;
        document.body.style.fontSize = baseSize + "px";
    }
}

// Make text larger
function largerText() {
    if (baseSize < 24) { // Don't make it too big!
        baseSize = baseSize + 2;
        document.body.style.fontSize = baseSize + "px";
    }
}

// Reset to original size
function resetText() {
    baseSize = 16;
    document.body.style.fontSize = baseSize + "px";
}