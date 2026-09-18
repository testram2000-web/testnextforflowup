/* =========================================
   NEXT VORK - CATEGORIES
========================================= */


/* =========================================
   STORAGE
========================================= */

const CURRENT_USER_KEY = "nextVorkCurrentUser";


/* =========================================
   ELEMENTS
========================================= */

const welcomeUser =
    document.getElementById("welcomeUser");

const logoutBtn =
    document.getElementById("logoutBtn");

const categorySearch =
    document.getElementById("categorySearch");

const categoryGrid =
    document.getElementById("categoryGrid");

const categoryCards =
    document.querySelectorAll(".category-card");

const noResults =
    document.getElementById("noResults");


/* =========================================
   GET CURRENT USER
========================================= */

function getCurrentUser() {

    const user =
        localStorage.getItem(CURRENT_USER_KEY);


    if (!user) {

        return null;

    }


    try {

        return JSON.parse(user);

    } catch (error) {

        return null;

    }

}


/* =========================================
   LOGIN CHECK
========================================= */

const currentUser = getCurrentUser();


if (!currentUser) {

    window.location.href = "login.html";

}


/* =========================================
   DISPLAY USER
========================================= */

if (currentUser) {

    welcomeUser.textContent =
        "Hi, " + currentUser.name;

}


/* =========================================
   OPEN CATEGORY
========================================= */

function openCategory(categoryName) {

    const category =
        encodeURIComponent(categoryName);


    window.location.href =
        "professionals.html?category=" + category;

}


/* =========================================
   SEARCH
========================================= */

categorySearch.addEventListener(
    "input",
    function () {

        const searchValue =
            this.value
                .trim()
                .toLowerCase();


        let visibleCount = 0;


        categoryCards.forEach(function (card) {

            const searchText =
                card.dataset.search.toLowerCase();


            if (
                searchText.includes(searchValue)
            ) {

                card.style.display = "flex";

                visibleCount++;

            } else {

                card.style.display = "none";

            }

        });


        /* ===============================
           RESULTS
        =============================== */

        if (visibleCount === 0) {

            categoryGrid.style.display = "none";

            noResults.classList.remove("hidden");

        } else {

            categoryGrid.style.display = "grid";

            noResults.classList.add("hidden");

        }

    }
);


/* =========================================
   LOGOUT
========================================= */

logoutBtn.addEventListener(
    "click",
    function () {

        localStorage.removeItem(
            CURRENT_USER_KEY
        );


        window.location.href =
            "login.html";

    }
);