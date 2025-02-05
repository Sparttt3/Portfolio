document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll(".nav-link, .btn.btn-primary.rounded.ml-4");
    let navbar = document.querySelector(".navbar");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            let targetId = this.getAttribute("href");

            if (targetId.startsWith("#")) {
                event.preventDefault();

                let targetElement = document.querySelector(targetId);
                if (targetElement) {
                    let headerHeight = navbar.offsetHeight;
                    let targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

                    // Animation smooth scroll avec requestAnimationFrame
                    smoothScrollTo(targetPosition, 700);

                    // Modifier l'URL sans recharger la page
                    history.pushState(null, null, targetId);

                    // Mettre à jour le lien actif
                    navLinks.forEach(nav => nav.classList.remove("active"));
                    this.classList.add("active");
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
