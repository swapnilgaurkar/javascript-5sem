function generateBill(){

let customer=document.getElementById("customer").value;
let item=document.getElementById("item").value;
let price=Number(document.getElementById("price").value);
let qty=Number(document.getElementById("qty").value);
let discount=Number(document.getElementById("discount").value);
let gst=Number(document.getElementById("gst").value);

if(customer=="" || item=="" || price<=0 || qty<=0){
alert("Please fill all details.");
return;
}

let subtotal=price*qty;
let discountAmount=(subtotal*discount)/100;
let amountAfterDiscount=subtotal-discountAmount;
let gstAmount=(amountAfterDiscount*gst)/100;
let total=amountAfterDiscount+gstAmount;

document.getElementById("cname").innerHTML=customer;
document.getElementById("iname").innerHTML=item;
document.getElementById("iprice").innerHTML=price.toFixed(2);
document.getElementById("iqty").innerHTML=qty;
document.getElementById("subtotal").innerHTML=subtotal.toFixed(2);
document.getElementById("discountAmount").innerHTML=discountAmount.toFixed(2);
document.getElementById("gstAmount").innerHTML=gstAmount.toFixed(2);
document.getElementById("total").innerHTML=total.toFixed(2);

}