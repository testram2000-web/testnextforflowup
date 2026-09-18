/* =========================================
   NEXT VORK - BOOKING PAGE
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

    const userName = document.getElementById("userName");

    if (userName) {
        userName.innerHTML = `
            <i class="fa-solid fa-user"></i>
            ${currentUser.name || "Customer"}
        `;
    }


    /* =========================================
       GET SELECTED SERVICE
    ========================================= */

    const selectedService = JSON.parse(
        localStorage.getItem("nextVorkSelectedService")
    );

    if (!selectedService) {

        alert("No service selected. Please select a service first.");

        window.location.href = "categories.html";

        return;
    }


    /* =========================================
       SERVICE DETAILS
    ========================================= */

    const serviceName = document.getElementById("serviceName");
    const professionalName = document.getElementById("professionalName");
    const serviceDuration = document.getElementById("serviceDuration");
    const professionalLocation =
        document.getElementById("professionalLocation");

    const summaryServiceName =
        document.getElementById("summaryServiceName");

    const summaryProfessional =
        document.getElementById("summaryProfessional");

    const summaryDuration =
        document.getElementById("summaryDuration");

    const summaryLocation =
        document.getElementById("summaryLocation");

    const summaryPrice =
        document.getElementById("summaryPrice");

    const summaryPriceType =
        document.getElementById("summaryPriceType");


    serviceName.textContent =
        selectedService.serviceName || "Selected Service";

    professionalName.textContent =
        selectedService.professionalName || "Professional";

    serviceDuration.textContent =
        selectedService.serviceDuration || "Flexible";

    professionalLocation.textContent =
        selectedService.professionalLocation || "Location not specified";


    summaryServiceName.textContent =
        selectedService.serviceName || "Selected Service";

    summaryProfessional.textContent =
        selectedService.professionalName || "Professional";

    summaryDuration.textContent =
        selectedService.serviceDuration || "Flexible";

    summaryLocation.textContent =
        selectedService.professionalLocation || "Not specified";


    /* =========================================
       PRICE
    ========================================= */

    const price = Number(selectedService.servicePrice || 0);

    summaryPrice.textContent =
        "₹" + price.toLocaleString("en-IN");

    summaryPriceType.textContent =
        selectedService.servicePriceType || "Starting price";


    /* =========================================
       CUSTOMER DETAILS
    ========================================= */

    const fullName =
        document.getElementById("fullName");

    const phone =
        document.getElementById("phone");


    fullName.value =
        currentUser.name || "";

    phone.value =
        currentUser.mobile ||
        currentUser.phone ||
        "";


    /* =========================================
       DATE - PREVENT PAST DATES
    ========================================= */

    const serviceDate =
        document.getElementById("serviceDate");

    const today = new Date();

    const year = today.getFullYear();

    const month =
        String(today.getMonth() + 1).padStart(2, "0");

    const day =
        String(today.getDate()).padStart(2, "0");

    const todayString =
        `${year}-${month}-${day}`;

    serviceDate.min = todayString;


    /* =========================================
       BACK TO SERVICES
    ========================================= */

    const backServices =
        document.getElementById("backServices");

    if (backServices && selectedService.professionalId) {

        backServices.href =
            `professional-services.html?professional=${encodeURIComponent(
                selectedService.professionalId
            )}`;

    }


    /* =========================================
       LOGOUT
    ========================================= */

    const logoutBtn =
        document.getElementById("logoutBtn");

    logoutBtn.addEventListener("click", function () {

        localStorage.removeItem("nextVorkCurrentUser");

        window.location.href = "login.html";

    });


    /* =========================================
       HELPERS
    ========================================= */

    function showError(id, message) {

        const element =
            document.getElementById(id);

        if (element) {
            element.textContent = message;
        }

    }


    function clearErrors() {

        const errors =
            document.querySelectorAll(".error-message");

        errors.forEach(function (error) {
            error.textContent = "";
        });

    }


    /* =========================================
       CONTINUE BUTTON
    ========================================= */

    const continueBtn =
        document.getElementById("continueBtn");


    continueBtn.addEventListener("click", function () {

        clearErrors();


        let isValid = true;


        /* -----------------------------------------
           NAME
        ----------------------------------------- */

        const nameValue =
            fullName.value.trim();

        if (nameValue.length < 2) {

            showError(
                "fullNameError",
                "Please enter your full name."
            );

            isValid = false;
        }


        /* -----------------------------------------
           PHONE
        ----------------------------------------- */

        const phoneValue =
            phone.value.trim();

        const phonePattern =
            /^[6-9]\d{9}$/;

        if (!phonePattern.test(phoneValue)) {

            showError(
                "phoneError",
                "Please enter a valid 10-digit mobile number."
            );

            isValid = false;
        }


        /* -----------------------------------------
           ADDRESS
        ----------------------------------------- */

        const address =
            document
                .getElementById("serviceAddress")
                .value
                .trim();

        if (address.length < 10) {

            showError(
                "addressError",
                "Please enter your complete service address."
            );

            isValid = false;
        }


        /* -----------------------------------------
           PINCODE
        ----------------------------------------- */

        const pincode =
            document
                .getElementById("pincode")
                .value
                .trim();

        if (!/^\d{6}$/.test(pincode)) {

            showError(
                "pincodeError",
                "Please enter a valid 6-digit pincode."
            );

            isValid = false;
        }


        /* -----------------------------------------
           DATE
        ----------------------------------------- */

        const dateValue =
            serviceDate.value;

        if (!dateValue) {

            showError(
                "dateError",
                "Please select a preferred date."
            );

            isValid = false;

        } else if (dateValue < todayString) {

            showError(
                "dateError",
                "Please select today or a future date."
            );

            isValid = false;
        }


        /* -----------------------------------------
           TIME
        ----------------------------------------- */

        const timeValue =
            document
                .getElementById("serviceTime")
                .value;

        if (!timeValue) {

            showError(
                "timeError",
                "Please select a preferred time."
            );

            isValid = false;
        }


        /* -----------------------------------------
           TERMS
        ----------------------------------------- */

        const terms =
            document.getElementById("termsCheckbox");

        if (!terms.checked) {

            showError(
                "termsError",
                "Please accept the booking terms."
            );

            isValid = false;
        }


        /* =========================================
           STOP IF INVALID
        ========================================= */

        if (!isValid) {

            const firstError =
                document.querySelector(
                    ".error-message:not(:empty)"
                );

            if (firstError) {

                firstError.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }

            return;
        }


        /* =========================================
           CREATE BOOKING OBJECT
        ========================================= */

        const bookingId =
            "NV" +
            Date.now().toString().slice(-8);


        const booking = {

            bookingId: bookingId,

            status: "Pending Confirmation",

            createdAt:
                new Date().toISOString(),


            customer: {

                name: nameValue,

                phone: phoneValue

            },


            service: {

                professionalId:
                    selectedService.professionalId,

                professionalName:
                    selectedService.professionalName,

                professionalProfession:
                    selectedService.professionalProfession,

                professionalLocation:
                    selectedService.professionalLocation,

                serviceId:
                    selectedService.serviceId,

                serviceName:
                    selectedService.serviceName,

                price:
                    selectedService.servicePrice,

                priceType:
                    selectedService.servicePriceType,

                duration:
                    selectedService.serviceDuration

            },


            location: {

                address: address,

                city:
                    document
                        .getElementById("city")
                        .value
                        .trim(),

                pincode: pincode

            },


            schedule: {

                date: dateValue,

                time: timeValue

            },


            workDetails:
                document
                    .getElementById("workDetails")
                    .value
                    .trim()

        };


        /* =========================================
           SAVE PENDING BOOKING
        ========================================= */

        localStorage.setItem(
            "nextVorkPendingBooking",
            JSON.stringify(booking)
        );


        /* =========================================
           NEXT PAGE
        ========================================= */

        window.location.href =
            "booking-confirmation.html";

    });

});