function signup(){

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let message = document.getElementById("message");

    if(username==""){
        message.innerHTML="⚠ Username cannot be empty";
        message.style.color="yellow";
    }

    else if(username.length<4){
        message.innerHTML="⚠ Username must contain at least 4 characters";
        message.style.color="yellow";
    }

    else if(email==""){
        message.innerHTML="⚠ Email cannot be empty";
        message.style.color="yellow";
    }

    else if(!email.includes("@") || !email.includes(".")){
        message.innerHTML="⚠ Enter a valid email address";
        message.style.color="yellow";
    }

    else if(password==""){
        message.innerHTML="⚠ Password cannot be empty";
        message.style.color="yellow";
    }

    else if(password.length<8){
        message.innerHTML="⚠ Password must contain at least 8 characters";
        message.style.color="yellow";
    }

    else if(!/[A-Z]/.test(password)){
        message.innerHTML="⚠ Password must contain one Capital Letter";
        message.style.color="yellow";
    }

    else if(!/[a-z]/.test(password)){
        message.innerHTML="⚠ Password must contain one Small Letter";
        message.style.color="yellow";
    }

    else if(!/[0-9]/.test(password)){
        message.innerHTML="⚠ Password must contain one Number";
        message.style.color="yellow";
    }

    else if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)){
        message.innerHTML="⚠ Password must contain one Special Symbol";
        message.style.color="yellow";
    }

    else if(password!=confirmPassword){
        message.innerHTML="⚠ Passwords do not match";
        message.style.color="yellow";
    }

    else{

        message.innerHTML="✅ Account Created Successfully";
        message.style.color="lightgreen";

        // Redirect to login page after 2 seconds
        setTimeout(function(){
            window.location.href="login.html";
        },2000);

    }

}