function validateNumber(){

const input=document
.getElementById("vehicle")
.value
.trim();

const result=document
.getElementById("result");

const regex=/^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/;

if(input===""){

result.className="error";

result.innerHTML=
"⚠ Registration number cannot be blank.";

return;

}

if(regex.test(input)){

result.className="success";

result.innerHTML=
`✓ Success! "${input}" is a valid registration format.`;

}
else{

result.className="error";

result.innerHTML=
`✗ "${input}" is NOT a valid registration format.`;

}

}