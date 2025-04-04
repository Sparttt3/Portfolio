let currentIndex = 0;
const projects = [
    [
        "assets/imgs/Proxmox.jpg",
        "assets/imgs/haproxy-keepalived.jpg",
        "assets/imgs/déckédex.jpg",
        "assets/imgs/déckédex.jpg"
    ],
    [
        "assets/imgs/projet5.jpg",
        "assets/imgs/projet6.jpg",
        "assets/imgs/projet7.jpg",
        "assets/imgs/projet8.jpg"
    ],
    [
        "assets/imgs/projet9.jpg",
        "assets/imgs/projet10.jpg",
        "assets/imgs/projet11.jpg",
        "assets/imgs/projet12.jpg"
    ]
];

function updateGrid() {
    const grid = document.getElementById("projectGrid");
    grid.innerHTML = projects[currentIndex].map(imgSrc => {
        // Extraire le nom du fichier pour le mettre en alt
        const altText = imgSrc.split('/').pop().split('.')[0].replace(/-/g, ' ');
        return `
            <div class="project">
                <img src="${imgSrc}" alt="${altText}" class="img-project">
                <div class="overlay">
                    <button class="btn btn-primary">Voir la documentation</button>
                </div>
            </div>
        `;
    }).join('');
}

function nextGrid() {
    currentIndex = (currentIndex + 1) % projects.length;
    updateGrid();
}

function prevGrid() {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    updateGrid();
}


// Initialisation de la première grille
updateGrid();
