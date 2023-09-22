//definir as imagens e fazer preload antes de iniciar

let imagemDaEstrada;
let imagemDoPlayer;
let ImagemDoCarro1;
let ImagemDoCarro2;
let ImagemDoCarro3;

//definir sons

let trilhaDoJogo;
let somDeColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("Imagens/estrada.png")
  imagemDoPlayer = loadImage("Imagens/ator-1.png")
  ImagemDoCarro1 = loadImage("Imagens/carro-1.png")
  ImagemDoCarro2 = loadImage("Imagens/carro-2.png")
  ImagemDoCarro3 = loadImage("Imagens/carro-3.png")
  imagemDosCarros = [ImagemDoCarro1, ImagemDoCarro2, ImagemDoCarro3, ImagemDoCarro1, ImagemDoCarro2, ImagemDoCarro3];
  trilhaDoJogo = loadSound("Sons/trilha.mp3");
  somDeColisao = loadSound("Sons/colidiu.mp3");
  somDoPonto = loadSound("Sons/pontos.wav");
}

function apresentacao(){
  text("Use as setinhas para atravessar sua vaquinha :)", 350, 25);
}