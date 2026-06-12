# Mona Lisa Interativa 🎨

Um projeto interativo que recria a famosa pintura **Mona Lisa** de Leonardo da Vinci usando HTML5 Canvas e JavaScript puro.

## ✨ Características

- **Desenho em Canvas**: Toda a Mona Lisa é desenhada usando primitivas gráficas do Canvas HTML5
- **Olhos que Rastreiam o Mouse**: Os olhos da Mona Lisa seguem o movimento do seu cursor em tempo real
- **Cores Originais**: Paleta de cores baseada na obra original de Leonardo da Vinci
- **Responsivo**: Design adaptável para diferentes tamanhos de tela
- **Efeitos Visuais**: Degradês, sombras e reflexos de luz para maior realismo

## 🎯 Como Funciona

### Estrutura do Projeto

```
├── index.html      # Estrutura HTML
├── styles.css      # Estilos e design responsivo
├── script.js       # Lógica de desenho e interatividade
└── README.md       # Este arquivo
```

### Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos e responsividade
- **Canvas API**: Renderização gráfica
- **JavaScript**: Lógica de interatividade e rastreamento do mouse

## 🚀 Como Usar

1. **Clonar o repositório**:
```bash
git clone https://github.com/laraizabeliribeiro-del/alura1.git
cd alura1
```

2. **Abrir no navegador**:
   - Abra o arquivo `index.html` no seu navegador favorito

3. **Interagir**:
   - Mova o mouse sobre a imagem para ver os olhos da Mona Lisa rastrearem seu cursor!

## 🎨 Componentes Desenhados

- ✅ Fundo (Céu, paisagem e rio)
- ✅ Rosto (com sombreamento)
- ✅ Cabelo
- ✅ Olhos (com rastreamento interativo)
- ✅ Sobrancelhas
- ✅ Nariz
- ✅ Boca (sorriso enigmático)
- ✅ Orelhas
- ✅ Mãos
- ✅ Roupa/Corpo

## 💡 Funcionalidades Técnicas

### Rastreamento de Olhos
- Calcula o ângulo entre a posição dos olhos e o cursor do mouse
- Usa trigonometria (`Math.atan2`) para determinar a direção
- Move a íris seguindo o ângulo calculado
- Mantém limites visuais para realismo

### Elementos de Design
- **Gradientes**: Utilizados no fundo (céu) e corpo
- **Sombras**: Aplicadas para profundidade
- **Reflexos**: Pequenos pontos brancos nos olhos para realismo
- **Curvas Bézier**: Usadas para desenhar formas suaves (boca, cabelo)

## 🌍 Compatibilidade

- Chrome, Firefox, Safari, Edge (versões modernas)
- Funciona em dispositivos desktop e tablets
- Mobile: Otimizado mas melhor experiência em telas maiores

## 📝 Notas de Aprendizado

Este projeto demonstra:
- Uso avançado da API Canvas
- Geometria e trigonometria em programação
- Tratamento de eventos do mouse
- Renderização contínua com `requestAnimationFrame`
- Responsive design com CSS media queries

## 🎓 Projeto Alura

Este é um projeto educacional desenvolvido como parte do curso da Alura.

## 📄 Licença

Livre para uso educacional e pessoal.

---

**Divirta-se explorando a Mona Lisa interativa!** 🖱️✨
