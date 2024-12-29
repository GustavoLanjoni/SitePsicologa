document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('nav ul');

    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('show');
    });
});


// Validação simples do formulário
const form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Sua mensagem foi enviada com sucesso!');
    form.reset();
});


// Função para gerar as bolas flutuantes
function createFloatingBalls() {
    const container = document.querySelector('.floating-balls');

    // Aumentar o número de bolas geradas
    const numBalls = Math.floor(Math.random() * 30) + 20; // Entre 20 e 50 bolas

    for (let i = 0; i < numBalls; i++) {
        const ball = document.createElement('div');
        ball.classList.add('ball');

        // Definir um tamanho aleatório para cada bola
        const size = Math.floor(Math.random() * 30) + 20; // Entre 20px e 50px
        ball.style.width = `${size}px`;
        ball.style.height = `${size}px`;

        // Definir uma posição aleatória para cada bola
        const xPos = Math.random() * 100; // Largura do contêiner
        const yPos = Math.random() * 100; // Altura do contêiner
        ball.style.left = `${xPos}%`;
        ball.style.top = `${yPos}%`;

        // Definir uma animação de movimento suave
        ball.style.animationDuration = `${Math.random() * 10 + 5}s`;

        container.appendChild(ball);
    }
}

// Executar a função quando o conteúdo da página for carregado
window.onload = createFloatingBalls;
