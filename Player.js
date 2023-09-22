//definir variáveis do player
let xPlayer = 100;
let yPlayer = 370;
let vPlayer = 5;
let colisao = false;
let alturaPlayer = 30;
let comprimentoPlayer = alturaPlayer;
let raio = alturaPlayer / 2;
let meusPontos = 0;

// mostrar o Player
function mostrarPlayer(){
  image(imagemDoPlayer, xPlayer, yPlayer, comprimentoPlayer, alturaPlayer);
}

// movimentar o player na tela
function movimentarPlayer(){
  if(keyIsDown(UP_ARROW)){
    yPlayer -=5;
  }
  if(keyIsDown(DOWN_ARROW)){
    yPlayer +=5;
  }
  if(keyIsDown(LEFT_ARROW)){
    xPlayer -=5;
  }
  if(keyIsDown(RIGHT_ARROW)){
    xPlayer +=5;
  }
  yPlayer = constrain(yPlayer, 0, 370);
  xPlayer = constrain(xPlayer, 0, 570);
}

function verificarColisao(){
    for (let i = 0; i < imagemDosCarros.length; i++) {
  colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoDosCarros, alturaDosCarros, xPlayer, yPlayer, raio);
  if (colisao){
    voltarPosicaoInicial();
    somDeColisao.play();
    if(podePerderPontos()){
      meusPontos--;
    }
    }
  }
}
function voltarPosicaoInicial(){
  yPlayer = 390;
}

function incluirPlacar(){
  fill(color(255));
  rect(117, 5, 25, 25);
  textAlign(CENTER);
  fill(210,105,20);
  textSize(20);
  text(meusPontos, 130, 25);
  textSize(15);
  textStyle(BOLD);
  fill(0);
  text("PLACAR:", 70, 25);
}

function marcarPontos(){
  if (yPlayer <15){
   meusPontos++;
    voltarPosicaoInicial();
    somDoPonto.play();
  }
}

function podePerderPontos(){
  return meusPontos > 0;
}
  