/* =========================================
   REVIEW PAGE
   Next Vork
========================================= */


/* =========================================
   LOGIN CHECK
========================================= */

const currentUser = JSON.parse(
    localStorage.getItem("nextVorkCurrentUser")
);

if (!currentUser) {

    window.location.href = "login.html";

}


/* =========================================
   HELPERS
========================================= */

function getElement(id) {
    return document.getElementById(id);
}


function formatPrice(value) {

    const amount = Number(value || 0);

    return "₹" + amount.toLocaleString("en-IN");
}


function formatDate(value) {

    if (!value) {
        return "--";
    }

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
        return value;
    }

    return date.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
}


/* =========================================
   GET BOOKING ID
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
   BOOKING NOT FOUND
========================================= */

if (!booking) {

    alert("Booking not found.");

    window.location.href = "my-bookings.html";

}


/* =========================================
   NAV USER
========================================= */

getElement("navUser").textContent =
    "Hello, " + (currentUser.name || "Customer");


/* =========================================
   BOOKING DATA
========================================= */

const service =
    booking.service || {};

const professional =
    booking.professional || {};

const category =
    booking.category || {};

const schedule =
    booking.schedule || {};

const payment =
    booking.payment || {};


/* =========================================
   DISPLAY BOOKING INFORMATION
========================================= */

getElement("bookingId").textContent =
    booking.bookingId || "--";


getElement("serviceName").textContent =
    service.serviceName || "--";


getElement("categoryName").textContent =
    category.categoryName || "--";


getElement("professionalName").textContent =
    professional.professionalName || "--";


getElement("professionalProfession").textContent =
    professional.professionalProfession ||
    category.categoryName ||
    "Construction Professional";


getElement("serviceDate").textContent =
    formatDate(schedule.date);


getElement("paymentAmount").textContent =
    formatPrice(payment.amount || service.price);


/* =========================================
   EXISTING REVIEW CHECK
========================================= */

let reviews = [];

try {

    reviews = JSON.parse(
        localStorage.getItem("nextVorkReviews") || "[]"
    );

} catch (error) {

    reviews = [];

}


const existingReview = reviews.find(
    review => review.bookingId === booking.bookingId
);


if (existingReview) {

    getElement("rating").value =
        existingReview.rating || 0;

    getElement("quality").value =
        existingReview.quality || "";

    getElement("reviewText").value =
        existingReview.reviewText || "";

    getElement("characterCount").textContent =
        (existingReview.reviewText || "").length;

    setRating(
        Number(existingReview.rating || 0)
    );

    setQuality(
        existingReview.quality || ""
    );

    getElement("formMessage").textContent =
        "You have already submitted a review for this booking.";

    getElement("formMessage").classList.add(
        "success"
    );

    getElement("submitReviewBtn").disabled = true;

}


/* =========================================
   STAR RATING
========================================= */

const stars =
    document.querySelectorAll(".star");


stars.forEach(
    function(star) {

        star.addEventListener(
            "click",
            function() {

                const rating =
                    Number(
                        star.dataset.rating
                    );

                setRating(rating);

            }
        );

    }
);


function setRating(rating) {

    getElement("rating").value =
        rating;


    stars.forEach(
        function(star) {

            const starRating =
                Number(
                    star.dataset.rating
                );

            const icon =
                star.querySelector("i");


            if (starRating <= rating) {

                star.classList.add("selected");

                icon.className =
                    "fa-solid fa-star";

            } else {

                star.classList.remove("selected");

                icon.className =
                    "fa-regular fa-star";

            }

        }
    );


    const ratingText =
        getElement("ratingText");


    const ratingMessages = {
        1: "Very Poor",
        2: "Poor",
        3: "Average",
        4: "Good",
        5: "Excellent"
    };


    ratingText.textContent =
        ratingMessages[rating] ||
        "Select a rating";

}


/* =========================================
   QUALITY
========================================= */

const qualityButtons =
    document.querySelectorAll(
        ".quality-btn"
    );


qualityButtons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {

                const quality =
                    button.dataset.quality;

                setQuality(quality);

            }
        );

    }
);


function setQuality(quality) {

    getElement("quality").value =
        quality;


    qualityButtons.forEach(
        function(button) {

            button.classList.remove(
                "selected"
            );

        }
    );


    const selectedButton =
        document.querySelector(
            '.quality-btn[data-quality="' +
            quality +
            '"]'
        );


    if (selectedButton) {

        selectedButton.classList.add(
            "selected"
        );

    }

}


/* =========================================
   CHARACTER COUNT
========================================= */

getElement("reviewText")
    .addEventListener(
        "input",
        function() {

            getElement("characterCount")
                .textContent =
                this.value.length;

        }
    );


/* =========================================
   SUBMIT REVIEW
========================================= */

getElement("submitReviewBtn")
    .addEventListener(
        "click",
        function() {

            const rating =
                Number(
                    getElement("rating").value
                );

            const quality =
                getElement("quality").value;

            const reviewText =
                getElement("reviewText").value.trim();


            /* -------------------------
               VALIDATION
            ------------------------- */

            if (rating === 0) {

                showError(
                    "Please select a rating."
                );

                return;
            }


            if (!quality) {

                showError(
                    "Please select the service quality."
                );

                return;
            }


            if (!reviewText) {

                showError(
                    "Please write a review."
                );

                return;
            }


            if (reviewText.length < 10) {

                showError(
                    "Please write at least 10 characters."
                );

                return;
            }


            /* -------------------------
               CREATE REVIEW
            ------------------------- */

            const newReview = {

                reviewId:
                    "REV-" +
                    Date.now(),

                bookingId:
                    booking.bookingId,

                customer: {

                    customerId:
                        currentUser.customerId ||
                        currentUser.id ||
                        "",

                    name:
                        currentUser.name ||
                        "Customer",

                    phone:
                        currentUser.phone ||
                        ""

                },

                professional: {

                    professionalId:
                        professional.professionalId ||
                        "",

                    professionalName:
                        professional.professionalName ||
                        ""

                },

                service: {

                    serviceId:
                        service.serviceId ||
                        "",

                    serviceName:
                        service.serviceName ||
                        ""

                },

                rating:
                    rating,

                quality:
                    quality,

                reviewText:
                    reviewText,

                createdAt:
                    new Date().toISOString()

            };


            /* -------------------------
               SAVE REVIEW
            ------------------------- */

            reviews.unshift(
                newReview
            );


            localStorage.setItem(
                "nextVorkReviews",
                JSON.stringify(reviews)
            );


            /* -------------------------
               UPDATE BOOKING
            ------------------------- */

            const bookingIndex =
                bookings.findIndex(
                    item =>
                        item.bookingId ===
                        booking.bookingId
                );


            if (bookingIndex !== -1) {

                bookings[bookingIndex].review = {

                    reviewId:
                        newReview.reviewId,

                    rating:
                        rating,

                    quality:
                        quality,

                    reviewText:
                        reviewText,

                    createdAt:
                        newReview.createdAt

                };


                localStorage.setItem(
                    "nextVorkBookings",
                    JSON.stringify(bookings)
                );

            }


            /* -------------------------
               SUCCESS
            ------------------------- */

            const message =
                getElement("formMessage");


            message.textContent =
                "Your review has been submitted successfully.";

            message.className =
                "form-message success";


            getElement("submitReviewBtn")
                .disabled = true;


            /*
                Small delay before going back
                to booking details.
            */

            setTimeout(
                function() {

                    window.location.href =
                        "booking-details.html?id=" +
                        encodeURIComponent(
                            booking.bookingId
                        );

                },
                1200
            );

        }
    );


/* =========================================
   ERROR MESSAGE
========================================= */

function showError(message) {

    const formMessage =
        getElement("formMessage");

    formMessage.textContent =
        message;

    formMessage.className =
        "form-message error";

}


/* =========================================
   LOGOUT
========================================= */

getElement("logoutBtn")
    .addEventListener(
        "click",
        function() {

            localStorage.removeItem(
                "nextVorkCurrentUser"
            );

            window.location.href =
                "login.html";

        }
    );