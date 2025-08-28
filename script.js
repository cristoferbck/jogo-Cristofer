const cartas = ['3', '2', 'A', 'K', 'J', 'Q', '7', '6', '5', '4'];
let baralho = [];
let rodada = 0;

// Função para embaralhar o baralho
function embaralhar() {
    baralho = [...cartas, ...cartas]; // Usando duas vezes as cartas para ambos os jogadores
    for (let i = baralho.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [baralho[i], baralho[j]] = [baralho[j], baralho[i]]; // Troca os elementos
    }
}

// Função para distribuir as cartas
function distribuirCartas() {
    const player1Cards = baralho.slice(0, 3);
    const player2Cards = baralho.slice(3, 6);

    // Exibe as cartas para cada jogador
    document.getElementById('player1-cards').innerHTML = player1Cards.map(card => `<div class="card">${card}</div>`).join('');
    document.getElementById('player2-cards').innerHTML = player2Cards.map(card => `<div class="card">${card}</div>`).join('');
}

// Função para iniciar a rodada
function jogarRodada() {
    rodada++;
    embaralhar();
    distribuirCartas();
    document.getElementById('round-info').textContent = `Rodada: ${rodada}`;
    document.getElementById('play-btn').textContent = rodada >= 5 ? 'Fim de Jogo' : 'Jogar Próxima Rodada';
}