/* =========================================
   NEXT VORK - HOME PAGE JAVASCRIPT
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");


if (mobileMenuBtn && mobileMenu) {

    mobileMenuBtn.addEventListener("click", function () {

        const isOpen = mobileMenu.style.display === "flex";

        mobileMenu.style.display = isOpen ? "none" : "flex";

        mobileMenuBtn.innerHTML = isOpen
            ? '<i class="fa-solid fa-bars"></i>'
            : '<i class="fa-solid fa-xmark"></i>';

    });

}


/* =========================================
   SERVICE SEARCH
========================================= */

const serviceSearch = document.getElementById("serviceSearch");
const searchBtn = document.getElementById("searchBtn");


function performSearch() {

    if (!serviceSearch) {
        return;
    }


    const searchValue = serviceSearch.value.trim();


    if (searchValue === "") {

        serviceSearch.focus();

        return;
    }


    /*
        Current flow:

        Home
          ↓
        Search
          ↓
        categories.html?search=...
    */

    window.location.href =
        "categories.html?search=" +
        encodeURIComponent(searchValue);

}


if (searchBtn) {

    searchBtn.addEventListener(
        "click",
        performSearch
    );

}


if (serviceSearch) {

    serviceSearch.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                performSearch();

            }

        }
    );

}


/* =========================================
   POPULAR SEARCH BUTTONS
========================================= */

const popularButtons =
    document.querySelectorAll(
        ".popular-searches button"
    );


popularButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            const searchValue =
                button.getAttribute("data-search");


            if (serviceSearch) {

                serviceSearch.value =
                    searchValue;

                performSearch();

            }

        }
    );

});