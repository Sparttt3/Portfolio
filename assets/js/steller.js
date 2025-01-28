/*!
=========================================================
* Steller Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".nav-link, .btn.btn-primary.rounded.ml-4").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            var hash = this.hash;
            var headerHeight = $(".nav-link").outerHeight(); // Ajustez selon l'élément de votre en-tête
            var targetPosition = $(hash).offset().top - headerHeight;

            // Animation du défilement
            $('html, body').animate({
                scrollTop: targetPosition
            }, 700, function(){
                // Modifier l'URL sans téléporter la page
                window.history.pushState(null, null, hash);
            });
        } 
    });
});