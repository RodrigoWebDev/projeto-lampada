const desligar = document.getElementById('desligar');
const ligar = document.getElementById('ligar');
const lamp = document.getElementById('lamp');

function ligarLam(){
    lamp.src = './imagem/imagem-ligada.jpg';
}

// Assim se cria uma nova funçao usando o addEventListener
ligar.addEventListener ('click', ligarLam );