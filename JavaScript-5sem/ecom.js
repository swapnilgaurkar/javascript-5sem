let searchBox = document.getElementById("searchBox");
let category = document.getElementById("category");
let productList = document.getElementById("productList");
let errorMessage = document.getElementById("errorMessage");
let clearBtn = document.getElementById("clearBtn");
let searchForm = document.getElementById("searchForm");
let noProducts = document.getElementById("noProducts");
let productCount = document.getElementById("productCount");

let cartBtn = document.getElementById("cartBtn");
let cartCount = document.getElementById("cartCount");
let cartPanel = document.getElementById("cartPanel");
let closeCart = document.getElementById("closeCart");
let overlay = document.getElementById("overlay");
let cartItems = document.getElementById("cartItems");
let emptyCart = document.getElementById("emptyCart");
let cartTotal = document.getElementById("cartTotal");
let clearCart = document.getElementById("clearCart");
let checkoutBtn = document.getElementById("checkoutBtn");


let products = [

    {
        name: "Laptop",
        category: "Electronics",
        price: 55000,
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Macbook%20Air.jpg"
    },

    {
        name: "Headphones",
        category: "Electronics",
        price: 2500,
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Headphones%20on%20white%20background.jpg"
    },

    {
        name: "Smart Watch",
        category: "Accessories",
        price: 4999,
        image: "https://www.idealworld.tv/cdn/shop/files/Smartwatch-in-Zinc-Alloy_8521147_3.jpg?v=1774966851&width=1024"
    },

    {
        name: "T-Shirt",
        category: "Clothing",
        price: 799,
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/ColorbarTee.jpg"
    },

    {
        name: "Jeans",
        category: "Clothing",
        price: 1499,
        image: "https://docs.photoroom.com/~gitbook/image?dpr=3&quality=100&sign=39a66d0&sv=2&url=https%3A%2F%2F2855892273-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F1SYxn7dWbQYsNtUdJE3f%252Fuploads%252FCDcyjHm5wBc8cMfI5Idk%252F819o0UjXJlL._AC_SY879_.png%3Falt%3Dmedia%26token%3D14da31f2-5c6b-486d-a775-54c9145543cf&width=300"
    },

    {
        name: "JavaScript Book",
        category: "Books",
        price: 599,
        image: "https://cdn03.ciceksepeti.com/cicek/kcm28201507-1/XL/eloquent-javascript-a-modern-introduction-to-programming-kcm28201507-1-afa9e691e3a6469bacfbbbfa346a9ded.jpg"
    },

    {
        name: "Programming Book",
        category: "Books",
        price: 699,
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Programming%20language%20textbooks.jpg"
    },

    {
        name: "Backpack",
        category: "Accessories",
        price: 1299,
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Backpack.jpg"
    }

];


let cart = [];


function formatPrice(price) {

    return "₹" + price.toLocaleString("en-IN");

}


function displayProducts(list) {

    productList.innerHTML = "";

    if (list.length == 0) {

        noProducts.style.display = "block";

        productCount.textContent = "0 items";

        return;
    }

    noProducts.style.display = "none";

    productCount.textContent =
        list.length +
        (list.length == 1 ? " item" : " items");


    list.forEach(function(product) {

        let div = document.createElement("div");

        div.className = "product";

        div.innerHTML = `
            <div class="product-visual">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

            </div>

            <div class="product-info">

                <h3>
                    ${product.name}
                </h3>

                <p class="product-description">
                    Premium quality ${product.name}
                    available at an affordable price.
                </p>

                <div class="product-bottom">

                    <span class="price">
                        ${formatPrice(product.price)}
                    </span>

                    <span class="category">
                        ${product.category}
                    </span>

                </div>

                <button class="add-cart">
                    ADD TO CART
                </button>

            </div>
        `;

        productList.appendChild(div);


        let addButton =
            div.querySelector(".add-cart");


        addButton.addEventListener("click", function() {

            addToCart(product);

        });

    });
}


function addToCart(product) {

    let existingProduct = cart.find(function(item) {

        return item.name == product.name;

    });


    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({

            name: product.name,
            category: product.category,
            price: product.price,
            image: product.image,
            quantity: 1

        });

    }


    updateCart();


    openCart();

}


function updateCart() {

    cartItems.innerHTML = "";


    let totalItems = 0;

    let totalPrice = 0;


    cart.forEach(function(item, index) {

        totalItems += item.quantity;

        totalPrice +=
            item.price * item.quantity;


        let div = document.createElement("div");

        div.className = "cart-item";


        div.innerHTML = `

            <div class="cart-item-image">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                >

            </div>


            <div class="cart-item-info">

                <h4>
                    ${item.name}
                </h4>

                <span class="cart-price">
                    ${formatPrice(item.price)}
                </span>


                <div class="quantity">

                    <button class="minus">
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button class="plus">
                        +
                    </button>

                </div>


                <button class="remove-item">
                    Remove
                </button>

            </div>
        `;


        cartItems.appendChild(div);


        let minus =
            div.querySelector(".minus");

        let plus =
            div.querySelector(".plus");

        let remove =
            div.querySelector(".remove-item");


        minus.addEventListener("click", function() {

            decreaseQuantity(index);

        });


        plus.addEventListener("click", function() {

            increaseQuantity(index);

        });


        remove.addEventListener("click", function() {

            removeFromCart(index);

        });

    });


    cartCount.textContent = totalItems;

    cartTotal.textContent =
        formatPrice(totalPrice);


    if (cart.length == 0) {

        emptyCart.style.display = "block";

    } else {

        emptyCart.style.display = "none";

    }

}


function increaseQuantity(index) {

    cart[index].quantity++;

    updateCart();

}


function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }

    updateCart();

}


function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}


function openCart() {

    cartPanel.classList.add("open");

    overlay.classList.add("show");

}


function closeCartPanel() {

    cartPanel.classList.remove("open");

    overlay.classList.remove("show");

}


cartBtn.addEventListener("click", function() {

    openCart();

});


closeCart.addEventListener("click", function() {

    closeCartPanel();

});


overlay.addEventListener("click", function() {

    closeCartPanel();

});


clearCart.addEventListener("click", function() {

    cart = [];

    updateCart();

});


checkoutBtn.addEventListener("click", function() {

    if (cart.length == 0) {

        alert("Your cart is empty.");

        return;
    }

    alert("Order placed successfully!");

    cart = [];

    updateCart();

    closeCartPanel();

});


function validateSearch() {

    let text = searchBox.value.trim();


    if (text == "") {

        errorMessage.textContent =
            "Please enter a product name.";

        return false;
    }


    let pattern = /^[A-Za-z ]+$/;


    if (!pattern.test(text)) {

        errorMessage.textContent =
            "Only letters and spaces are allowed.";

        return false;
    }


    errorMessage.textContent = "";

    return true;

}


function filterProducts() {

    let text =
        searchBox.value.trim().toLowerCase();

    let selectedCategory =
        category.value;


    if (text != "") {

        let pattern = /^[A-Za-z ]+$/;


        if (!pattern.test(text)) {

            errorMessage.textContent =
                "Only letters and spaces are allowed.";

            displayProducts([]);

            return;
        }


        errorMessage.textContent = "";

    }


    let filteredProducts =
        products.filter(function(product) {

            let matchesSearch =
                product.name
                    .toLowerCase()
                    .includes(text);


            let matchesCategory =
                selectedCategory == "All" ||
                product.category == selectedCategory;


            return matchesSearch &&
                   matchesCategory;

        });


    displayProducts(filteredProducts);

}


searchBox.addEventListener("input", function() {

    filterProducts();

});


category.addEventListener("change", function() {

    filterProducts();

});


clearBtn.addEventListener("click", function() {

    searchBox.value = "";

    category.value = "All";

    errorMessage.textContent = "";

    displayProducts(products);

});


searchForm.addEventListener("submit", function(event) {

    event.preventDefault();

    if (validateSearch()) {

        filterProducts();

    }

});


displayProducts(products);

updateCart();