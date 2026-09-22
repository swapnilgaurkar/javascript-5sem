// ==========================================
// ELEMENTS
// ==========================================

const registerCard =
    document.getElementById("registerCard");

const loginCard =
    document.getElementById("loginCard");

const dashboard =
    document.getElementById("dashboard");


// ==========================================
// PASSWORD RULES
// ==========================================

const passwordInput =
    document.getElementById("registerPassword");


passwordInput.addEventListener("input", function () {

    const password = passwordInput.value;


    updateRule(
        "length",
        password.length >= 8,
        "At least 8 characters"
    );


    updateRule(
        "uppercase",
        /[A-Z]/.test(password),
        "One uppercase letter"
    );


    updateRule(
        "lowercase",
        /[a-z]/.test(password),
        "One lowercase letter"
    );


    updateRule(
        "number",
        /[0-9]/.test(password),
        "One number"
    );


    updateRule(
        "symbol",
        /[^A-Za-z0-9]/.test(password),
        "One special symbol"
    );

});


function updateRule(id, valid, text) {

    const rule =
        document.getElementById(id);

    if (valid) {

        rule.classList.add("valid");

        rule.innerHTML =
            `<span>✓</span>${text}`;

    } else {

        rule.classList.remove("valid");

        rule.innerHTML =
            `<span>○</span>${text}`;

    }

}


// ==========================================
// PASSWORD VISIBILITY
// ==========================================

function togglePassword(id, button) {

    const input =
        document.getElementById(id);


    if (input.type === "password") {

        input.type = "text";

        button.textContent = "🙈";

    } else {

        input.type = "password";

        button.textContent = "👁";

    }

}


// ==========================================
// SWITCH TO LOGIN
// ==========================================

function showLogin() {

    registerCard.classList.add("hidden");

    dashboard.classList.add("hidden");

    loginCard.classList.remove("hidden");

}


// ==========================================
// SWITCH TO REGISTER
// ==========================================

function showRegister() {

    loginCard.classList.add("hidden");

    dashboard.classList.add("hidden");

    registerCard.classList.remove("hidden");

}


// ==========================================
// REGISTER USER
// ==========================================

document
    .getElementById("registerForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();


        const email =
            document
                .getElementById("registerEmail")
                .value
                .trim()
                .toLowerCase();


        const password =
            document
                .getElementById("registerPassword")
                .value;


        const message =
            document.getElementById(
                "registerMessage"
            );


        // Email validation

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            showMessage(
                message,
                "✕ Please enter a valid email address.",
                false
            );

            return;

        }


        // Password validation

        const validPassword =

            password.length >= 8 &&

            /[A-Z]/.test(password) &&

            /[a-z]/.test(password) &&

            /[0-9]/.test(password) &&

            /[^A-Za-z0-9]/.test(password);


        if (!validPassword) {

            showMessage(
                message,
                "✕ Password does not meet all requirements.",
                false
            );

            return;

        }


        // Check if account already exists

        const existingUser =
            localStorage.getItem("registeredUser");


        if (existingUser) {

            const user =
                JSON.parse(existingUser);


            if (user.email === email) {

                showMessage(
                    message,
                    "✕ An account with this email already exists.",
                    false
                );

                return;

            }

        }


        // ==================================
        // SAVE USER IN BROWSER
        // ==================================

        const user = {

            email: email,

            password: password

        };


        localStorage.setItem(
            "registeredUser",
            JSON.stringify(user)
        );


        // Success

        showMessage(
            message,
            "✓ Account created successfully!",
            true
        );


        // Move to login

        setTimeout(function () {

            document
                .getElementById("loginEmail")
                .value = email;

            document
                .getElementById("loginPassword")
                .value = "";

            showLogin();

        }, 1200);

    });


// ==========================================
// LOGIN
// ==========================================

document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();


        const email =
            document
                .getElementById("loginEmail")
                .value
                .trim()
                .toLowerCase();


        const password =
            document
                .getElementById("loginPassword")
                .value;


        const message =
            document.getElementById(
                "loginMessage"
            );


        // Get registered user

        const storedUser =
            localStorage.getItem(
                "registeredUser"
            );


        // No account

        if (!storedUser) {

            showMessage(
                message,
                "✕ No account found. Please register first.",
                false
            );

            return;

        }


        const user =
            JSON.parse(storedUser);


        // Check email

        if (email !== user.email) {

            showMessage(
                message,
                "✕ Account not found with this email.",
                false
            );

            return;

        }


        // ==================================
        // CHECK PASSWORD
        // ==================================

        if (password !== user.password) {

            showMessage(
                message,
                "✕ Incorrect password. Please try again.",
                false
            );

            return;

        }


        // ==================================
        // LOGIN SUCCESS
        // ==================================

        document
            .getElementById("userEmail")
            .textContent = user.email;


        loginCard.classList.add("hidden");

        dashboard.classList.remove("hidden");

    });


// ==========================================
// MESSAGE
// ==========================================

function showMessage(
    element,
    text,
    success
) {

    element.textContent = text;

    element.className =
        success
            ? "message success"
            : "message error";

}


// ==========================================
// LOGOUT
// ==========================================

function logout() {

    dashboard.classList.add("hidden");

    loginCard.classList.remove("hidden");


    document
        .getElementById("loginPassword")
        .value = "";


    document
        .getElementById("loginMessage")
        .textContent = "";

}