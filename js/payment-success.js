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
       SAVE BOOKING HISTORY
    ========================================= */

    let bookings = JSON.parse(
        localStorage.getItem("nextVorkBookings") || "[]"
    );


    const existingBooking = bookings.some(
        item =>
            item.bookingId === booking.bookingId
    );


    if (!existingBooking) {

        bookings.unshift(booking);

        localStorage.setItem(
            "nextVorkBookings",
            JSON.stringify(bookings)
        );

    }


    /* =========================================
       BOOKING ID
    ========================================= */

    const bookingId =
        document.getElementById("bookingId");

    if (bookingId) {

        bookingId.textContent =
            booking.bookingId || "--";

    }


    /* =========================================
       SERVICE
    ========================================= */

    const serviceName =
        document.getElementById("serviceName");

    if (serviceName) {

        serviceName.textContent =
            booking.service?.serviceName || "--";

    }


    /* =========================================
       PROFESSIONAL
    ========================================= */

    const professionalName =
        document.getElementById("professionalName");

    if (professionalName) {

        professionalName.textContent =
            booking.service?.professionalName || "--";

    }


    /* =========================================
       DATE
    ========================================= */

    const serviceDate =
        document.getElementById("serviceDate");


    if (
        serviceDate &&
        booking.schedule?.date
    ) {

        const date =
            new Date(
                booking.schedule.date +
                "T00:00:00"
            );


        serviceDate.textContent =
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

    const serviceTime =
        document.getElementById("serviceTime");

    if (serviceTime) {

        serviceTime.textContent =
            booking.schedule?.time || "--";

    }


    /* =========================================
       LOCATION
    ========================================= */

    const city =
        booking.location?.city || "";

    const pincode =
        booking.location?.pincode || "";


    let locationText = city;


    if (pincode) {

        if (locationText) {

            locationText +=
                " - " + pincode;

        } else {

            locationText =
                pincode;

        }

    }


    const serviceLocation =
        document.getElementById(
            "serviceLocation"
        );


    if (serviceLocation) {

        serviceLocation.textContent =
            locationText || "--";

    }


    /* =========================================
       PAYMENT
    ========================================= */

    const amount =
        Number(
            booking.payment?.amount ||
            booking.service?.price ||
            0
        );


    const amountPaid =
        document.getElementById(
            "amountPaid"
        );


    if (amountPaid) {

        amountPaid.textContent =
            "₹" +
            amount.toLocaleString("en-IN");

    }


    const paymentMethod =
        document.getElementById(
            "paymentMethod"
        );


    if (paymentMethod) {

        paymentMethod.textContent =
            booking.payment?.method || "--";

    }


    /* =========================================
       VIEW BOOKING
    ========================================= */

    const viewBookingBtn =
        document.getElementById(
            "viewBookingBtn"
        );


    if (viewBookingBtn) {

        viewBookingBtn.addEventListener(
            "click",
            function () {

                window.location.href =
                    "booking-details.html?id=" +
                    encodeURIComponent(
                        booking.bookingId
                    );

            }
        );

    }


    /* =========================================
       MY BOOKINGS
    ========================================= */

    const myBookingsBtn =
        document.getElementById(
            "myBookingsBtn"
        );


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
        document.getElementById(
            "logoutBtn"
        );


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

});