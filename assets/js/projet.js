let currentIndex = 0;
const projects = [
    [
        "assets/imgs/Proxmox.png",
        "assets/imgs/haproxy-keepalive.png",
        "assets/imgs/candygame.png",
        "assets/imgs/déckédex.png"
    ],
    [
        "assets/imgs/projet5.png",
        "assets/imgs/projet6.png",
        "assets/imgs/projet7.png",
        "assets/imgs/projet8.png"
    ],
    [
        "assets/imgs/projet9.png",
        "assets/imgs/projet10.png",
        "assets/imgs/projet11.png",
        "assets/imgs/projet12.png"
    ]
];

function updateGrid() {
    const grid = document.getElementById("projectGrid");
    grid.innerHTML = projects[currentIndex].map(imgSrc => 
        `<div class="project">
            <img src="${imgSrc}" class="img-project">
            <div class="overlay">
                <button class="btn-doc">Voir la documentation</button>
            </div>
        </div>`
    ).join('');
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
