// Close the mobile navigation after clicking a link

const navLinks = document.querySelectorAll(".nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navbarCollapse.classList.contains("show")) {

            const bsCollapse =
                new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });

            bsCollapse.hide();
        }

    });

});


// Add shadow to navbar when scrolling

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.boxShadow =
            "0 4px 20px rgba(15, 23, 42, 0.08)";
    } else {
        navbar.style.boxShadow = "none";
    }

});