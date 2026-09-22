const addBtn = document.getElementById("addBtn");
const cartBody = document.getElementById("cartBody");

let cart = [];

addBtn.addEventListener("click", () => {

    const name = document.getElementById("name").value.trim();
    const price = parseFloat(document.getElementById("price").value);
    const qty = parseInt(document.getElementById("qty").value);

    if(name === "" || isNaN(price) || isNaN(qty)){
        alert("Please enter valid product details.");
        return;
    }

    cart.push({
        name,
        price,
        qty
    });

    document.getElementById("name").value="";
    document.getElementById("price").value="";
    document.getElementById("qty").value=1;

    displayCart();
});

function displayCart(){

    cartBody.innerHTML="";

    let subtotal = 0;

    cart.forEach((item,index)=>{

        const total = item.price * item.qty;
        subtotal += total;

        cartBody.innerHTML += `
        <tr>
            <td>${item.name}</td>
            <td>₹${item.price.toFixed(2)}</td>
            <td>${item.qty}</td>
            <td>₹${total.toFixed(2)}</td>
            <td>
                <button class="remove" onclick="removeItem(${index})">
                    Remove
                </button>
            </td>
        </tr>
        `;
    });

    const tax = subtotal * 0.10;
    const grand = subtotal + tax;

    document.getElementById("subtotal").textContent = `₹${subtotal.toFixed(2)}`;
    document.getElementById("tax").textContent = `₹${tax.toFixed(2)}`;
    document.getElementById("grand").textContent = `₹${grand.toFixed(2)}`;
}

function removeItem(index){
    cart.splice(index,1);
    displayCart();
}