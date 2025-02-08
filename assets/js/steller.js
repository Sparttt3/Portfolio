document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll(".nav-link");
    let sections = document.querySelectorAll("section"); // Sélectionne toutes les sections
    let navbar = document.querySelector(".navbar");

    // Fonction pour gérer le changement de couleur des liens pendant le scroll
    function updateActiveLink() {
        let scrollPosition = window.scrollY + navbar.offsetHeight; // Prend en compte la hauteur de la barre de navigation
        sections.forEach(section => {
            let sectionTop = section.offsetTop;
            let sectionHeight = section.offsetHeight;
            let sectionBottom = sectionTop + sectionHeight;

            // Vérifie si la section est dans la fenêtre de visualisation
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                let id = section.getAttribute("id");
                let activeLink = document.querySelector(`.nav-link[href="#${id}"]`);

                // Retirer la classe 'nav-link-active' de tous les liens
                navLinks.forEach(nav => nav.classList.remove("nav-link-active"));

                // Ajouter la classe 'nav-link-active' au lien correspondant à la section visible
                if (activeLink) {
                    activeLink.classList.add("nav-link-active");
                }
            }
        });
    }

    // Exécuter la fonction au chargement de la page et à chaque scroll
    updateActiveLink();
    window.addEventListener("scroll", updateActiveLink);

    // Ajouter les événements de clic pour le scroll doux et mettre à jour l'URL
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            let targetId = this.getAttribute("href");
            if (targetId.startsWith("#")) {
                event.preventDefault();
                let targetElement = document.querySelector(targetId);
                if (targetElement) {
                    let headerHeight = navbar.offsetHeight;
                    let targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

                    smoothScrollTo(targetPosition, 700);
                    history.pushState(null, null, targetId);
                }
            }
        });
    });

    function smoothScrollTo(to, duration) {
        let start = window.scrollY;
        let change = to - start;
        let startTime = performance.now();

        function animateScroll(currentTime) {
            let timeElapsed = currentTime - startTime;
            let progress = Math.min(timeElapsed / duration, 1);
            let easeInOutQuad = progress < 0.5 
                ? 2 * progress * progress 
                : 1 - Math.pow(-2 * progress + 2, 2) / 2;

            window.scrollTo(0, start + change * easeInOutQuad);

            if (timeElapsed < duration) {
                requestAnimationFrame(animateScroll);
            }
        }

        requestAnimationFrame(animateScroll);
    }
});
