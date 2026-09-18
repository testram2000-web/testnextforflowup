/* =====================================================
   NEXT VORK - MY BOOKINGS
   ===================================================== */


/* ================= LOGIN CHECK ================= */

const currentUser = JSON.parse(
    localStorage.getItem("nextVorkCurrentUser")
);

if (!currentUser) {
    window.location.href = "login.html";
}


/* ================= USER NAME ================= */

const navUserName = document.getElementById("navUserName");

if (currentUser && navUserName) {
    navUserName.textContent =
        `Hi, ${currentUser.name || "Customer"}`;
}


/* ================= DOM ELEMENTS ================= */

const bookingsList =
    document.getElementById("bookingsList");

const emptyState =
    document.getElementById("emptyState");

const totalBookings =
    document.getElementById("totalBookings");

const upcomingBookings =
    document.getElementById("upcomingBookings");

const completedBookings =
    document.getElementById("completedBookings");

const bookingTabs =
    document.querySelectorAll(".booking-tab");


/* ================= GET BOOKINGS ================= */

let bookings = JSON.parse(
    localStorage.getItem("nextVorkBookings") || "[]"
);


/* ================= FALLBACK ================= */

/*
   If nextVorkBookings is empty but a pending booking
   exists, use it as a fallback.

   This helps during development when old localStorage
   data was created before the bookings array was added.
*/

if (
    bookings.length === 0 &&
    localStorage.getItem("nextVorkPendingBooking")
) {

    const pendingBooking = JSON.parse(
        localStorage.getItem("nextVorkPendingBooking")
    );

    if (pendingBooking) {

        bookings = [pendingBooking];

        localStorage.setItem(
            "nextVorkBookings",
            JSON.stringify(bookings)
        );
    }
}


/* ================= FILTER ================= */

let currentFilter = "all";


/* ================= DATE HELPER ================= */

function formatDate(dateValue) {

    if (!dateValue) {
        return "Not selected";
    }

    const date = new Date(dateValue);

    if (isNaN(date.getTime())) {
        return dateValue;
    }

    return date.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
}


/* ================= STATUS ================= */

function getStatusClass(status) {

    const normalizedStatus =
        String(status || "").toLowerCase();

    if (normalizedStatus.includes("complete")) {
        return "status-completed";
    }

    if (normalizedStatus.includes("cancel")) {
        return "status-cancelled";
    }

    if (normalizedStatus.includes("pending")) {
        return "status-pending";
    }

    return "status-confirmed";
}


/* ================= BOOKING CATEGORY ================= */

function getBookingCategory(booking) {

    const status =
        String(booking.status || "").toLowerCase();

    if (status.includes("cancel")) {
        return "cancelled";
    }

    if (status.includes("complete")) {
        return "completed";
    }

    return "upcoming";
}


/* ================= UPDATE SUMMARY ================= */

function updateSummary() {

    const total = bookings.length;

    const upcoming = bookings.filter(
        booking => getBookingCategory(booking) === "upcoming"
    ).length;

    const completed = bookings.filter(
        booking => getBookingCategory(booking) === "completed"
    ).length;


    totalBookings.textContent = total;
    upcomingBookings.textContent = upcoming;
    completedBookings.textContent = completed;
}


/* ================= FILTER BOOKINGS ================= */

function getFilteredBookings() {

    if (currentFilter === "all") {
        return bookings;
    }

    return bookings.filter(
        booking =>
            getBookingCategory(booking) === currentFilter
    );
}


/* ================= RENDER BOOKINGS ================= */

function renderBookings() {

    const filteredBookings =
        getFilteredBookings();

    bookingsList.innerHTML = "";


    /* No bookings */

    if (filteredBookings.length === 0) {

        emptyState.style.display = "block";

        return;
    }


    emptyState.style.display = "none";


    filteredBookings.forEach(booking => {

        const card =
            document.createElement("div");

        card.className = "booking-card";


        /* ================= LEFT ================= */

        const left =
            document.createElement("div");

        left.className = "booking-left";


        /* Top */

        const top =
            document.createElement("div");

        top.className = "booking-top";


        const titleArea =
            document.createElement("div");


        const bookingId =
            document.createElement("div");

        bookingId.className = "booking-id";

        bookingId.textContent =
            `Booking ID: ${booking.bookingId || "N/A"}`;


        const serviceName =
            document.createElement("h2");

        serviceName.className = "booking-service";

        serviceName.textContent =
            booking.serviceName || "Service";


        titleArea.appendChild(bookingId);
        titleArea.appendChild(serviceName);


        /* Status */

        const status =
            document.createElement("span");

        status.className =
            `status-badge ${getStatusClass(booking.status)}`;

        status.textContent =
            booking.status || "Confirmed";


        top.appendChild(titleArea);
        top.appendChild(status);


        /* ================= DETAILS ================= */

        const details =
            document.createElement("div");

        details.className = "booking-details";


        /* Professional */

        details.appendChild(
            createDetail(
                "fa-user-tie",
                "Professional",
                booking.professionalName || "Not available"
            )
        );


        /* Date */

        details.appendChild(
            createDetail(
                "fa-calendar",
                "Service Date",
                formatDate(booking.date)
            )
        );


        /* Time */

        details.appendChild(
            createDetail(
                "fa-clock",
                "Service Time",
                booking.time || "Not selected"
            )
        );


        /* Location */

        details.appendChild(
            createDetail(
                "fa-location-dot",
                "Location",
                booking.city ||
                booking.serviceLocation ||
                "Not available"
            )
        );


        left.appendChild(top);
        left.appendChild(details);


        /* ================= RIGHT ================= */

        const right =
            document.createElement("div");

        right.className = "booking-right";


        const priceArea =
            document.createElement("div");


        const priceLabel =
            document.createElement("div");

        priceLabel.className =
            "booking-price-label";

        priceLabel.textContent =
            "Total Amount";


        const price =
            document.createElement("div");

        price.className =
            "booking-price";

        price.textContent =
            formatPrice(
                booking.amount ||
                booking.servicePrice ||
                0
            );


        priceArea.appendChild(priceLabel);
        priceArea.appendChild(price);


        /* View Button */

        const viewButton =
            document.createElement("a");

        viewButton.className =
            "view-btn";

        viewButton.href =
            `booking-details.html?id=${encodeURIComponent(
                booking.bookingId || ""
            )}`;

        viewButton.innerHTML =
            `
                View Details
                <i class="fa-solid fa-arrow-right"></i>
            `;


        right.appendChild(priceArea);
        right.appendChild(viewButton);


        /* ================= CARD ================= */

        card.appendChild(left);
        card.appendChild(right);

        bookingsList.appendChild(card);

    });
}


/* ================= CREATE DETAIL ================= */

function createDetail(icon, label, value) {

    const item =
        document.createElement("div");

    item.className = "detail-item";


    item.innerHTML = `
        <i class="fa-solid ${icon}"></i>

        <div>
            <span class="detail-label">
                ${label}
            </span>

            <span class="detail-value">
                ${escapeHTML(value)}
            </span>
        </div>
    `;

    return item;
}


/* ================= PRICE FORMAT ================= */

function formatPrice(value) {

    const number =
        Number(
            String(value)
                .replace(/[^\d.]/g, "")
        );

    if (isNaN(number)) {
        return "₹0";
    }

    return `₹${number.toLocaleString("en-IN")}`;
}


/* ================= ESCAPE HTML ================= */

function escapeHTML(value) {

    const div =
        document.createElement("div");

    div.textContent =
        String(value ?? "");

    return div.innerHTML;
}


/* ================= TAB EVENTS ================= */

bookingTabs.forEach(tab => {

    tab.addEventListener("click", () => {

        bookingTabs.forEach(item => {
            item.classList.remove("active");
        });

        tab.classList.add("active");

        currentFilter =
            tab.dataset.filter;

        renderBookings();

    });

});


/* ================= LOGOUT ================= */

const logoutBtn =
    document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", () => {

        localStorage.removeItem(
            "nextVorkCurrentUser"
        );

        window.location.href =
            "login.html";

    });

}


/* ================= INITIAL LOAD ================= */

updateSummary();
renderBookings();