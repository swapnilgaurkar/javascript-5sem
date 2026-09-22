let day = document.getElementById("day");
let year = document.getElementById("year");

for (let i = 1; i <= 31; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    day.appendChild(option);
}

for (let i = 2026; i >= 1950; i--) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    year.appendChild(option);
}

let fields = document.querySelectorAll("input, select");

fields.forEach(function(field) {

    field.addEventListener("focus", function() {
        field.style.backgroundColor = "#f5f6ff";
    });

    field.addEventListener("change", function() {
        validateField(field);
    });

});

function validateField(field) {

    let value = field.value.trim();

    if (field.type === "checkbox") {
        if (field.checked) {
            field.parentElement.style.color = "green";
        } else {
            field.parentElement.style.color = "red";
        }
        return;
    }

    if (field.id === "email") {

        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (emailPattern.test(value)) {
            field.style.backgroundColor = "#eaffea";
        } else {
            field.style.backgroundColor = "#ffeaea";
        }

        return;
    }

    if (field.id === "mobile") {

        let mobilePattern = /^[6-9][0-9]{9}$/;

        if (mobilePattern.test(value)) {
            field.style.backgroundColor = "#eaffea";
        } else {
            field.style.backgroundColor = "#ffeaea";
        }

        return;
    }

    if (field.id === "website") {

        if (value === "") {
            field.style.backgroundColor = "white";
            return;
        }

        let websitePattern = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;

        if (websitePattern.test(value)) {
            field.style.backgroundColor = "#eaffea";
        } else {
            field.style.backgroundColor = "#ffeaea";
        }

        return;
    }

    if (field.id === "password") {

        if (value.length >= 6) {
            field.style.backgroundColor = "#eaffea";
        } else {
            field.style.backgroundColor = "#ffeaea";
        }

        return;
    }

    if (field.id === "repassword") {

        let password = document.getElementById("password").value;

        if (value !== "" && value === password) {
            field.style.backgroundColor = "#eaffea";
        } else {
            field.style.backgroundColor = "#ffeaea";
        }

        return;
    }

    if (value === "") {
        field.style.backgroundColor = "#ffeaea";
    } else {
        field.style.backgroundColor = "#eaffea";
    }
}


document.getElementById("studentForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let firstname = document.getElementById("firstname").value.trim();
    let lastname = document.getElementById("lastname").value.trim();

    let dayValue = document.getElementById("day").value;
    let monthValue = document.getElementById("month").value;
    let yearValue = document.getElementById("year").value;

    let gender = document.getElementById("gender").value;

    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();

    let state = document.getElementById("state").value;
    let city = document.getElementById("city").value.trim();

    let username = document.getElementById("username").value.trim();

    let password = document.getElementById("password").value;
    let repassword = document.getElementById("repassword").value;

    let terms = document.getElementById("terms").checked;

    let message = document.getElementById("message");

    if (
        firstname === "" ||
        lastname === "" ||
        dayValue === "" ||
        monthValue === "" ||
        yearValue === "" ||
        gender === "" ||
        email === "" ||
        mobile === "" ||
        state === "" ||
        city === "" ||
        username === "" ||
        password === "" ||
        repassword === ""
    ) {
        message.textContent = "Please fill all mandatory fields.";
        message.style.color = "red";
        return;
    }

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email)) {
        message.textContent = "Please enter a valid email address.";
        message.style.color = "red";
        return;
    }

    let mobilePattern = /^[6-9][0-9]{9}$/;

    if (!mobilePattern.test(mobile)) {
        message.textContent = "Enter a valid 10-digit Indian mobile number.";
        message.style.color = "red";
        return;
    }

    if (password.length < 6) {
        message.textContent = "Password must contain at least 6 characters.";
        message.style.color = "red";
        return;
    }

    if (password !== repassword) {
        message.textContent = "Passwords do not match.";
        message.style.color = "red";
        return;
    }

    if (!terms) {
        message.textContent = "Please agree to the Terms & Conditions.";
        message.style.color = "red";
        return;
    }

    message.textContent = "Student Registration Successful!";
    message.style.color = "green";
});