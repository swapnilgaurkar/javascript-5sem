function showStudent(){

let name=document.getElementById("name").value;
let age=document.getElementById("age").value;
let gender=document.getElementById("gender").value;
let branch=document.getElementById("branch").value;
let prn=document.getElementById("prn").value;

if(name=="" || age=="" || branch=="" || prn==""){
alert("Please fill all details.");
return;
}

document.getElementById("sname").innerHTML=name;
document.getElementById("sage").innerHTML=age;
document.getElementById("sgender").innerHTML=gender;
document.getElementById("sbranch").innerHTML=branch;
document.getElementById("sprn").innerHTML=prn;

}