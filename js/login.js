/* =========================================
   NEXT VORK - LOGIN / REGISTER
   Demo Authentication
   ========================================= */


/* =========================================
   CONSTANTS
   ========================================= */

const USERS_KEY = "nextVorkUsers";
const CURRENT_USER_KEY = "nextVorkCurrentUser";

let currentOtp = null;
let otpMobile = null;

let resendTimer = null;


/* =========================================
   PAGE ELEMENTS
   ========================================= */

const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");

const loginSection = document.getElementById("loginSection");
const registerSection = document.getElementById("registerSection");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

const loginMobile = document.getElementById("loginMobile");

const registerName = document.getElementById("registerName");
const registerMobile = document.getElementById("registerMobile");

const loginMessage = document.getElementById("loginMessage");
const registerMessage = document.getElementById("registerMessage");

const otpSection = document.getElementById("otpSection");
const otpInput = document.getElementById("otpInput");

const demoOtp = document.getElementById("demoOtp");

const otpMessage = document.getElementById("otpMessage");

const verifyOtpBtn = document.getElementById("verifyOtpBtn");

const resendOtpBtn = document.getElementById("resendOtpBtn");
const resendText = document.getElementById("resendText");


/* =========================================
   LOAD USERS
   ========================================= */

function getUsers() {

    const users = localStorage.getItem(USERS_KEY);

    if (!users) {
        return [];
    }

    try {
        return JSON.parse(users);
    } catch (error) {
        return [];
    }
}


/* =========================================
   SAVE USERS
   ========================================= */

function saveUsers(users) {

    localStorage.setItem(
        USERS_KEY,
        JSON.stringify(users)
    );
}


/* =========================================
   SHOW LOGIN
   ========================================= */

function showLogin() {

    loginTab.classList.add("active");
    registerTab.classList.remove("active");

    loginSection.classList.remove("hidden");
    registerSection.classList.add("hidden");

    clearMessages();
}


/* =========================================
   SHOW REGISTER
   ========================================= */

function showRegister() {

    registerTab.classList.add("active");
    loginTab.classList.remove("active");

    registerSection.classList.remove("hidden");
    loginSection.classList.add("hidden");

    clearMessages();
}


/* =========================================
   CLEAR MESSAGES
   ========================================= */

function clearMessages() {

    loginMessage.textContent = "";
    loginMessage.className = "message";

    registerMessage.textContent = "";
    registerMessage.className = "message";

    otpMessage.textContent = "";
    otpMessage.className = "message";
}


/* =========================================
   SET MESSAGE
   ========================================= */

function setMessage(element, message, type) {

    element.textContent = message;

    element.className = "message " + type;
}


/* =========================================
   CLEAN MOBILE NUMBER
   ========================================= */

function cleanMobile(value) {

    return value
        .replace(/\D/g, "")
        .slice(0, 10);
}


/* =========================================
   MOBILE VALIDATION
   ========================================= */

function isValidMobile(mobile) {

    return /^[6-9]\d{9}$/.test(mobile);
}


/* =========================================
   OTP VALIDATION
   ========================================= */

function isValidOtp(otp) {

    return /^\d{6}$/.test(otp);
}


/* =========================================
   LOGIN
   Existing User → Direct Login
   New User → Register
   ========================================= */

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const mobile = cleanMobile(loginMobile.value);

    loginMobile.value = mobile;

    clearMessages();

    /* Validate mobile */

    if (!isValidMobile(mobile)) {

        setMessage(
            loginMessage,
            "Please enter a valid 10-digit mobile number.",
            "error"
        );

        return;
    }


    /* Get users */

    const users = getUsers();


    /* Find registered user */

    const existingUser = users.find(
        user => user.mobile === mobile
    );


    /* =====================================
       EXISTING CUSTOMER
       No OTP
    ====================================== */

    if (existingUser) {

        localStorage.setItem(
            CURRENT_USER_KEY,
            JSON.stringify(existingUser)
        );


        setMessage(
            loginMessage,
            "Login successful. Redirecting...",
            "success"
        );


        setTimeout(function () {

            window.location.href = "categories.html";

        }, 700);

        return;
    }


    /* =====================================
       NEW CUSTOMER
       ====================================== */

    setMessage(
        loginMessage,
        "Mobile number is not registered. Please create an account first.",
        "error"
    );


    setTimeout(function () {

        showRegister();

        registerMobile.value = mobile;

    }, 700);

});


/* =========================================
   REGISTER
   New User → OTP
   ========================================= */

registerForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = registerName.value.trim();
    const mobile = cleanMobile(registerMobile.value);

    registerMobile.value = mobile;

    clearMessages();


    /* Validate name */

    if (name.length < 2) {

        setMessage(
            registerMessage,
            "Please enter your full name.",
            "error"
        );

        return;
    }


    /* Validate mobile */

    if (!isValidMobile(mobile)) {

        setMessage(
            registerMessage,
            "Please enter a valid 10-digit mobile number.",
            "error"
        );

        return;
    }


    /* Check if already registered */

    const users = getUsers();

    const existingUser = users.find(
        user => user.mobile === mobile
    );


    if (existingUser) {

        setMessage(
            registerMessage,
            "This mobile number is already registered. Please login.",
            "error"
        );

        return;
    }


    /* =====================================
       GENERATE DEMO OTP
    ====================================== */

    currentOtp = generateOtp();

    otpMobile = mobile;


    /* Show OTP */

    demoOtp.textContent = currentOtp;

    otpInput.value = "";

    otpSection.classList.remove("hidden");


    setMessage(
        registerMessage,
        "Demo OTP generated. Please verify your mobile number.",
        "success"
    );


    /* Scroll OTP into view */

    setTimeout(function () {

        otpSection.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });

    }, 100);


    /* Start resend timer */

    startResendTimer();

});


/* =========================================
   GENERATE 6 DIGIT OTP
   ========================================= */

function generateOtp() {

    return Math.floor(
        100000 + Math.random() * 900000
    ).toString();
}


/* =========================================
   VERIFY OTP
   ========================================= */

verifyOtpBtn.addEventListener("click", function () {

    const enteredOtp = otpInput.value.trim();

    otpInput.value = enteredOtp;


    /* Validate OTP */

    if (!isValidOtp(enteredOtp)) {

        setMessage(
            otpMessage,
            "Please enter the 6-digit OTP.",
            "error"
        );

        return;
    }


    /* Check OTP */

    if (enteredOtp !== currentOtp) {

        setMessage(
            otpMessage,
            "Incorrect OTP. Please try again.",
            "error"
        );

        return;
    }


    /* =====================================
       OTP CORRECT
       Create Account
    ====================================== */

    const name = registerName.value.trim();

    const users = getUsers();


    const newUser = {

        id: generateUserId(),

        name: name,

        mobile: otpMobile,

        createdAt: new Date().toISOString()

    };


    users.push(newUser);

    saveUsers(users);


    /* Set current user */

    localStorage.setItem(
        CURRENT_USER_KEY,
        JSON.stringify(newUser)
    );


    /* Success message */

    setMessage(
        otpMessage,
        "Account created successfully. Redirecting...",
        "success"
    );


    /* Disable button */

    verifyOtpBtn.disabled = true;


    /* Redirect */

    setTimeout(function () {

        window.location.href = "categories.html";

    }, 1000);

});


/* =========================================
   GENERATE USER ID
   ========================================= */

function generateUserId() {

    return "CUS-" +
        Date.now().toString().slice(-8);
}


/* =========================================
   RESEND OTP
   ========================================= */

resendOtpBtn.addEventListener("click", function () {

    if (!otpMobile) {
        return;
    }


    /* Generate new OTP */

    currentOtp = generateOtp();

    demoOtp.textContent = currentOtp;

    otpInput.value = "";


    setMessage(
        otpMessage,
        "New demo OTP generated.",
        "success"
    );


    startResendTimer();

});


/* =========================================
   RESEND TIMER
   ========================================= */

function startResendTimer() {

    let seconds = 30;


    resendOtpBtn.disabled = true;

    resendText.textContent =
        "You can resend OTP in " + seconds + "s";


    clearInterval(resendTimer);


    resendTimer = setInterval(function () {

        seconds--;


        if (seconds <= 0) {

            clearInterval(resendTimer);

            resendOtpBtn.disabled = false;

            resendText.textContent =
                "Didn't receive OTP?";

            return;
        }


        resendText.textContent =
            "You can resend OTP in " + seconds + "s";

    }, 1000);

}


/* =========================================
   ONLY NUMBERS FOR MOBILE INPUT
   ========================================= */

loginMobile.addEventListener("input", function () {

    this.value = cleanMobile(this.value);

});


registerMobile.addEventListener("input", function () {

    this.value = cleanMobile(this.value);

});


/* =========================================
   ONLY NUMBERS FOR OTP
   ========================================= */

otpInput.addEventListener("input", function () {

    this.value = this.value
        .replace(/\D/g, "")
        .slice(0, 6);

});


/* =========================================
   ENTER KEY FOR OTP
   ========================================= */

otpInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        event.preventDefault();

        verifyOtpBtn.click();

    }

});


/* =========================================
   OPTIONAL:
   If user is already logged in,
   keep login page clean.
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /*
        We don't automatically redirect here.

        This allows the user to intentionally
        login/register from this page.
    */

});