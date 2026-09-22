/* =====================================================
   NOTIFICATIONS PAGE
   Next Vork
===================================================== */


/* ================= CHECK LOGIN ================= */

const currentUserData =
    localStorage.getItem("nextVorkCurrentUser");

if (!currentUserData) {

    window.location.href =
        "login.html";
}


/* ================= CURRENT USER ================= */

const currentUser =
    JSON.parse(currentUserData);


/* ================= ELEMENTS ================= */

const notificationList =
    document.getElementById("notificationList");

const emptyState =
    document.getElementById("emptyState");

const notificationCount =
    document.getElementById("notificationCount");

const markAllReadBtn =
    document.getElementById("markAllReadBtn");

const logoutBtn =
    document.getElementById("logoutBtn");

const filterButtons =
    document.querySelectorAll(".filter-btn");


/* ================= STORAGE KEY ================= */

const notificationStorageKey =
    "nextVorkNotifications";


/* ================= GET NOTIFICATIONS ================= */

function getNotifications() {

    const storedNotifications =
        JSON.parse(
            localStorage.getItem(
                notificationStorageKey
            ) || "[]"
        );


    /*
        If notifications already exist,
        use them.
    */

    if (storedNotifications.length > 0) {

        return storedNotifications;
    }


    /*
        Demo notifications.
        These will later come from backend.
    */

    const demoNotifications = [

        {
            notificationId: "NOT001",

            type: "booking",

            title: "Booking Confirmed",

            message:
                "Your House Plan Design booking has been confirmed.",

            bookingId: "",

            read: false,

            createdAt:
                new Date().toISOString()
        },


        {
            notificationId: "NOT002",

            type: "payment",

            title: "Payment Successful",

            message:
                "Your payment has been successfully received.",

            bookingId: "",

            read: false,

            createdAt:
                new Date(
                    Date.now() - 60 * 60 * 1000
                ).toISOString()
        },


        {
            notificationId: "NOT003",

            type: "status",

            title: "Service Update",

            message:
                "Your professional is getting ready for the scheduled service.",

            bookingId: "",

            read: true,

            createdAt:
                new Date(
                    Date.now() - 3 * 60 * 60 * 1000
                ).toISOString()
        }

    ];


    localStorage.setItem(
        notificationStorageKey,
        JSON.stringify(demoNotifications)
    );


    return demoNotifications;
}


/* ================= NOTIFICATION DATA ================= */

let notifications =
    getNotifications();


/* ================= CURRENT FILTER ================= */

let currentFilter =
    "all";


/* ================= ICON ================= */

function getNotificationIcon(type) {

    if (type === "booking") {

        return "fa-calendar-check";
    }

    if (type === "payment") {

        return "fa-credit-card";
    }

    if (type === "status") {

        return "fa-truck-fast";
    }

    if (type === "review") {

        return "fa-star";
    }

    return "fa-bell";
}


/* ================= TIME FORMAT ================= */

function getTimeAgo(dateString) {

    const createdDate =
        new Date(dateString);

    const now =
        new Date();

    const difference =
        now - createdDate;


    const minutes =
        Math.floor(
            difference / (1000 * 60)
        );


    if (minutes < 1) {

        return "Just now";
    }


    if (minutes < 60) {

        return minutes + " min ago";
    }


    const hours =
        Math.floor(minutes / 60);


    if (hours < 24) {

        return hours + " hour" +
            (hours > 1 ? "s" : "") +
            " ago";
    }


    const days =
        Math.floor(hours / 24);


    if (days < 7) {

        return days + " day" +
            (days > 1 ? "s" : "") +
            " ago";
    }


    return createdDate.toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    );
}


/* ================= ESCAPE HTML ================= */

function escapeHTML(value) {

    return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* ================= FILTER NOTIFICATIONS ================= */

function getFilteredNotifications() {

    if (currentFilter === "all") {

        return notifications;
    }


    if (currentFilter === "unread") {

        return notifications.filter(
            function(notification) {

                return !notification.read;
            }
        );
    }


    return notifications.filter(
        function(notification) {

            return notification.type ===
                currentFilter;
        }
    );
}


/* ================= RENDER ================= */

function renderNotifications() {

    const filteredNotifications =
        getFilteredNotifications();


    notificationList.innerHTML = "";


    /* ================= COUNT ================= */

    const unreadCount =
        notifications.filter(
            function(notification) {

                return !notification.read;
            }
        ).length;


    notificationCount.textContent =
        unreadCount +
        " unread • " +
        notifications.length +
        " total";


    /* ================= EMPTY ================= */

    if (filteredNotifications.length === 0) {

        notificationList.style.display =
            "none";

        emptyState.style.display =
            "block";

        return;
    }


    notificationList.style.display =
        "flex";

    emptyState.style.display =
        "none";


    /* ================= CARDS ================= */

    filteredNotifications.forEach(
        function(notification) {

            const card =
                document.createElement("div");


            card.className =
                "notification-card " +
                notification.type +
                " " +
                (
                    notification.read
                        ? "read"
                        : "unread"
                );


            const unreadDot =
                notification.read
                    ? ""
                    : `<span class="unread-dot"></span>`;


            card.innerHTML = `

                <div class="notification-icon">
                    <i class="fa-solid ${getNotificationIcon(
                        notification.type
                    )}"></i>
                </div>


                <div class="notification-content">

                    <h3>
                        ${escapeHTML(
                            notification.title
                        )}
                    </h3>

                    <p>
                        ${escapeHTML(
                            notification.message
                        )}
                    </p>

                    <span class="notification-time">
                        ${getTimeAgo(
                            notification.createdAt
                        )}
                    </span>

                </div>


                ${unreadDot}


                <div class="notification-arrow">
                    <i class="fa-solid fa-chevron-right"></i>
                </div>

            `;


            /* ================= CLICK ================= */

            card.addEventListener(
                "click",
                function() {

                    markNotificationRead(
                        notification.notificationId
                    );


                    if (
                        notification.bookingId
                    ) {

                        window.location.href =
                            "booking-details.html?id=" +
                            encodeURIComponent(
                                notification.bookingId
                            );
                    }

                }
            );


            notificationList.appendChild(
                card
            );

        }
    );
}


/* ================= MARK ONE READ ================= */

function markNotificationRead(
    notificationId
) {

    notifications =
        notifications.map(
            function(notification) {

                if (
                    notification.notificationId ===
                    notificationId
                ) {

                    notification.read = true;
                }

                return notification;
            }
        );


    localStorage.setItem(
        notificationStorageKey,
        JSON.stringify(notifications)
    );


    renderNotifications();
}


/* ================= MARK ALL READ ================= */

markAllReadBtn.addEventListener(
    "click",
    function() {

        notifications =
            notifications.map(
                function(notification) {

                    notification.read = true;

                    return notification;
                }
            );


        localStorage.setItem(
            notificationStorageKey,
            JSON.stringify(notifications)
        );


        renderNotifications();

    }
);


/* ================= FILTER BUTTONS ================= */

filterButtons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {

                filterButtons.forEach(
                    function(item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                currentFilter =
                    button.dataset.filter;


                renderNotifications();

            }
        );

    }
);


/* ================= LOGOUT ================= */

logoutBtn.addEventListener(
    "click",
    function() {

        localStorage.removeItem(
            "nextVorkCurrentUser"
        );


        window.location.href =
            "login.html";

    }
);


/* ================= INITIAL RENDER ================= */

renderNotifications();