/* =========================================
   NEXT VORK
   PAYMENT PAGE
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
            "categories.html";

        return;
    }


    /* =========================================
       DISPLAY BOOKING
    ========================================= */

    document.getElementById("bookingId").textContent =
        booking.bookingId || "--";


    document.getElementById("serviceName").textContent =
        booking.service?.serviceName || "--";


    document.getElementById("professionalName").textContent =
        booking.service?.professionalName || "--";


    document.getElementById("bookingTime").textContent =
        booking.schedule?.time || "--";


    document.getElementById("bookingCity").textContent =
        booking.location?.city || "--";


    /* =========================================
       DATE
    ========================================= */

    if (booking.schedule?.date) {

        const date =
            new Date(
                booking.schedule.date + "T00:00:00"
            );

        document.getElementById("bookingDate").textContent =
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
       PRICE
    ========================================= */

    const amount =
        Number(booking.service?.price || 0);


    const formattedAmount =
        "₹" +
        amount.toLocaleString("en-IN");


    document.getElementById("serviceAmount").textContent =
        formattedAmount;


    document.getElementById("totalAmount").textContent =
        formattedAmount;


    document.getElementById("payAmount").textContent =
        formattedAmount;


    /* =========================================
       PAYMENT ELEMENTS
    ========================================= */

    const paymentOptions =
        document.querySelectorAll(
            'input[name="paymentMethod"]'
        );


    const upiSection =
        document.getElementById("upiSection");


    const cardSection =
        document.getElementById("cardSection");


    /* =========================================
       CHANGE PAYMENT METHOD
    ========================================= */

    paymentOptions.forEach(function (option) {

        option.addEventListener(
            "change",
            function () {

                upiSection.classList.add("hidden");

                cardSection.classList.add("hidden");


                if (this.value === "UPI") {

                    upiSection.classList.remove("hidden");

                }


                if (this.value === "Card") {

                    cardSection.classList.remove("hidden");

                }

            }
        );

    });


    /* =========================================
       CARD NUMBER FORMAT
    ========================================= */

    const cardNumber =
        document.getElementById("cardNumber");


    cardNumber.addEventListener(
        "input",
        function () {

            let value =
                this.value
                    .replace(/\D/g, "")
                    .substring(0, 16);


            value =
                value.replace(
                    /(.{4})/g,
                    "$1 "
                )
                .trim();


            this.value = value;

        }
    );


    /* =========================================
       EXPIRY FORMAT
    ========================================= */

    const expiry =
        document.getElementById("expiry");


    expiry.addEventListener(
        "input",
        function () {

            let value =
                this.value
                    .replace(/\D/g, "")
                    .substring(0, 4);


            if (value.length >= 3) {

                value =
                    value.substring(0, 2) +
                    "/" +
                    value.substring(2);

            }


            this.value = value;

        }
    );


    /* =========================================
       PAY BUTTON
    ========================================= */

    const payBtn =
        document.getElementById("payBtn");


    payBtn.addEventListener(
        "click",
        function () {


            const selectedMethod =
                document.querySelector(
                    'input[name="paymentMethod"]:checked'
                );


            if (!selectedMethod) {

                alert(
                    "Please select a payment method."
                );

                return;
            }


            const method =
                selectedMethod.value;


            /* =====================================
               UPI VALIDATION
            ===================================== */

            if (method === "UPI") {

                const upiId =
                    document
                        .getElementById("upiId")
                        .value
                        .trim();


                const upiPattern =
                    /^[a-zA-Z0-9._-]+@[a-zA-Z]{2,}$/;


                if (!upiPattern.test(upiId)) {

                    document.getElementById(
                        "upiError"
                    ).textContent =
                        "Please enter a valid UPI ID.";

                    return;

                }

                document.getElementById(
                    "upiError"
                ).textContent = "";

            }


            /* =====================================
               CARD VALIDATION
            ===================================== */

            if (method === "Card") {

                const number =
                    cardNumber.value
                        .replace(/\s/g, "");


                const expiryValue =
                    document
                        .getElementById("expiry")
                        .value
                        .trim();


                const cvv =
                    document
                        .getElementById("cvv")
                        .value
                        .trim();


                const cardName =
                    document
                        .getElementById("cardName")
                        .value
                        .trim();


                if (
                    number.length !== 16 ||
                    !/^\d+$/.test(number)
                ) {

                    document.getElementById(
                        "cardError"
                    ).textContent =
                        "Please enter a valid 16-digit card number.";

                    return;

                }


                if (!/^\d{2}\/\d{2}$/.test(expiryValue)) {

                    document.getElementById(
                        "cardError"
                    ).textContent =
                        "Please enter expiry in MM/YY format.";

                    return;

                }


                if (!/^\d{3}$/.test(cvv)) {

                    document.getElementById(
                        "cardError"
                    ).textContent =
                        "Please enter a valid CVV.";

                    return;

                }


                if (cardName.length < 2) {

                    document.getElementById(
                        "cardError"
                    ).textContent =
                        "Please enter cardholder name.";

                    return;

                }


                document.getElementById(
                    "cardError"
                ).textContent = "";

            }


            /* =====================================
               DEMO PAYMENT
            ===================================== */

            payBtn.disabled = true;

            payBtn.innerHTML = `
                <i class="fa-solid fa-spinner fa-spin"></i>
                Processing Payment...
            `;


            setTimeout(function () {


                /* ---------------------------------
                   UPDATE BOOKING
                --------------------------------- */

                booking.status =
                    "Confirmed";


                booking.payment = {

                    status: "Paid",

                    method: method,

                    amount: amount,

                    paidAt:
                        new Date().toISOString()

                };


                booking.confirmedAt =
                    booking.confirmedAt ||
                    new Date().toISOString();


                /* ---------------------------------
                   SAVE PAYMENT
                --------------------------------- */

                localStorage.setItem(
                    "nextVorkPendingBooking",
                    JSON.stringify(booking)
                );


                /* ---------------------------------
                   PAYMENT SUCCESS
                --------------------------------- */

                window.location.href =
                    "payment-success.html";

            }, 1200);

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