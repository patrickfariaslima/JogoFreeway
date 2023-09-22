let botao;


function setup() {
  createCanvas(600, 400);
  botao = createButton('Iniciar Jogo');
  botao.position(width/2, height / 2);
  botao.mousePressed(startGame);
}  
function startGame(){
  trilhaDoJogo.play();
  trilhaDoJogo.loop();
  botao.remove();
} 
  

function draw() {
  background(imagemDaEstrada);
  mostrarPlayer();
  mostrarCarros();
  movimentarPlayer();
  movimentarCarros();
  voltarPosicaoInicialDosCarros();
  verificarColisao();
  incluirPlacar();
  marcarPontos();
  apresentacao();
  
}

