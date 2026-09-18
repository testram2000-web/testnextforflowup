/* =========================================
   NEXT VORK
   PAYMENT SUCCESS
========================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =========================================
       LOGIN CHECK
    ========================================= */

    const currentUser = JSON.parse(
        localStorage.getItem("nextVorkCurrentUser")
    );

    if (!currentUser) {

        window.location.href = "login.html";

        return;
    }


    /* =========================================
       USER NAME
    ========================================= */

    const userName =
        document.getElementById("userName");

    if (userName) {

        userName.innerHTML = `
            <i class="fa-solid fa-user"></i>
            ${currentUser.name || "Customer"}
        `;

    }


    /* =========================================
       GET BOOKING
    ========================================= */

    const booking = JSON.parse(
        localStorage.getItem("nextVorkPendingBooking")
    );


    if (!booking) {

        alert(
            "Booking information not found."
        );

        window.location.href =
            "my-bookings.html";

        return;
    }


    /* =========================================
       BOOKING ID
    ========================================= */

    document.getElementById("bookingId").textContent =
        booking.bookingId || "--";


    /* =========================================
       SERVICE
    ========================================= */

    document.getElementById("serviceName").textContent =
        booking.service?.serviceName || "--";


    /* =========================================
       PROFESSIONAL
    ========================================= */

    document.getElementById("professionalName").textContent =
        booking.service?.professionalName || "--";


    /* =========================================
       DATE
    ========================================= */

    if (booking.schedule?.date) {

        const date =
            new Date(
                booking.schedule.date + "T00:00:00"
            );


        document.getElementById("serviceDate").textContent =
            date.toLocaleDateString(
                "en-IN",
                {
                    day: "2-digit",
                    month: "short",
                    year: "numeric"
                }
            );

    }


    /* =========================================
       TIME
    ========================================= */

    document.getElementById("serviceTime").textContent =
        booking.schedule?.time || "--";


    /* =========================================
       LOCATION
    ========================================= */

    const city =
        booking.location?.city || "";

    const pincode =
        booking.location?.pincode || "";


    let locationText = city;


    if (pincode) {

        locationText +=
            " - " + pincode;

    }


    document.getElementById(
        "serviceLocation"
    ).textContent =
        locationText || "--";


    /* =========================================
       PAYMENT
    ========================================= */

    const amount =
        Number(
            booking.payment?.amount ||
            booking.service?.price ||
            0
        );


    document.getElementById(
        "amountPaid"
    ).textContent =
        "₹" +
        amount.toLocaleString("en-IN");


    document.getElementById(
        "paymentMethod"
    ).textContent =
        booking.payment?.method || "--";


    /* =========================================
       VIEW BOOKING
    ========================================= */

    document
        .getElementById("viewBookingBtn")
        .addEventListener(
            "click",
            function () {

                /*
                 * Booking details page will read
                 * bookingId from URL.
                 */

                window.location.href =
                    "booking-details.html?id=" +
                    encodeURIComponent(
                        booking.bookingId
                    );

            }
        );


    /* =========================================
       MY BOOKINGS
    ========================================= */

    document
        .getElementById("myBookingsBtn")
        .addEventListener(
            "click",
            function () {

                window.location.href =
                    "my-bookings.html";

            }
        );


    /* =========================================
       LOGOUT
    ========================================= */

    document
        .getElementById("logoutBtn")
        .addEventListener(
            "click",
            function () {

                localStorage.removeItem(
                    "nextVorkCurrentUser"
                );

                window.location.href =
                    "login.html";

            }
        );

});