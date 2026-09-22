/* =====================================================
   PROFILE PAGE
   Next Vork
===================================================== */


/* ================= CHECK LOGIN ================= */

const currentUserData = localStorage.getItem("nextVorkCurrentUser");

if (!currentUserData) {
    window.location.href = "login.html";
}


/* ================= GET CURRENT USER ================= */

const currentUser = JSON.parse(currentUserData);


/* ================= ELEMENTS ================= */

const profileForm = document.getElementById("profileForm");

const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const customerIdInput = document.getElementById("customerId");

const sidebarName = document.getElementById("sidebarName");
const sidebarPhone = document.getElementById("sidebarPhone");
const profileAvatar = document.getElementById("profileAvatar");

const accountCreated = document.getElementById("accountCreated");

const profileMessage = document.getElementById("profileMessage");

const cancelBtn = document.getElementById("cancelBtn");
const logoutBtn = document.getElementById("logoutBtn");


/* ================= DISPLAY USER ================= */

function loadProfile() {

    const name =
        currentUser.name ||
        "Customer";

    const phone =
        currentUser.phone ||
        "";

    const customerId =
        currentUser.customerId ||
        currentUser.id ||
        "CUS001";


    /* Form */

    nameInput.value = name;

    phoneInput.value = phone;

    customerIdInput.value = customerId;


    /* Sidebar */

    sidebarName.textContent = name;

    sidebarPhone.textContent =
        phone
            ? "+91 " + phone
            : "Mobile number not available";


    /* Avatar */

    profileAvatar.textContent =
        name.charAt(0).toUpperCase();


    /* Account Created */

    if (currentUser.createdAt) {

        const createdDate =
            new Date(currentUser.createdAt);

        accountCreated.textContent =
            createdDate.toLocaleDateString(
                "en-IN",
                {
                    day: "2-digit",
                    month: "short",
                    year: "numeric"
                }
            );

    } else {

        accountCreated.textContent =
            "Recently";

    }
}


/* ================= LOAD PROFILE ================= */

loadProfile();


/* ================= SHOW MESSAGE ================= */

function showMessage(message, type) {

    profileMessage.textContent = message;

    profileMessage.className =
        "profile-message " + type;

}


/* ================= HIDE MESSAGE ================= */

function hideMessage() {

    profileMessage.textContent = "";

    profileMessage.className =
        "profile-message";

}


/* ================= SAVE PROFILE ================= */

profileForm.addEventListener("submit", function(event) {

    event.preventDefault();

    hideMessage();


    const updatedName =
        nameInput.value.trim();

    const updatedPhone =
        phoneInput.value.trim();


    /* ================= VALIDATE NAME ================= */

    if (updatedName.length < 2) {

        showMessage(
            "Please enter a valid name.",
            "error"
        );

        return;
    }


    /* ================= VALIDATE PHONE ================= */

    if (!/^[0-9]{10}$/.test(updatedPhone)) {

        showMessage(
            "Please enter a valid 10-digit mobile number.",
            "error"
        );

        return;
    }


    /* ================= UPDATE CURRENT USER ================= */

    currentUser.name =
        updatedName;

    currentUser.phone =
        updatedPhone;


    /* ================= SAVE CURRENT USER ================= */

    localStorage.setItem(
        "nextVorkCurrentUser",
        JSON.stringify(currentUser)
    );


    /* ================= UPDATE USERS LIST ================= */

    let users = JSON.parse(
        localStorage.getItem("nextVorkUsers") || "[]"
    );


    const currentCustomerId =
        currentUser.customerId ||
        currentUser.id ||
        "";


    let userUpdated = false;


    users = users.map(function(user) {

        const userCustomerId =
            user.customerId ||
            user.id ||
            "";


        if (
            currentCustomerId &&
            userCustomerId === currentCustomerId
        ) {

            user.name =
                updatedName;

            user.phone =
                updatedPhone;

            userUpdated = true;
        }


        return user;

    });


    /* ================= FALLBACK ================= */

    if (!userUpdated && currentUser.phone) {

        users = users.map(function(user) {

            if (user.phone === currentUser.phone) {

                user.name =
                    updatedName;

                user.phone =
                    updatedPhone;
            }

            return user;

        });

    }


    /* ================= SAVE USERS ================= */

    localStorage.setItem(
        "nextVorkUsers",
        JSON.stringify(users)
    );


    /* ================= UPDATE UI ================= */

    sidebarName.textContent =
        updatedName;

    sidebarPhone.textContent =
        "+91 " + updatedPhone;

    profileAvatar.textContent =
        updatedName.charAt(0).toUpperCase();


    /* ================= SUCCESS ================= */

    showMessage(
        "Profile updated successfully.",
        "success"
    );


    setTimeout(function() {

        hideMessage();

    }, 3000);

});


/* ================= CANCEL ================= */

cancelBtn.addEventListener("click", function() {

    loadProfile();

    hideMessage();

});


/* ================= LOGOUT ================= */

logoutBtn.addEventListener("click", function() {

    localStorage.removeItem(
        "nextVorkCurrentUser"
    );

    window.location.href =
        "login.html";

});