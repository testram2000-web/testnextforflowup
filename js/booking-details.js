/* =========================================
   BOOKING DETAILS
   Next Vork
========================================= */


/* =========================================
   CHECK LOGIN
========================================= */

const currentUser = JSON.parse(
    localStorage.getItem("nextVorkCurrentUser")
);

if (!currentUser) {

    window.location.href = "login.html";

}


/* =========================================
   HELPER FUNCTIONS
========================================= */

function getElement(id) {
    return document.getElementById(id);
}


function escapeHTML(value) {

    if (value === null || value === undefined) {
        return "";
    }

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function formatPrice(value) {

    const amount = Number(value || 0);

    return "₹" + amount.toLocaleString("en-IN");
}


function formatDate(dateValue) {

    if (!dateValue) {
        return "--";
    }

    const date = new Date(dateValue);

    if (Number.isNaN(date.getTime())) {
        return dateValue;
    }

    return date.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
}


/* =========================================
   GET BOOKING ID FROM URL
========================================= */

const params = new URLSearchParams(
    window.location.search
);

const bookingId = params.get("id");


/* =========================================
   LOAD BOOKINGS
========================================= */

let bookings = [];

try {

    bookings = JSON.parse(
        localStorage.getItem("nextVorkBookings") || "[]"
    );

} catch (error) {

    bookings = [];

}


/* =========================================
   FIND BOOKING
========================================= */

const booking = bookings.find(
    item => item.bookingId === bookingId
);


/* =========================================
   IF BOOKING NOT FOUND
========================================= */

if (!booking) {

    alert("Booking details not found.");

    window.location.href = "my-bookings.html";

}


/* =========================================
   NAV USER
========================================= */

if (currentUser) {

    const navUser = getElement("navUser");

    if (navUser) {

        navUser.textContent =
            "Hello, " + (currentUser.name || "Customer");

    }

}


/* =========================================
   BOOKING BASIC DETAILS
========================================= */

getElement("bookingId").textContent =
    booking.bookingId || "--";


/* =========================================
   STATUS
========================================= */

const bookingStatus =
    booking.status || "Pending";

getElement("bookingStatus").textContent =
    bookingStatus;


const statusMessage =
    getElement("statusMessage");


switch (bookingStatus.toLowerCase()) {

    case "pending":

        statusMessage.textContent =
            "Your booking request is waiting for confirmation.";

        break;


    case "confirmed":

        statusMessage.textContent =
            "Your booking has been confirmed successfully.";

        break;


    case "professional assigned":

        statusMessage.textContent =
            "A professional has been assigned to your booking.";

        break;


    case "on the way":

        statusMessage.textContent =
            "Your professional is on the way to the service location.";

        break;


    case "service started":

        statusMessage.textContent =
            "Your service has started.";

        break;


    case "service completed":

        statusMessage.textContent =
            "Your service has been completed.";

        break;


    case "cancelled":

        statusMessage.textContent =
            "This booking has been cancelled.";

        break;


    default:

        statusMessage.textContent =
            "Your booking information is shown below.";

}


/* =========================================
   SERVICE DETAILS
========================================= */

const service = booking.service || {};

const professional =
    booking.professional || {};

const category =
    booking.category || {};

const schedule =
    booking.schedule || {};

const location =
    booking.location || {};

const payment =
    booking.payment || {};


getElement("serviceName").textContent =
    service.serviceName || "--";


getElement("categoryName").textContent =
    category.categoryName || "--";


getElement("professionalName").textContent =
    professional.professionalName || "--";


getElement("serviceDuration").textContent =
    service.duration || "--";


getElement("priceType").textContent =
    service.priceType || "--";


getElement("servicePrice").textContent =
    formatPrice(service.price);


/* =========================================
   SCHEDULE
========================================= */

getElement("serviceDate").textContent =
    formatDate(schedule.date);


getElement("serviceTime").textContent =
    schedule.time || "--";


/* =========================================
   LOCATION
========================================= */

getElement("locationAddress").textContent =
    location.address || "Service location not provided";


getElement("locationCity").textContent =
    location.city || "--";


getElement("locationPincode").textContent =
    location.pincode || "--";


/* =========================================
   WORK DETAILS
========================================= */

getElement("workDetails").textContent =
    booking.workDetails ||
    "No additional work details provided.";


/* =========================================
   PAYMENT DETAILS
========================================= */

const paymentStatus =
    payment.status || "Pending";


getElement("paymentStatus").textContent =
    paymentStatus;


getElement("paymentMethod").textContent =
    payment.method || "--";


getElement("paymentAmount").textContent =
    formatPrice(payment.amount);


/* =========================================
   SIDEBAR PROFESSIONAL
========================================= */

getElement("sidebarProfessionalName").textContent =
    professional.professionalName || "--";


/*
    Current booking object stores professional name.

    Profession may not always be present in the
    booking object, so we use category as fallback.
*/

getElement("sidebarProfessionalProfession").textContent =
    professional.professionalProfession ||
    category.categoryName ||
    "Construction Professional";


/* =========================================
   SIDEBAR AMOUNT
========================================= */

getElement("sidebarAmount").textContent =
    formatPrice(payment.amount || service.price);


getElement("sidebarPaymentStatus").textContent =
    paymentStatus;


/* =========================================
   VIEW PROFESSIONAL
========================================= */

const viewProfessionalBtn =
    getElement("viewProfessionalBtn");


if (viewProfessionalBtn) {

    viewProfessionalBtn.addEventListener(
        "click",
        function () {

            const professionalId =
                professional.professionalId;

            if (!professionalId) {

                alert("Professional information is unavailable.");

                return;
            }

            window.location.href =
                "professional-profile.html?id=" +
                encodeURIComponent(professionalId);

        }
    );

}


/* =========================================
   TRACK SERVICE
========================================= */

const liveStatusBtn =
    getElement("liveStatusBtn");


if (liveStatusBtn) {

    liveStatusBtn.addEventListener(
        "click",
        function () {

            if (!booking.bookingId) {

                alert("Booking ID is missing.");

                return;
            }

            window.location.href =
                "live-status.html?id=" +
                encodeURIComponent(booking.bookingId);

        }
    );

}


/* =========================================
   REVIEW
========================================= */

const reviewBtn =
    getElement("reviewBtn");


if (reviewBtn) {

    reviewBtn.addEventListener(
        "click",
        function () {

            if (!booking.bookingId) {

                alert("Booking ID is missing.");

                return;
            }

            window.location.href =
                "review.html?id=" +
                encodeURIComponent(booking.bookingId);

        }
    );

}


/* =========================================
   MY BOOKINGS
========================================= */

const myBookingsBtn =
    getElement("myBookingsBtn");


if (myBookingsBtn) {

    myBookingsBtn.addEventListener(
        "click",
        function () {

            window.location.href =
                "my-bookings.html";

        }
    );

}


/* =========================================
   LOGOUT
========================================= */

const logoutBtn =
    getElement("logoutBtn");


if (logoutBtn) {

    logoutBtn.addEventListener(
        "click",
        function () {

            localStorage.removeItem(
                "nextVorkCurrentUser"
            );

            window.location.href =
                "login.html";

        }
    );

}