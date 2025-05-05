let currentIndex = 0;

const projects = [
    [
        {
            src: "assets/imgs/Proxmox.png",
            doc: "documentation/documentation_projet_proxmox.pdf"
        },
        {
            src: "assets/imgs/SSL.png",
            doc: "documentation/SSL.pdf"
        },
        {
            src: "assets/imgs/haproxy.png",
            doc: "documentation/Haproxy.pdf"
        },
        {
            src: "assets/imgs/ad.png",
            doc: "documentation/Windows-Server-et-Active-Directory.pdf"
        }
    ],
    [
        {
            src: "assets/imgs/déckédex.png",
            doc: "documentation/deckedex.pdf"
        }
    ]
];

function updateGrid() {
    const grid = document.getElementById("projectGrid");
    grid.innerHTML = projects[currentIndex].map(project => {
        const altText = project.src.split('/').pop().split('.')[0].replace(/-/g, ' ');
        return `
            <div class="project">
                <img src="${project.src}" alt="${altText}" class="img-project">
                <div class="overlay">
                    <a href="${project.doc}" download class="btn btn-primary">Télécharger la documentation</a>
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

// Initialisation de la grille au chargement
updateGrid();
