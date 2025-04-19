let currentIndex = 0;

const projects = [
    [
        {
            src: "assets/imgs/Proxmox.jpg",
            doc: "documentation/documentation_projet_proxmox.pdf"
        },
        {
            src: "assets/imgs/haproxy-keepalived.jpg",
            doc: "documentation/documentation_projet_proxmox3.pdf"
        },
        {
            src: "assets/imgs/déckédex.jpg",
            doc: "documentation/documentation_projet_proxmox2.pdf"
        },
        {
            src: "assets/imgs/déckédex.jpg",
            doc: "documentation/documentation_projet_proxmox1.pdf"
        }
    ],
    [
        {
            src: "assets/imgs/projet5.jpg",
            doc: "documentation/documentation_projet5.pdf"
        },
        {
            src: "assets/imgs/projet6.jpg",
            doc: "documentation/documentation_projet6.pdf"
        },
        {
            src: "assets/imgs/projet7.jpg",
            doc: "documentation/documentation_projet7.pdf"
        },
        {
            src: "assets/imgs/projet8.jpg",
            doc: "documentation/documentation_projet8.pdf"
        }
    ],
    [
        {
            src: "assets/imgs/projet9.jpg",
            doc: "documentation/documentation_projet9.pdf"
        },
        {
            src: "assets/imgs/projet10.jpg",
            doc: "documentation/documentation_projet10.pdf"
        },
        {
            src: "assets/imgs/projet11.jpg",
            doc: "documentation/documentation_projet11.pdf"
        },
        {
            src: "assets/imgs/projet12.jpg",
            doc: "documentation/documentation_projet12.pdf"
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
