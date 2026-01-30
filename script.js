function enviarPedido() {
    if (itemAtual) {
        // Substitua o 55... pelo seu número
        let fone = "5541999999999"; 
        let mensagem = encodeURIComponent(`Olá STARFIC, gostaria de um orçamento para: ${itemAtual}`);
        
        window.open(`https://wa.me/${fone}?text=${mensagem}`, '_blank');
    } else {
        alert("Selecione um item primeiro!");
    }
}