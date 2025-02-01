// Fonction pour filtrer les cartes
function filterCards(category) {
    const cards = document.querySelectorAll('.cardcert'); // Sélectionne toutes les cartes

    // Si "TOUS" est sélectionné, on montre toutes les cartes
    if (category === 'TOUS') {
        cards.forEach(card => {
            card.classList.add('show'); // Affiche toutes les cartes
        });
    } else {
        // Masque toutes les cartes d'abord
        cards.forEach(card => {
            card.classList.remove('show'); // Masque toutes les cartes
        });
        
        // Montre seulement les cartes correspondant à la catégorie
        const filteredCards = document.querySelectorAll('.cardcert.' + category);
        filteredCards.forEach(card => {
            card.classList.add('show'); // Affiche uniquement les cartes filtrées
        });
    }
}