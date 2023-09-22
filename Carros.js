// definir listas de posição Carros
let xCarros = [650, 300, 180, 100, 50, 120];
let yCarros = [40, 97, 150, 210, 265, 320];
let vCarros = [2.5, 5, 5, 4, 6, 2.5];
let comprimentoDosCarros = 50;
let alturaDosCarros = 40;

function mostrarCarros(){
  for (let i = 0; i < imagemDosCarros.length; i++) {
    image(imagemDosCarros[i], xCarros[i], yCarros[i], comprimentoDosCarros, alturaDosCarros);
  }
}

function movimentarCarros(){
  for (let i = 0; i < imagemDosCarros.length; i++) {
   xCarros[i] -= vCarros[i];
  }
}

function voltarPosicaoInicialDosCarros(){
  for(let i = 0; i < imagemDosCarros.length; i++){
    if (passouTodaATela(xCarros[i]))
      xCarros[i] = 600;
  }
}

function passouTodaATela(xCarros){
  return xCarros < -50;
}

