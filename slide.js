const imagens = [
    'https://placehold.co/150x200',
    'https://placehold.co/150x200',
    'https://placehold.co/150x200'
];

let indiceImagemAtual = 0;

function atualizarSlide() {
    const slide = document.getElementById('slide');
    slide.src = imagens[indiceImagemAtual];
}

function proximaImagem() {
    indiceImagemAtual++;
    if (indiceImagemAtual >= imagens.length) {
        indiceImagemAtual = 0;
    }
    atualizarSlide();
}

function imagemAnterior() {
    indiceImagemAtual--;
    if (indiceImagemAtual < 0) {
        indiceImagemAtual = imagens.length - 1;
    }
    atualizarSlide();
}

function iniciarSlideAutomatico() {
    setInterval(proximaImagem, 2000); // Altere o valor do intervalo conforme necessário (em milissegundos)
}

document.addEventListener('DOMContentLoaded', function() {
    atualizarSlide();
    iniciarSlideAutomatico();
});