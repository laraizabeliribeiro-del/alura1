// Configuração do Canvas
const canvas = document.getElementById('monalisaCanvas');
const ctx = canvas.getContext('2d');

// Variáveis para rastreamento do mouse
let mouseX = canvas.width / 2;
let mouseY = canvas.height / 2;

// Cores originais da Mona Lisa
const colors = {
    pele: '#D4A574',
    peloEscuro: '#8B5A2B',
    olho: '#3D2817',
    branco: '#FFFAF0',
    cabelo: '#2C1810',
    roupa: '#4A3728',
    fundo: '#7CB342',
    verde: '#558B2F',
    azul: '#5E7C8B',
    terra: '#8B6F47'
};

// Rastreamento do mouse
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Função para desenhar o rosto
function desenharRosto() {
    // Rosto - forma oval
    ctx.fillStyle = colors.pele;
    ctx.beginPath();
    ctx.ellipse(300, 350, 120, 150, 0, 0, Math.PI * 2);
    ctx.fill();

    // Sombra no rosto (sombreamento)
    ctx.fillStyle = 'rgba(139, 90, 43, 0.2)';
    ctx.beginPath();
    ctx.ellipse(340, 380, 80, 100, 0, 0, Math.PI * 2);
    ctx.fill();
}

// Função para desenhar cabelo
function desenharCabelo() {
    ctx.fillStyle = colors.cabelo;
    
    // Cabelo de cima
    ctx.beginPath();
    ctx.ellipse(300, 250, 130, 90, 0, 0, Math.PI);
    ctx.fill();

    // Cabelo lateral esquerdo
    ctx.beginPath();
    ctx.moveTo(170, 300);
    ctx.quadraticCurveTo(150, 350, 160, 420);
    ctx.quadraticCurveTo(180, 400, 190, 350);
    ctx.closePath();
    ctx.fill();

    // Cabelo lateral direito
    ctx.beginPath();
    ctx.moveTo(430, 300);
    ctx.quadraticCurveTo(450, 350, 440, 420);
    ctx.quadraticCurveTo(420, 400, 410, 350);
    ctx.closePath();
    ctx.fill();
}

// Função para desenhar os olhos com rastreamento do mouse
function desenharOlhos() {
    // Olho esquerdo
    desenharOlho(250, 330, true);
    
    // Olho direito
    desenharOlho(350, 330, false);
}

function desenharOlho(x, y, isEsquerdo) {
    // Branco do olho
    ctx.fillStyle = colors.branco;
    ctx.beginPath();
    ctx.ellipse(x, y, 28, 35, 0, 0, Math.PI * 2);
    ctx.fill();

    // Calcular ângulo do mouse em relação ao olho
    const rect = canvas.getBoundingClientRect();
    const olhoX = rect.left + (x / canvas.width) * rect.width;
    const olhoY = rect.top + (y / canvas.height) * rect.height;
    
    const dx = mouseX - olhoX;
    const dy = mouseY - olhoY;
    const angle = Math.atan2(dy, dx);

    // Iris - Rastreamento do mouse
    const irisDistance = 15;
    const irisX = x + Math.cos(angle) * irisDistance;
    const irisY = y + Math.sin(angle) * irisDistance;

    ctx.fillStyle = colors.olho;
    ctx.beginPath();
    ctx.arc(irisX, irisY, 18, 0, Math.PI * 2);
    ctx.fill();

    // Pupila
    ctx.fillStyle = '#000000';
    const pupilaX = x + Math.cos(angle) * irisDistance;
    const pupilaY = y + Math.sin(angle) * irisDistance;
    ctx.beginPath();
    ctx.arc(pupilaX, pupilaY, 10, 0, Math.PI * 2);
    ctx.fill();

    // Reflexo de luz
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.beginPath();
    ctx.arc(pupilaX - 4, pupilaY - 4, 4, 0, Math.PI * 2);
    ctx.fill();

    // Sobrancelha
    ctx.strokeStyle = colors.peloEscuro;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.quadraticCurveTo(x - 20, y - 25, x + 20, y - 20);
    ctx.stroke();
}

// Função para desenhar o nariz
function desenharNariz() {
    ctx.strokeStyle = colors.peloEscuro;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(300, 350);
    ctx.quadraticCurveTo(305, 400, 300, 430);
    ctx.stroke();

    // Narina esquerda
    ctx.beginPath();
    ctx.arc(285, 425, 4, 0, Math.PI * 2);
    ctx.stroke();

    // Narina direita
    ctx.beginPath();
    ctx.arc(315, 425, 4, 0, Math.PI * 2);
    ctx.stroke();
}

// Função para desenhar a boca
function desenharBoca() {
    ctx.strokeStyle = '#A0644E';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.quadraticCurveTo(300, 500, 280, 510);
    ctx.stroke();

    ctx.beginPath();
    ctx.quadraticCurveTo(300, 500, 320, 510);
    ctx.stroke();

    // Sorriso enigmático
    ctx.strokeStyle = '#8B4545';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.quadraticCurveTo(300, 495, 320, 505);
    ctx.stroke();
}

// Função para desenhar as orelhas
function desenharOrelhas() {
    // Orelha esquerda
    ctx.fillStyle = colors.pele;
    ctx.beginPath();
    ctx.ellipse(170, 350, 25, 45, 0, 0, Math.PI * 2);
    ctx.fill();

    // Orelha direita
    ctx.beginPath();
    ctx.ellipse(430, 350, 25, 45, 0, 0, Math.PI * 2);
    ctx.fill();
}

// Função para desenhar a roupa
function desenharRoupa() {
    ctx.fillStyle = colors.roupa;
    
    // Corpo
    ctx.beginPath();
    ctx.moveTo(200, 480);
    ctx.lineTo(180, 750);
    ctx.lineTo(420, 750);
    ctx.lineTo(400, 480);
    ctx.closePath();
    ctx.fill();

    // Detalhe no peito
    ctx.strokeStyle = colors.peloEscuro;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.quadraticCurveTo(300, 500, 300, 600);
    ctx.stroke();
}

// Função para desenhar o fundo (paisagem)
function desenharFundo() {
    // Céu
    const skyGradient = ctx.createLinearGradient(0, 0, 0, 400);
    skyGradient.addColorStop(0, '#87CEEB');
    skyGradient.addColorStop(0.5, '#E0F6FF');
    skyGradient.addColorStop(1, '#8CBCCC');
    ctx.fillStyle = skyGradient;
    ctx.fillRect(0, 0, canvas.width, 400);

    // Rio/Água
    ctx.fillStyle = colors.azul;
    ctx.fillRect(0, 400, canvas.width, 100);

    // Paisagem de trás
    ctx.fillStyle = colors.verde;
    ctx.beginPath();
    ctx.moveTo(0, 400);
    ctx.quadraticCurveTo(150, 350, 300, 380);
    ctx.quadraticCurveTo(450, 350, 600, 400);
    ctx.lineTo(600, 200);
    ctx.lineTo(0, 200);
    ctx.closePath();
    ctx.fill();

    // Rochas/Detalhes no fundo
    ctx.fillStyle = colors.terra;
    ctx.beginPath();
    ctx.arc(100, 450, 30, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(500, 420, 25, 0, Math.PI * 2);
    ctx.fill();
}

// Função para desenhar mãos
function desenharMaos() {
    // Mão esquerda
    ctx.fillStyle = colors.pele;
    ctx.beginPath();
    ctx.ellipse(200, 550, 35, 50, -0.3, 0, Math.PI * 2);
    ctx.fill();

    // Dedos esquerda
    ctx.beginPath();
    ctx.ellipse(180, 520, 12, 25, 0.2, 0, Math.PI * 2);
    ctx.fill();

    // Mão direita
    ctx.fillStyle = colors.pele;
    ctx.beginPath();
    ctx.ellipse(400, 550, 35, 50, 0.3, 0, Math.PI * 2);
    ctx.fill();

    // Dedos direita
    ctx.beginPath();
    ctx.ellipse(420, 520, 12, 25, -0.2, 0, Math.PI * 2);
    ctx.fill();
}

// Função principal de desenho
function desenhar() {
    // Limpar canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Desenhar os elementos na ordem correta
    desenharFundo();
    desenharRoupa();
    desenharMaos();
    desenharCabelo();
    desenharRosto();
    desenharOrelhas();
    desenharNariz();
    desenharBoca();
    desenharOlhos(); // Os olhos por último para garantir que fiquem visíveis

    // Animar continuamente
    requestAnimationFrame(desenhar);
}

// Iniciar desenho
desenhar();
