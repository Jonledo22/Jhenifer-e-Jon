document.addEventListener('DOMContentLoaded', function() {
    const myButton = document.getElementById('myButton');
    
    myButton.addEventListener('click', function() {
        alert('Eu te amo, Obrigado por fazer parte da minha vida!');
    });
});

var imagens = [
    "img1.jpg.jpg",
    "img2.jpg.jpg",
    "Img3.jpg.jpg",
    "Img4.jpg,jpg",
    "Img5.jpg.jpg",
    "Img6.jpg.jpg",
    "Img7.jpg.jpg",
];

var indiceAtual = 0;

function trocar() {
    const imgElement = document.getElementById('figure');
    indiceAtual = (indiceAtual + 1) % imagens.length; // Incrementa o índice e reinicia ao atingir o final do array
    imgElement.src = imagens[indiceAtual];
}

function createStar() {
    const starContainer = document.querySelector('.star-container');
    const star = document.createElement('div');
    star.classList.add('star');

    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * 3 + 2}s`; // Velocidades variadas
    star.style.opacity = Math.random();

    starContainer.appendChild(star);

    // Remover a estrela após a animação
    star.addEventListener('animationend', () => {
        star.remove();
    });
}

setInterval(createStar, 300); // Adiciona uma nova estrela a cada 300ms
