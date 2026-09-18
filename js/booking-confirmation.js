/* =========================================
   NEXT VORK
   BOOKING CONFIRMATION
========================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =========================================
       CHECK LOGIN
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
       GET PENDING BOOKING
    ========================================= */

    const booking = JSON.parse(
        localStorage.getItem("nextVorkPendingBooking")
    );


    if (!booking) {

        alert(
            "Booking details not found. Please start the booking again."
        );

        window.location.href = "categories.html";

        return;
    }


    /* =========================================
       BASIC DETAILS
    ========================================= */

    document.getElementById("bookingId").textContent =
        booking.bookingId || "--";


    document.getElementById("serviceName").textContent =
        booking.service?.serviceName || "--";


    document.getElementById("professionalName").textContent =
        booking.service?.professionalName || "--";


    document.getElementById("duration").textContent =
        booking.service?.duration || "--";


    document.getElementById("professionalLocation").textContent =
        booking.service?.professionalLocation || "--";


    /* =========================================
       CUSTOMER
    ========================================= */

    document.getElementById("customerName").textContent =
        booking.customer?.name || "--";


    document.getElementById("customerPhone").textContent =
        booking.customer?.phone || "--";


    /* =========================================
       LOCATION
    ========================================= */

    document.getElementById("serviceAddress").textContent =
        booking.location?.address || "--";


    document.getElementById("serviceCity").textContent =
        booking.location?.city || "--";


    document.getElementById("servicePincode").textContent =
        booking.location?.pincode || "--";


    /* =========================================
       DATE
    ========================================= */

    const dateValue =
        booking.schedule?.date;


    if (dateValue) {

        const date =
            new Date(dateValue + "T00:00:00");


        const formattedDate =
            date.toLocaleDateString(
                "en-IN",
                {
                    day: "2-digit",
                    month: "short",
                    year: "numeric"
                }
            );


        document.getElementById("serviceDate").textContent =
            formattedDate;

    } else {

        document.getElementById("serviceDate").textContent =
            "--";

    }


    /* =========================================
       TIME
    ========================================= */

    document.getElementById("serviceTime").textContent =
        booking.schedule?.time || "--";


    /* =========================================
       WORK DETAILS
    ========================================= */

    const workDetails =
        document.getElementById("workDetails");


    if (
        booking.workDetails &&
        booking.workDetails.trim() !== ""
    ) {

        workDetails.textContent =
            booking.workDetails;

    } else {

        workDetails.textContent =
            "No additional requirements provided.";

    }


    /* =========================================
       PRICE
    ========================================= */

    const price =
        Number(booking.service?.price || 0);


    const formattedPrice =
        "₹" + price.toLocaleString("en-IN");


    document.getElementById("servicePrice").textContent =
        formattedPrice;


    document.getElementById("totalPrice").textContent =
        formattedPrice;


    document.getElementById("priceType").textContent =
        booking.service?.priceType || "Starting price";


    document.getElementById("summaryService").textContent =
        booking.service?.serviceName || "--";


    /* =========================================
       BACK / EDIT BOOKING
    ========================================= */

    document
        .getElementById("backBtn")
        .addEventListener("click", function () {

            window.location.href =
                `booking.html?professional=${encodeURIComponent(
                    booking.service.professionalId
                )}&service=${encodeURIComponent(
                    booking.service.serviceId
                )}`;

        });


    /* =========================================
       CONFIRM & PAYMENT
    ========================================= */

    document
        .getElementById("confirmBtn")
        .addEventListener("click", function () {


            /* -----------------------------------------
               UPDATE STATUS
            ----------------------------------------- */

            booking.status =
                "Awaiting Payment";


            booking.confirmedAt =
                new Date().toISOString();


            /* -----------------------------------------
               SAVE AGAIN
            ----------------------------------------- */

            localStorage.setItem(
                "nextVorkPendingBooking",
                JSON.stringify(booking)
            );


            /* -----------------------------------------
               GO TO PAYMENT
            ----------------------------------------- */

            window.location.href =
                "payment.html";

        });


    /* =========================================
       LOGOUT
    ========================================= */

    document
        .getElementById("logoutBtn")
        .addEventListener("click", function () {

            localStorage.removeItem(
                "nextVorkCurrentUser"
            );

            window.location.href =
                "login.html";

        });

});