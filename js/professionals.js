/* =========================================
   NEXT VORK - PROFESSIONALS
========================================= */


/* =========================================
   STORAGE
========================================= */

const CURRENT_USER_KEY =
    "nextVorkCurrentUser";


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


const currentUser = getCurrentUser();


/* =========================================
   LOGIN CHECK
========================================= */

if (!currentUser) {

    window.location.href = "login.html";

}


/* =========================================
   ELEMENTS
========================================= */

const welcomeUser =
    document.getElementById("welcomeUser");

const logoutBtn =
    document.getElementById("logoutBtn");

const categoryTitle =
    document.getElementById("categoryTitle");

const categoryDescription =
    document.getElementById("categoryDescription");

const resultTitle =
    document.getElementById("resultTitle");

const resultCount =
    document.getElementById("resultCount");

const professionalGrid =
    document.getElementById("professionalGrid");

const professionalSearch =
    document.getElementById("professionalSearch");

const locationFilter =
    document.getElementById("locationFilter");

const noResults =
    document.getElementById("noResults");


/* =========================================
   SHOW USER
========================================= */

if (currentUser) {

    welcomeUser.textContent =
        "Hi, " + currentUser.name;

}


/* =========================================
   GET CATEGORY FROM URL
========================================= */

const urlParams =
    new URLSearchParams(window.location.search);


const selectedCategory =
    urlParams.get("category");


/* =========================================
   PROFESSIONAL DATA
========================================= */

const professionals = [

    /* =====================================
       ARCHITECTS
    ====================================== */

    {
        id: "PRO001",

        name: "Arun Kumar",

        category: "Architect",

        profession: "Architect & Building Designer",

        location: "Coimbatore",

        rating: "4.8",

        reviews: 42,

        image: "images/professionals/architect/arun-kumar.jpg",

        experience: "8 Years Experience",

        verified: true
    },


    {
        id: "PRO002",

        name: "Priya Design Studio",

        category: "Architect",

        profession: "Residential Architect",

        location: "Chennai",

        rating: "4.7",

        reviews: 36,

        image: "images/professionals/architect/priya-design.jpg",

        experience: "7 Years Experience",

        verified: true
    },


    {
        id: "PRO003",

        name: "Karthik Architects",

        category: "Architect",

        profession: "Architect & 3D Designer",

        location: "Bangalore",

        rating: "4.9",

        reviews: 51,

        image: "images/professionals/architect/karthik.jpg",

        experience: "10 Years Experience",

        verified: true
    },


    /* =====================================
       STRUCTURAL ENGINEERS
    ====================================== */

    {
        id: "PRO004",

        name: "Suresh Engineering",

        category: "Structural Engineer",

        profession: "Structural Engineer",

        location: "Coimbatore",

        rating: "4.8",

        reviews: 31,

        image: "images/professionals/engineers/suresh.jpg",

        experience: "9 Years Experience",

        verified: true
    },


    {
        id: "PRO005",

        name: "Vignesh Kumar",

        category: "Structural Engineer",

        profession: "Structural Consultant",

        location: "Chennai",

        rating: "4.6",

        reviews: 27,

        image: "images/professionals/engineers/vignesh.jpg",

        experience: "6 Years Experience",

        verified: true
    },


    {
        id: "PRO006",

        name: "BuildSafe Engineers",

        category: "Structural Engineer",

        profession: "Structural Design Consultant",

        location: "Bangalore",

        rating: "4.9",

        reviews: 48,

        image: "images/professionals/engineers/buildsafe.jpg",

        experience: "12 Years Experience",

        verified: true
    },


    /* =====================================
       CONTRACTORS
    ====================================== */

    {
        id: "PRO007",

        name: "Raj Construction",

        category: "Contractor",

        profession: "Building Contractor",

        location: "Coimbatore",

        rating: "4.7",

        reviews: 64,

        image: "images/professionals/contractors/raj-construction.jpg",

        experience: "11 Years Experience",

        verified: true
    },


    {
        id: "PRO008",

        name: "BuildPro Contractors",

        category: "Contractor",

        profession: "Residential Contractor",

        location: "Chennai",

        rating: "4.8",

        reviews: 53,

        image: "images/professionals/contractors/buildpro.jpg",

        experience: "9 Years Experience",

        verified: true
    },


    {
        id: "PRO009",

        name: "GreenBuild Projects",

        category: "Contractor",

        profession: "Construction Contractor",

        location: "Bangalore",

        rating: "4.6",

        reviews: 39,

        image: "images/professionals/contractors/greenbuild.jpg",

        experience: "8 Years Experience",

        verified: true
    },


    /* =====================================
       SKILLED WORKERS
    ====================================== */

    {
        id: "PRO010",

        name: "Muthu Mason Works",

        category: "Skilled Workers",

        profession: "Masonry & Civil Works",

        location: "Coimbatore",

        rating: "4.7",

        reviews: 29,

        image: "images/professionals/workers/muthu.jpg",

        experience: "12 Years Experience",

        verified: true
    },


    {
        id: "PRO011",

        name: "Kannan Skilled Works",

        category: "Skilled Workers",

        profession: "Civil & Tile Worker",

        location: "Chennai",

        rating: "4.6",

        reviews: 22,

        image: "images/professionals/workers/kannan.jpg",

        experience: "8 Years Experience",

        verified: true
    },


    {
        id: "PRO012",

        name: "Selvam Construction Team",

        category: "Skilled Workers",

        profession: "Masonry & Construction Worker",

        location: "Bangalore",

        rating: "4.8",

        reviews: 34,

        image: "images/professionals/workers/selvam.jpg",

        experience: "10 Years Experience",

        verified: true
    },


    /* =====================================
       PAINTER / INTERIOR
    ====================================== */

    {
        id: "PRO013",

        name: "ColorCraft Interiors",

        category: "Painter / Interior Team",

        profession: "Interior Design & Painting",

        location: "Coimbatore",

        rating: "4.9",

        reviews: 57,

        image: "images/professionals/interior/colorcraft.jpg",

        experience: "8 Years Experience",

        verified: true
    },


    {
        id: "PRO014",

        name: "HomeStyle Interiors",

        category: "Painter / Interior Team",

        profession: "Interior Design Team",

        location: "Chennai",

        rating: "4.7",

        reviews: 43,

        image: "images/professionals/interior/homestyle.jpg",

        experience: "7 Years Experience",

        verified: true
    },


    {
        id: "PRO015",

        name: "Perfect Paints",

        category: "Painter / Interior Team",

        profession: "Painting & Finishing",

        location: "Bangalore",

        rating: "4.8",

        reviews: 38,

        image: "images/professionals/interior/perfect-paints.jpg",

        experience: "9 Years Experience",

        verified: true
    }

];


/* =========================================
   CATEGORY INFORMATION
========================================= */

const categoryDescriptions = {

    "Architect":
        "Find architects for building design, planning and architectural services.",

    "Structural Engineer":
        "Find structural engineers for safe and reliable structural planning.",

    "Contractor":
        "Find contractors for construction execution and project management.",

    "Skilled Workers":
        "Find skilled workers for different construction and building requirements.",

    "Painter / Interior Team":
        "Find professionals for painting, interiors and finishing work."

};


/* =========================================
   SET CATEGORY
========================================= */

if (selectedCategory) {

    const decodedCategory =
        decodeURIComponent(selectedCategory);


    categoryTitle.textContent =
        decodedCategory;


    resultTitle.textContent =
        decodedCategory + " Professionals";


    categoryDescription.textContent =
        categoryDescriptions[decodedCategory] ||
        "Find professionals for your construction needs.";

}


/* =========================================
   FILTER PROFESSIONALS
========================================= */

function filterProfessionals() {

    const searchValue =
        professionalSearch.value
            .trim()
            .toLowerCase();


    const selectedLocation =
        locationFilter.value;


    let filtered =
        professionals.filter(function (professional) {

            /* Category */

            if (
                selectedCategory &&
                professional.category !==
                decodeURIComponent(selectedCategory)
            ) {

                return false;

            }


            /* Search */

            const searchableText = (

                professional.name +
                " " +
                professional.profession +
                " " +
                professional.location

            ).toLowerCase();


            if (
                searchValue &&
                !searchableText.includes(searchValue)
            ) {

                return false;

            }


            /* Location */

            if (
                selectedLocation !== "all" &&
                professional.location !== selectedLocation
            ) {

                return false;

            }


            return true;

        });


    renderProfessionals(filtered);

}


/* =========================================
   RENDER PROFESSIONALS
========================================= */

function renderProfessionals(list) {

    professionalGrid.innerHTML = "";


    resultCount.textContent =
        list.length +
        (
            list.length === 1
                ? " Professional"
                : " Professionals"
        );


    if (list.length === 0) {

        professionalGrid.style.display =
            "none";

        noResults.classList.remove("hidden");

        return;

    }


    professionalGrid.style.display =
        "grid";

    noResults.classList.add("hidden");


    list.forEach(function (professional) {

        const card =
            document.createElement("article");


        card.className =
            "professional-card";


        card.onclick = function () {

            openProfessional(
                professional.id
            );

        };


        card.innerHTML = `

            <div class="professional-image">

                <img
                    src="${professional.image}"
                    alt="${professional.name}"
                    onerror="this.style.display='none'"
                >

            </div>


            <div class="professional-content">

                <h3>
                    ${professional.name}
                </h3>

                <p class="profession">
                    ${professional.profession}
                </p>


                <div class="rating">

                    <span class="stars">
                        ★★★★★
                    </span>

                    <span class="rating-number">
                        ${professional.rating}
                    </span>

                    <span class="reviews">
                        (${professional.reviews})
                    </span>

                </div>


                <p class="location">
                    📍 ${professional.location}
                </p>


                <p class="experience">
                    ${professional.experience}
                </p>


                <span class="view-profile">
                    View Profile
                    <span>→</span>
                </span>

            </div>


            ${
                professional.verified
                ?
                `<span class="verified">✓ Verified</span>`
                :
                ""
            }

        `;


        professionalGrid.appendChild(card);

    });

}


/* =========================================
   OPEN PROFESSIONAL
========================================= */

function openProfessional(professionalId) {

    window.location.href =
        "professional-profile.html?id=" +
        encodeURIComponent(professionalId);

}


/* =========================================
   SEARCH EVENT
========================================= */

professionalSearch.addEventListener(
    "input",
    filterProfessionals
);


/* =========================================
   LOCATION EVENT
========================================= */

locationFilter.addEventListener(
    "change",
    filterProfessionals
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


/* =========================================
   INITIAL LOAD
========================================= */

filterProfessionals();