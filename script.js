function enviar(){
    const nome = document.getElementById('nome').value 
    const assunto = document.getElementById('assunto').value
    const codigo = parseFloat(document.getElementById('codigo').value);
    const mensagem = `Olá STARFIC, gostaria de um orçamento para\n\nNome: ${nome} \n\nCores especificas: ${assunto} \nCódigo: ${codigo}   `
    const msg = encodeURIComponent(mensagem)
    window.open(`https://wa.me/5541991216822/?text=${msg}`)
}


const bgDivs = document.querySelectorAll('#s4 .bg');


const imagensFundo = [
    './Images/fi1.jpg',
    './Images/fi2.png',
    './Images/fi3.webp'
];


bgDivs.forEach((div, i) => {
    div.style.backgroundImage = `url('${imagensFundo[i]}')`;
});


let indice = 0;
bgDivs[indice].classList.add('active');


setInterval(() => {
    bgDivs.forEach(div => div.classList.remove('active'));
    indice = (indice + 1) % bgDivs.length;
    bgDivs[indice].classList.add('active');
}, 5000);
