document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll(".nav-link, .btn");
    let sections = document.querySelectorAll("section");
    let navbar = document.querySelector(".navbar");

    if (!navbar || navLinks.length === 0 || sections.length === 0) return;

    function updateActiveLink() {
        let scrollPosition = window.scrollY + navbar.offsetHeight;

        // Si l'utilisateur est tout en haut, activer "ACCUEIL"
        if (window.scrollY === 0) {
            navLinks.forEach(nav => nav.classList.remove("nav-link-active"));
            let accueilLink = document.querySelector(`.nav-link[href="#accueil"], .btn[href="#accueil"]`);
            if (accueilLink) accueilLink.classList.add("nav-link-active");
            return;
        }

        sections.forEach(section => {
            let sectionTop = section.offsetTop;
            let sectionHeight = section.offsetHeight;
            let sectionBottom = sectionTop + sectionHeight;

            console.log(`Détection active : ${section.id}, scrollPosition: ${scrollPosition}, sectionTop: ${sectionTop}`);

            if (scrollPosition >= sectionTop - 10 && scrollPosition < sectionBottom - 10) {
                let id = section.getAttribute("id");
                let activeLink = document.querySelector(`.nav-link[href="#${id}"], .btn[href="#${id}"]`);
                
                navLinks.forEach(nav => nav.classList.remove("nav-link-active"));
                
                if (activeLink) {
                    activeLink.classList.add("nav-link-active");
                }
            }
        });

        // Activer la dernière section quand on atteint le bas de la page
        let lastSection = sections[sections.length - 1];
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
            navLinks.forEach(nav => nav.classList.remove("nav-link-active"));
            let lastLink = document.querySelector(`.nav-link[href="#${lastSection.id}"]`);
            if (lastLink) lastLink.classList.add("nav-link-active");
        }
    }

    updateActiveLink();
    window.addEventListener("scroll", updateActiveLink, { passive: true });

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            let targetId = this.getAttribute("href");
            if (targetId.startsWith("#")) {
                event.preventDefault();
                let targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Réduire la hauteur de la barre de navigation de moitié
                    let headerHeight = navbar.offsetHeight;
                    let targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - (headerHeight / 2);
                    
                    smoothScrollTo(targetPosition);

                    if (targetId && document.querySelector(targetId)) {
                        history.replaceState(null, null, " ");
                    }
                }
            }
        });
    });

    function smoothScrollTo(to) {
        $('html, body').animate({ scrollTop: to }, 500); // 500ms pour un défilement fluide
    }
});
