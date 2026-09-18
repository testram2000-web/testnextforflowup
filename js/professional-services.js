/* =========================================
   NEXT VORK
   PROFESSIONAL SERVICES PAGE
========================================= */


/* =========================================
   LOGIN CHECK
========================================= */

const currentUser =
    JSON.parse(
        localStorage.getItem("nextVorkCurrentUser")
    );


if (!currentUser) {

    window.location.href = "login.html";

}



/* =========================================
   SHOW USER NAME
========================================= */

const userName =
    document.getElementById("userName");


if (currentUser && userName) {

    userName.textContent =
        `Hi, ${currentUser.name}`;

}



/* =========================================
   GET PROFESSIONAL ID
========================================= */

const params =
    new URLSearchParams(
        window.location.search
    );


const professionalId =
    params.get("id");



/* =========================================
   PROFESSIONAL DATA
========================================= */

const professionals = {


    /* =====================================
       PRO001
    ====================================== */

    PRO001: {

        name: "Arun Kumar",

        profession: "Architect",

        location: "Chennai",

        rating: 4.8,

        reviews: 126,

        experience: 8,

        verified: true,

        image:
            "images/professionals/architect/arun-kumar.jpg",

        services: [

            {
                id: "PRO001-S01",

                name: "House Plan Design",

                description:
                    "Residential house planning with practical layouts based on your project requirements.",

                price: "₹15,000",

                priceType: "Starting from",

                duration: "7 - 10 days",

                icon: "fa-house"
            },

            {
                id: "PRO001-S02",

                name: "Building Plan Approval",

                description:
                    "Support for preparing building drawings and documentation for approval.",

                price: "₹10,000",

                priceType: "Starting from",

                duration: "5 - 7 days",

                icon: "fa-file-circle-check"
            },

            {
                id: "PRO001-S03",

                name: "3D Elevation Design",

                description:
                    "Modern 3D exterior elevation design for residential buildings.",

                price: "₹8,000",

                priceType: "Starting from",

                duration: "5 - 7 days",

                icon: "fa-cube"
            },

            {
                id: "PRO001-S04",

                name: "Architectural Consultation",

                description:
                    "Professional consultation for construction planning and design decisions.",

                price: "₹2,500",

                priceType: "Per consultation",

                duration: "1 - 2 hours",

                icon: "fa-comments"
            }

        ]

    },



    /* =====================================
       PRO002
    ====================================== */

    PRO002: {

        name: "Priya Architects",

        profession: "Architect",

        location: "Coimbatore",

        rating: 4.7,

        reviews: 98,

        experience: 7,

        verified: true,

        image:
            "images/professionals/architect/priya-architects.jpg",

        services: [

            {
                id: "PRO002-S01",

                name: "Residential Design",

                description:
                    "Complete residential architectural planning for new homes.",

                price: "₹20,000",

                priceType: "Starting from",

                duration: "10 - 15 days",

                icon: "fa-house"
            },

            {
                id: "PRO002-S02",

                name: "3D Design",

                description:
                    "Detailed 3D visual design to understand your proposed building.",

                price: "₹9,000",

                priceType: "Starting from",

                duration: "5 - 8 days",

                icon: "fa-cube"
            },

            {
                id: "PRO002-S03",

                name: "Floor Plan",

                description:
                    "Functional floor plan preparation based on plot dimensions.",

                price: "₹7,500",

                priceType: "Starting from",

                duration: "4 - 6 days",

                icon: "fa-ruler-combined"
            },

            {
                id: "PRO002-S04",

                name: "Site Consultation",

                description:
                    "Professional site visit and construction planning consultation.",

                price: "₹2,000",

                priceType: "Per visit",

                duration: "1 - 2 hours",

                icon: "fa-location-dot"
            }

        ]

    },



    /* =====================================
       PRO003
    ====================================== */

    PRO003: {

        name: "Karthik Design Studio",

        profession: "Architect",

        location: "Trichy",

        rating: 4.6,

        reviews: 74,

        experience: 6,

        verified: true,

        image:
            "images/professionals/architect/karthik-studio.jpg",

        services: [

            {
                id: "PRO003-S01",

                name: "House Design",

                description:
                    "Customized house design based on family needs and site dimensions.",

                price: "₹15,000",

                priceType: "Starting from",

                duration: "7 - 12 days",

                icon: "fa-house"
            },

            {
                id: "PRO003-S02",

                name: "Floor Planning",

                description:
                    "Detailed floor planning for efficient use of available space.",

                price: "₹6,000",

                priceType: "Starting from",

                duration: "3 - 5 days",

                icon: "fa-ruler-combined"
            },

            {
                id: "PRO003-S03",

                name: "Elevation Design",

                description:
                    "Front elevation concepts for a modern residential appearance.",

                price: "₹7,000",

                priceType: "Starting from",

                duration: "4 - 6 days",

                icon: "fa-building"
            },

            {
                id: "PRO003-S04",

                name: "Design Consultation",

                description:
                    "Consultation for architectural design and construction planning.",

                price: "₹2,000",

                priceType: "Per consultation",

                duration: "1 hour",

                icon: "fa-comments"
            }

        ]

    },



    /* =====================================
       PRO004
    ====================================== */

    PRO004: {

        name: "Suresh Engineering",

        profession: "Structural Engineer",

        location: "Chennai",

        rating: 4.9,

        reviews: 143,

        experience: 10,

        verified: true,

        image:
            "images/professionals/engineers/suresh-engineering.jpg",

        services: [

            {
                id: "PRO004-S01",

                name: "Structural Design",

                description:
                    "Structural planning for safe and practical building construction.",

                price: "₹25,000",

                priceType: "Starting from",

                duration: "7 - 15 days",

                icon: "fa-building"
            },

            {
                id: "PRO004-S02",

                name: "Structural Inspection",

                description:
                    "Inspection of existing structures and identification of structural concerns.",

                price: "₹4,000",

                priceType: "Per visit",

                duration: "2 - 3 hours",

                icon: "fa-magnifying-glass"
            },

            {
                id: "PRO004-S03",

                name: "Foundation Design",

                description:
                    "Foundation planning based on structural and site requirements.",

                price: "₹12,000",

                priceType: "Starting from",

                duration: "5 - 8 days",

                icon: "fa-layer-group"
            },

            {
                id: "PRO004-S04",

                name: "Site Consultation",

                description:
                    "On-site structural consultation during construction planning.",

                price: "₹3,000",

                priceType: "Per visit",

                duration: "1 - 2 hours",

                icon: "fa-location-dot"
            }

        ]

    },



    /* =====================================
       PRO005
    ====================================== */

    PRO005: {

        name: "Vignesh Kumar",

        profession: "Structural Engineer",

        location: "Coimbatore",

        rating: 4.7,

        reviews: 91,

        experience: 8,

        verified: true,

        image:
            "images/professionals/engineers/vignesh-kumar.jpg",

        services: [

            {
                id: "PRO005-S01",

                name: "RCC Design",

                description:
                    "RCC structural planning for residential building projects.",

                price: "₹20,000",

                priceType: "Starting from",

                duration: "7 - 12 days",

                icon: "fa-building"
            },

            {
                id: "PRO005-S02",

                name: "Structural Analysis",

                description:
                    "Structural analysis for safe construction planning.",

                price: "₹8,000",

                priceType: "Starting from",

                duration: "4 - 7 days",

                icon: "fa-chart-line"
            },

            {
                id: "PRO005-S03",

                name: "Foundation Planning",

                description:
                    "Foundation design and planning for residential projects.",

                price: "₹10,000",

                priceType: "Starting from",

                duration: "4 - 6 days",

                icon: "fa-layer-group"
            },

            {
                id: "PRO005-S04",

                name: "Site Inspection",

                description:
                    "Professional inspection of construction site and structural work.",

                price: "₹3,000",

                priceType: "Per visit",

                duration: "2 hours",

                icon: "fa-magnifying-glass"
            }

        ]

    },



    /* =====================================
       PRO006
    ====================================== */

    PRO006: {

        name: "BuildRight Constructions",

        profession: "Contractor",

        location: "Chennai",

        rating: 4.8,

        reviews: 118,

        experience: 12,

        verified: true,

        image:
            "images/professionals/contractors/buildright.jpg",

        services: [

            {
                id: "PRO006-S01",

                name: "House Construction",

                description:
                    "Complete residential construction from foundation to finishing.",

                price: "₹1,800 / sq.ft",

                priceType: "Starting from",

                duration: "6 - 12 months",

                icon: "fa-house"
            },

            {
                id: "PRO006-S02",

                name: "Renovation",

                description:
                    "Renovation and improvement work for existing residential properties.",

                price: "₹50,000",

                priceType: "Starting from",

                duration: "15 - 45 days",

                icon: "fa-hammer"
            },

            {
                id: "PRO006-S03",

                name: "Civil Work",

                description:
                    "Civil construction work including masonry, concrete and site work.",

                price: "₹25,000",

                priceType: "Starting from",

                duration: "7 - 30 days",

                icon: "fa-trowel-bricks"
            },

            {
                id: "PRO006-S04",

                name: "Project Management",

                description:
                    "Construction project coordination and site supervision.",

                price: "₹15,000",

                priceType: "Starting from",

                duration: "Project based",

                icon: "fa-clipboard-check"
            }

        ]

    },



    /* =====================================
       PRO007
    ====================================== */

    PRO007: {

        name: "Ravi Construction",

        profession: "Contractor",

        location: "Trichy",

        rating: 4.6,

        reviews: 82,

        experience: 9,

        verified: true,

        image:
            "images/professionals/contractors/ravi-construction.jpg",

        services: [

            {
                id: "PRO007-S01",

                name: "Building Construction",

                description:
                    "Residential building construction with coordinated labour and site execution.",

                price: "₹1,800 / sq.ft",

                priceType: "Starting from",

                duration: "6 - 12 months",

                icon: "fa-house"
            },

            {
                id: "PRO007-S02",

                name: "Renovation Work",

                description:
                    "Home renovation work for structural, functional and appearance improvements.",

                price: "₹50,000",

                priceType: "Starting from",

                duration: "15 - 45 days",

                icon: "fa-hammer"
            },

            {
                id: "PRO007-S03",

                name: "Civil Work",

                description:
                    "Masonry, concrete and other general civil construction works.",

                price: "₹25,000",

                priceType: "Starting from",

                duration: "7 - 30 days",

                icon: "fa-trowel-bricks"
            },

            {
                id: "PRO007-S04",

                name: "Site Supervision",

                description:
                    "Regular site supervision and coordination of construction activities.",

                price: "₹2,500",

                priceType: "Per visit",

                duration: "2 - 3 hours",

                icon: "fa-clipboard-check"
            }

        ]

    },



    /* =====================================
       PRO008
    ====================================== */

    PRO008: {

        name: "Tamil Builders",

        profession: "Contractor",

        location: "Madurai",

        rating: 4.7,

        reviews: 105,

        experience: 11,

        verified: true,

        image:
            "images/professionals/contractors/tamil-builders.jpg",

        services: [

            {
                id: "PRO008-S01",

                name: "Complete Construction",

                description:
                    "Complete building construction management from start to finish.",

                price: "₹1,750 / sq.ft",

                priceType: "Starting from",

                duration: "6 - 12 months",

                icon: "fa-house"
            },

            {
                id: "PRO008-S02",

                name: "Civil Work",

                description:
                    "General civil construction and site development work.",

                price: "₹25,000",

                priceType: "Starting from",

                duration: "7 - 30 days",

                icon: "fa-trowel-bricks"
            },

            {
                id: "PRO008-S03",

                name: "Renovation",

                description:
                    "Residential renovation and property improvement services.",

                price: "₹45,000",

                priceType: "Starting from",

                duration: "15 - 40 days",

                icon: "fa-hammer"
            },

            {
                id: "PRO008-S04",

                name: "Labour Management",

                description:
                    "Construction labour coordination and work supervision.",

                price: "₹3,000",

                priceType: "Per visit",

                duration: "2 - 3 hours",

                icon: "fa-users"
            }

        ]

    },



    /* =====================================
       PRO009
    ====================================== */

    PRO009: {

        name: "Murugan Mason Works",

        profession: "Skilled Worker",

        location: "Trichy",

        rating: 4.8,

        reviews: 87,

        experience: 10,

        verified: true,

        image:
            "images/professionals/workers/murugan.jpg",

        services: [

            {
                id: "PRO009-S01",

                name: "Brick Work",

                description:
                    "Professional brick masonry work for residential construction.",

                price: "₹800 / day",

                priceType: "Starting from",

                duration: "Project based",

                icon: "fa-trowel-bricks"
            },

            {
                id: "PRO009-S02",

                name: "Concrete Work",

                description:
                    "Concrete mixing, placement and general site work.",

                price: "₹900 / day",

                priceType: "Starting from",

                duration: "Project based",

                icon: "fa-cubes"
            },

            {
                id: "PRO009-S03",

                name: "Masonry",

                description:
                    "General masonry work for walls and construction projects.",

                price: "₹800 / day",

                priceType: "Starting from",

                duration: "Project based",

                icon: "fa-trowel"
            },

            {
                id: "PRO009-S04",

                name: "Tile Work",

                description:
                    "Floor and wall tile installation for residential properties.",

                price: "₹45 / sq.ft",

                priceType: "Starting from",

                duration: "Project based",

                icon: "fa-border-all"
            }

        ]

    },



    /* =====================================
       PRO010
    ====================================== */

    PRO010: {

        name: "Rajesh Electrical Works",

        profession: "Skilled Worker",

        location: "Coimbatore",

        rating: 4.7,

        reviews: 69,

        experience: 7,

        verified: true,

        image:
            "images/professionals/workers/rajesh.jpg",

        services: [

            {
                id: "PRO010-S01",

                name: "Electrical Work",

                description:
                    "Residential electrical installation and construction electrical work.",

                price: "₹1,000",

                priceType: "Starting from",

                duration: "1 day",

                icon: "fa-bolt"
            },

            {
                id: "PRO010-S02",

                name: "Wiring",

                description:
                    "Electrical wiring installation for new and existing buildings.",

                price: "₹30 / sq.ft",

                priceType: "Starting from",

                duration: "Project based",

                icon: "fa-plug"
            },

            {
                id: "PRO010-S03",

                name: "Installation",

                description:
                    "Installation of electrical fixtures and equipment.",

                price: "₹500",

                priceType: "Starting from",

                duration: "2 - 4 hours",

                icon: "fa-screwdriver-wrench"
            },

            {
                id: "PRO010-S04",

                name: "Repair Work",

                description:
                    "Electrical fault checking and repair services.",

                price: "₹300",

                priceType: "Starting from",

                duration: "1 - 2 hours",

                icon: "fa-wrench"
            }

        ]

    },



    /* =====================================
       PRO011
    ====================================== */

    PRO011: {

        name: "Senthil Mason Team",

        profession: "Skilled Worker",

        location: "Madurai",

        rating: 4.6,

        reviews: 61,

        experience: 8,

        verified: true,

        image:
            "images/professionals/workers/senthil.jpg",

        services: [

            {
                id: "PRO011-S01",

                name: "Masonry Work",

                description:
                    "Professional masonry work for residential construction projects.",

                price: "₹800 / day",

                priceType: "Starting from",

                duration: "Project based",

                icon: "fa-trowel-bricks"
            },

            {
                id: "PRO011-S02",

                name: "Plastering",

                description:
                    "Wall and ceiling plastering for construction projects.",

                price: "₹25 / sq.ft",

                priceType: "Starting from",

                duration: "Project based",

                icon: "fa-layer-group"
            },

            {
                id: "PRO011-S03",

                name: "Concrete Work",

                description:
                    "General concrete preparation and construction work.",

                price: "₹900 / day",

                priceType: "Starting from",

                duration: "Project based",

                icon: "fa-cubes"
            },

            {
                id: "PRO011-S04",

                name: "Construction Labour",

                description:
                    "General construction labour support for building projects.",

                price: "₹750 / day",

                priceType: "Starting from",

                duration: "Project based",

                icon: "fa-person-digging"
            }

        ]

    },



    /* =====================================
       PRO012
    ====================================== */

    PRO012: {

        name: "ColorCraft Interiors",

        profession: "Painter / Interior Team",

        location: "Chennai",

        rating: 4.8,

        reviews: 112,

        experience: 9,

        verified: true,

        image:
            "images/professionals/interior/colorcraft.jpg",

        services: [

            {
                id: "PRO012-S01",

                name: "Interior Painting",

                description:
                    "Professional interior painting with suitable finish options.",

                price: "₹18 / sq.ft",

                priceType: "Starting from",

                duration: "3 - 7 days",

                icon: "fa-paint-roller"
            },

            {
                id: "PRO012-S02",

                name: "Exterior Painting",

                description:
                    "Exterior wall painting and protective finishing.",

                price: "₹20 / sq.ft",

                priceType: "Starting from",

                duration: "4 - 8 days",

                icon: "fa-house"
            },

            {
                id: "PRO012-S03",

                name: "Wall Texture",

                description:
                    "Decorative wall texture and finishing services.",

                price: "₹35 / sq.ft",

                priceType: "Starting from",

                duration: "2 - 5 days",

                icon: "fa-brush"
            },

            {
                id: "PRO012-S04",

                name: "Interior Design",

                description:
                    "Interior planning and design support for residential spaces.",

                price: "₹25,000",

                priceType: "Starting from",

                duration: "15 - 30 days",

                icon: "fa-couch"
            }

        ]

    },



    /* =====================================
       PRO013
    ====================================== */

    PRO013: {

        name: "HomeStyle Interiors",

        profession: "Painter / Interior Team",

        location: "Coimbatore",

        rating: 4.7,

        reviews: 95,

        experience: 8,

        verified: true,

        image:
            "images/professionals/interior/homestyle.jpg",

        services: [

            {
                id: "PRO013-S01",

                name: "Interior Design",

                description:
                    "Residential interior design based on customer preferences and space.",

                price: "₹25,000",

                priceType: "Starting from",

                duration: "15 - 30 days",

                icon: "fa-couch"
            },

            {
                id: "PRO013-S02",

                name: "Painting",

                description:
                    "Complete residential painting with wall preparation and finishing.",

                price: "₹18 / sq.ft",

                priceType: "Starting from",

                duration: "3 - 7 days",

                icon: "fa-paint-roller"
            },

            {
                id: "PRO013-S03",

                name: "False Ceiling",

                description:
                    "False ceiling installation and interior finishing.",

                price: "₹90 / sq.ft",

                priceType: "Starting from",

                duration: "5 - 10 days",

                icon: "fa-layer-group"
            },

            {
                id: "PRO013-S04",

                name: "Wall Design",

                description:
                    "Decorative wall design and finishing for residential interiors.",

                price: "₹35 / sq.ft",

                priceType: "Starting from",

                duration: "2 - 5 days",

                icon: "fa-brush"
            }

        ]

    },



    /* =====================================
       PRO014
    ====================================== */

    PRO014: {

        name: "Classic Paint Works",

        profession: "Painter / Interior Team",

        location: "Trichy",

        rating: 4.6,

        reviews: 73,

        experience: 6,

        verified: true,

        image:
            "images/professionals/interior/classic-paint.jpg",

        services: [

            {
                id: "PRO014-S01",

                name: "Home Painting",

                description:
                    "Interior and exterior painting for residential homes.",

                price: "₹18 / sq.ft",

                priceType: "Starting from",

                duration: "3 - 8 days",

                icon: "fa-paint-roller"
            },

            {
                id: "PRO014-S02",

                name: "Exterior Painting",

                description:
                    "Exterior painting and protective finishing for buildings.",

                price: "₹20 / sq.ft",

                priceType: "Starting from",

                duration: "4 - 8 days",

                icon: "fa-house"
            },

            {
                id: "PRO014-S03",

                name: "Texture Painting",

                description:
                    "Decorative texture painting for walls and interiors.",

                price: "₹35 / sq.ft",

                priceType: "Starting from",

                duration: "2 - 5 days",

                icon: "fa-brush"
            },

            {
                id: "PRO014-S04",

                name: "Wall Finishing",

                description:
                    "Professional wall preparation and finishing work.",

                price: "₹15 / sq.ft",

                priceType: "Starting from",

                duration: "2 - 5 days",

                icon: "fa-paintbrush"
            }

        ]

    }

};



/* =========================================
   GET SELECTED PROFESSIONAL
========================================= */

const professional =
    professionals[professionalId];



/* =========================================
   HANDLE INVALID PROFESSIONAL
========================================= */

if (!professional) {

    alert("Professional not found.");

    window.location.href =
        "professionals.html";

}



/* =========================================
   DISPLAY PROFESSIONAL
========================================= */

if (professional) {


    /* NAME */

    document.getElementById(
        "professionalName"
    ).textContent =
        professional.name;



    /* PROFESSION */

    document.getElementById(
        "professionalProfession"
    ).textContent =
        professional.profession;



    /* RATING */

    document.getElementById(
        "rating"
    ).textContent =
        professional.rating;



    /* REVIEWS */

    document.getElementById(
        "reviews"
    ).textContent =
        `${professional.reviews} reviews`;



    /* LOCATION */

    document.getElementById(
        "location"
    ).textContent =
        professional.location;



    /* EXPERIENCE */

    document.getElementById(
        "experience"
    ).textContent =
        `${professional.experience} years experience`;



    /* IMAGE */

    const professionalImage =
        document.getElementById(
            "professionalImage"
        );


    professionalImage.src =
        professional.image;


    professionalImage.onerror =
        function () {

            this.src =
                "https://via.placeholder.com/300x300?text=Professional";

        };



    /* VERIFIED */

    if (!professional.verified) {

        document.getElementById(
            "verifiedBadge"
        ).style.display = "none";

    }



    /* SERVICE DESCRIPTION */

    document.getElementById(
        "serviceDescription"
    ).textContent =
        `${professional.name} currently offers ${professional.services.length} services. Select a service to view more details.`;



    /* =====================================
       CREATE SERVICE CARDS
    ====================================== */

    const servicesGrid =
        document.getElementById(
            "servicesGrid"
        );


    professional.services.forEach(
        function(service) {


            const card =
                document.createElement("article");


            card.className =
                "service-card";


            card.innerHTML = `

                <div class="service-card-top">

                    <div class="service-icon">

                        <i class="fa-solid ${service.icon}"></i>

                    </div>

                    <span class="service-type">
                        Construction Service
                    </span>

                </div>


                <h3>
                    ${service.name}
                </h3>


                <p class="service-description">
                    ${service.description}
                </p>


                <div class="service-meta">

                    <div class="service-meta-item">

                        <span>
                            Price
                        </span>

                        <strong class="price-text">
                            ${service.price}
                        </strong>

                    </div>


                    <div class="service-meta-item">

                        <span>
                            Pricing
                        </span>

                        <strong>
                            ${service.priceType}
                        </strong>

                    </div>


                    <div class="service-meta-item">

                        <span>
                            Duration
                        </span>

                        <strong>
                            ${service.duration}
                        </strong>

                    </div>

                </div>


                <div class="service-card-bottom">

                    <span class="details-note">
                        View service details before booking
                    </span>


                    <button
                        class="view-service-btn"
                        data-service-id="${service.id}">

                        View Details

                        <i class="fa-solid fa-arrow-right"></i>

                    </button>

                </div>

            `;


            servicesGrid.appendChild(card);

        }
    );



    /* =====================================
       VIEW DETAILS BUTTONS
    ====================================== */

    const serviceButtons =
        document.querySelectorAll(
            ".view-service-btn"
        );


    serviceButtons.forEach(
        function(button) {


            button.addEventListener(
                "click",
                function() {


                    const serviceId =
                        this.dataset.serviceId;


                    window.location.href =
                        `service-details.html?professional=${encodeURIComponent(professionalId)}&service=${encodeURIComponent(serviceId)}`;

                }
            );

        }
    );

}



/* =========================================
   LOGOUT
========================================= */

document.getElementById(
    "logoutBtn"
).addEventListener(
    "click",
    function() {


        localStorage.removeItem(
            "nextVorkCurrentUser"
        );


        window.location.href =
            "login.html";

    }
);