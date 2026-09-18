/* =========================================
   NEXT VORK
   SERVICE DETAILS PAGE
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
   READ URL PARAMETERS
========================================= */

const params =
    new URLSearchParams(
        window.location.search
    );


const professionalId =
    params.get("professional");


const serviceId =
    params.get("service");



/* =========================================
   PROFESSIONAL + SERVICE DATA
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

                shortDescription:
                    "Residential house planning with practical layouts based on your project requirements.",

                description:
                    "House Plan Design helps you plan the layout of your residential building according to your plot size, family requirements and construction needs.",

                price: "₹15,000",

                priceType: "Starting from",

                duration: "7 - 10 days",

                location: "Chennai",

                icon: "fa-house",

                included: [

                    "Initial design consultation",

                    "Basic floor plan",

                    "Room layout planning",

                    "Design revisions"

                ],

                note:
                    "Final design cost may vary depending on plot size, number of floors and project requirements."

            },

            {
                id: "PRO001-S02",

                name: "Building Plan Approval",

                shortDescription:
                    "Support for preparing building drawings and documentation for approval.",

                description:
                    "Professional assistance with preparing building plan documents and drawings required for the approval process.",

                price: "₹10,000",

                priceType: "Starting from",

                duration: "5 - 7 days",

                location: "Chennai",

                icon: "fa-file-circle-check",

                included: [

                    "Plan preparation",

                    "Document checklist",

                    "Drawing corrections",

                    "Approval process guidance"

                ],

                note:
                    "Government fees and other external charges are not included in the service price."

            },

            {
                id: "PRO001-S03",

                name: "3D Elevation Design",

                shortDescription:
                    "Modern 3D exterior elevation design for residential buildings.",

                description:
                    "Get a visual 3D representation of your building exterior before construction or renovation.",

                price: "₹8,000",

                priceType: "Starting from",

                duration: "5 - 7 days",

                location: "Chennai",

                icon: "fa-cube",

                included: [

                    "Elevation concept",

                    "3D exterior view",

                    "Material suggestions",

                    "Design revisions"

                ],

                note:
                    "Final pricing depends on building size and design complexity."

            },

            {
                id: "PRO001-S04",

                name: "Architectural Consultation",

                shortDescription:
                    "Professional consultation for construction planning and design decisions.",

                description:
                    "Discuss your construction requirements with an experienced architect and get practical design guidance.",

                price: "₹2,500",

                priceType: "Per consultation",

                duration: "1 - 2 hours",

                location: "Chennai",

                icon: "fa-comments",

                included: [

                    "Requirement discussion",

                    "Design guidance",

                    "Construction planning advice",

                    "Basic recommendations"

                ],

                note:
                    "Consultation fees cover the scheduled consultation session only."

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

                shortDescription:
                    "Structural planning for safe and practical building construction.",

                description:
                    "Structural Design provides structural planning and engineering calculations for residential construction projects.",

                price: "₹25,000",

                priceType: "Starting from",

                duration: "7 - 15 days",

                location: "Chennai",

                icon: "fa-building",

                included: [

                    "Structural planning",

                    "Column and beam planning",

                    "Basic structural drawings",

                    "Design consultation"

                ],

                note:
                    "Final price depends on building size, number of floors and structural requirements."

            },

            {
                id: "PRO004-S02",

                name: "Structural Inspection",

                shortDescription:
                    "Inspection of existing structures and identification of structural concerns.",

                description:
                    "Professional inspection of an existing building to understand visible structural conditions and construction concerns.",

                price: "₹4,000",

                priceType: "Per visit",

                duration: "2 - 3 hours",

                location: "Chennai",

                icon: "fa-magnifying-glass",

                included: [

                    "Site inspection",

                    "Visual assessment",

                    "Issue identification",

                    "Basic recommendations"

                ],

                note:
                    "Detailed testing or laboratory investigation may require additional charges."

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

                shortDescription:
                    "Complete residential construction from foundation to finishing.",

                description:
                    "Complete residential construction service covering major construction stages from foundation through finishing work.",

                price: "₹1,800 / sq.ft",

                priceType: "Starting from",

                duration: "6 - 12 months",

                location: "Chennai",

                icon: "fa-house",

                included: [

                    "Site preparation",

                    "Civil construction",

                    "Labour coordination",

                    "Construction supervision"

                ],

                note:
                    "Material selection, project scope and final quotation will be discussed before work begins."

            },

            {
                id: "PRO006-S02",

                name: "Renovation",

                shortDescription:
                    "Renovation and improvement work for existing residential properties.",

                description:
                    "Renovation service for improving existing residential spaces, including selected civil and finishing works.",

                price: "₹50,000",

                priceType: "Starting from",

                duration: "15 - 45 days",

                location: "Chennai",

                icon: "fa-hammer",

                included: [

                    "Site assessment",

                    "Work planning",

                    "Labour coordination",

                    "Basic supervision"

                ],

                note:
                    "Final quotation depends on the actual site condition and work scope."

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

                shortDescription:
                    "Residential building construction with coordinated labour and site execution.",

                description:
                    "Building Construction service for residential projects with construction coordination, labour management and site execution.",

                price: "₹1,800 / sq.ft",

                priceType: "Starting from",

                duration: "6 - 12 months",

                location: "Trichy",

                icon: "fa-house",

                included: [

                    "Initial site discussion",

                    "Construction planning",

                    "Labour coordination",

                    "Site supervision"

                ],

                note:
                    "The displayed price is an indicative starting price. Final pricing depends on built-up area, materials, design and project scope."

            },

            {
                id: "PRO007-S02",

                name: "Renovation Work",

                shortDescription:
                    "Home renovation work for structural, functional and appearance improvements.",

                description:
                    "Renovation Work helps improve existing homes through selected civil, structural and finishing changes based on customer requirements.",

                price: "₹50,000",

                priceType: "Starting from",

                duration: "15 - 45 days",

                location: "Trichy",

                icon: "fa-hammer",

                included: [

                    "Site inspection",

                    "Renovation planning",

                    "Labour coordination",

                    "Work supervision"

                ],

                note:
                    "Final cost depends on existing site condition, materials and renovation scope."

            },

            {
                id: "PRO007-S03",

                name: "Civil Work",

                shortDescription:
                    "Masonry, concrete and other general civil construction works.",

                description:
                    "Civil Work covers selected masonry, concrete and other construction activities required at residential project sites.",

                price: "₹25,000",

                priceType: "Starting from",

                duration: "7 - 30 days",

                location: "Trichy",

                icon: "fa-trowel-bricks",

                included: [

                    "Work assessment",

                    "Masonry work",

                    "Concrete work",

                    "Site coordination"

                ],

                note:
                    "Final pricing depends on work quantity, materials and site requirements."

            },

            {
                id: "PRO007-S04",

                name: "Site Supervision",

                shortDescription:
                    "Regular site supervision and coordination of construction activities.",

                description:
                    "Site Supervision provides professional monitoring of ongoing construction activities and coordination at the project site.",

                price: "₹2,500",

                priceType: "Per visit",

                duration: "2 - 3 hours",

                location: "Trichy",

                icon: "fa-clipboard-check",

                included: [

                    "Site visit",

                    "Work progress review",

                    "Basic quality observation",

                    "Contractor coordination"

                ],

                note:
                    "Each visit covers the agreed supervision duration. Additional visits can be scheduled separately."

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

                shortDescription:
                    "Professional brick masonry work for residential construction.",

                description:
                    "Brick Work service for walls and other masonry requirements in residential construction projects.",

                price: "₹800 / day",

                priceType: "Starting from",

                duration: "Project based",

                location: "Trichy",

                icon: "fa-trowel-bricks",

                included: [

                    "Brick laying",

                    "Masonry work",

                    "Basic site coordination",

                    "Work finishing"

                ],

                note:
                    "Final labour requirement depends on project size and work quantity."

            },

            {
                id: "PRO009-S02",

                name: "Concrete Work",

                shortDescription:
                    "Concrete mixing, placement and general site work.",

                description:
                    "Concrete Work service for residential construction activities requiring skilled construction labour.",

                price: "₹900 / day",

                priceType: "Starting from",

                duration: "Project based",

                location: "Trichy",

                icon: "fa-cubes",

                included: [

                    "Concrete preparation",

                    "Concrete placement",

                    "Site labour",

                    "Basic finishing"

                ],

                note:
                    "Material cost is not included unless specifically agreed."

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

                shortDescription:
                    "Professional interior painting with suitable finish options.",

                description:
                    "Interior Painting service for residential spaces with wall preparation and selected paint finishing.",

                price: "₹18 / sq.ft",

                priceType: "Starting from",

                duration: "3 - 7 days",

                location: "Chennai",

                icon: "fa-paint-roller",

                included: [

                    "Surface preparation",

                    "Primer application",

                    "Paint application",

                    "Basic finishing"

                ],

                note:
                    "Final price depends on surface condition, paint brand and number of coats."

            },

            {
                id: "PRO012-S02",

                name: "Exterior Painting",

                shortDescription:
                    "Exterior wall painting and protective finishing.",

                description:
                    "Exterior painting service for residential buildings with preparation and protective finishing.",

                price: "₹20 / sq.ft",

                priceType: "Starting from",

                duration: "4 - 8 days",

                location: "Chennai",

                icon: "fa-house",

                included: [

                    "Surface preparation",

                    "Primer",

                    "Exterior painting",

                    "Finishing"

                ],

                note:
                    "Scaffolding and major surface repairs may be charged separately."

            }

        ]

    }

};



/* =========================================
   FIND PROFESSIONAL
========================================= */

const professional =
    professionals[professionalId];



/* =========================================
   FIND SERVICE
========================================= */

let service = null;


if (professional) {

    service =
        professional.services.find(
            function(item) {

                return item.id === serviceId;

            }
        );

}



/* =========================================
   INVALID DATA
========================================= */

if (!professional || !service) {

    alert(
        "Service details could not be found."
    );

    window.location.href =
        "categories.html";

}



/* =========================================
   DISPLAY DATA
========================================= */

if (professional && service) {


    /* =====================================
       SERVICE INFORMATION
    ====================================== */

    document.getElementById(
        "serviceName"
    ).textContent =
        service.name;


    document.getElementById(
        "serviceShortDescription"
    ).textContent =
        service.shortDescription;


    document.getElementById(
        "serviceDescription"
    ).textContent =
        service.description;


    document.getElementById(
        "serviceDuration"
    ).textContent =
        service.duration;


    document.getElementById(
        "serviceLocation"
    ).textContent =
        service.location;


    document.getElementById(
        "servicePrice"
    ).textContent =
        service.price;


    document.getElementById(
        "servicePriceType"
    ).textContent =
        service.priceType;


    document.getElementById(
        "serviceNote"
    ).textContent =
        service.note;



    /* =====================================
       SERVICE ICON
    ====================================== */

    document.getElementById(
        "serviceIcon"
    ).className =
        `fa-solid ${service.icon}`;



    /* =====================================
       PROFESSIONAL INFORMATION
    ====================================== */

    document.getElementById(
        "professionalName"
    ).textContent =
        professional.name;


    document.getElementById(
        "professionalProfession"
    ).textContent =
        professional.profession;


    document.getElementById(
        "professionalRating"
    ).textContent =
        professional.rating;


    document.getElementById(
        "professionalReviews"
    ).textContent =
        `${professional.reviews} reviews`;


    document.getElementById(
        "professionalExperience"
    ).textContent =
        `${professional.experience} years experience`;


    document.getElementById(
        "professionalLocation"
    ).textContent =
        professional.location;



    /* =====================================
       PROFESSIONAL IMAGE
    ====================================== */

    const professionalImage =
        document.getElementById(
            "professionalImage"
        );


    professionalImage.src =
        professional.image;


    professionalImage.onerror =
        function() {

            this.src =
                "https://via.placeholder.com/200x200?text=Professional";

        };



    /* =====================================
       PRICE SIDEBAR
    ====================================== */

    document.getElementById(
        "sidebarPrice"
    ).textContent =
        service.price;


    document.getElementById(
        "sidebarPriceType"
    ).textContent =
        service.priceType;


    document.getElementById(
        "summaryService"
    ).textContent =
        service.name;


    document.getElementById(
        "summaryDuration"
    ).textContent =
        service.duration;



    /* =====================================
       INCLUDED ITEMS
    ====================================== */

    const includedList =
        document.getElementById(
            "includedList"
        );


    service.included.forEach(
        function(item) {


            const div =
                document.createElement(
                    "div"
                );


            div.className =
                "included-item";


            div.innerHTML = `

                <i class="fa-solid fa-check"></i>

                <span>
                    ${item}
                </span>

            `;


            includedList.appendChild(div);

        }
    );



    /* =====================================
       VIEW PROFESSIONAL PROFILE
    ====================================== */

    document.getElementById(
        "profileBtn"
    ).addEventListener(
        "click",
        function() {


            window.location.href =
                `professional-profile.html?id=${encodeURIComponent(professionalId)}`;

        }
    );



    /* =====================================
       BOOK SERVICE
    ====================================== */

    document.getElementById(
        "bookBtn"
    ).addEventListener(
        "click",
        function() {


            /*
                Save currently selected
                professional + service.

                This will help the next
                booking page.
            */

            const selectedService = {

                professionalId:
                    professionalId,

                professionalName:
                    professional.name,

                professionalProfession:
                    professional.profession,

                professionalLocation:
                    professional.location,

                serviceId:
                    service.id,

                serviceName:
                    service.name,

                servicePrice:
                    service.price,

                servicePriceType:
                    service.priceType,

                serviceDuration:
                    service.duration,

                selectedAt:
                    new Date().toISOString()

            };


            localStorage.setItem(
                "nextVorkSelectedService",
                JSON.stringify(
                    selectedService
                )
            );


            /* Go to booking page */

            window.location.href =
                `booking.html?professional=${encodeURIComponent(professionalId)}&service=${encodeURIComponent(service.id)}`;

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