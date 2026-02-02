function enviar(){
    const nome = document.getElementById('nome').value 
    const assunto = document.getElementById('assunto').value
    const mensagem = `Olá STARFIC, gostaria de um orçamento para\n\nNome: ${nome} \nAssunto: ${assunto}`
    const msg = encodeURIComponent(mensagem)
    window.open(`https://wa.me/?text=${msg}`)
}

// Slider com fade real
const bgDivs = document.querySelectorAll('#s4 .bg');

// Coloque aqui as imagens que você vai usar
const imagensFundo = [
    './Images/fi1.jpg',
    './Images/fi2.png',
    './Images/fi3.webp'
];

// Inicializa cada camada com uma imagem
bgDivs.forEach((div, i) => {
    div.style.backgroundImage = `url('${imagensFundo[i]}')`;
});

// Começa com a primeira imagem ativa
let indice = 0;
bgDivs[indice].classList.add('active');

// Troca de imagem a cada 5 segundos
setInterval(() => {
    bgDivs.forEach(div => div.classList.remove('active'));
    indice = (indice + 1) % bgDivs.length;
    bgDivs[indice].classList.add('active');
}, 5000);
