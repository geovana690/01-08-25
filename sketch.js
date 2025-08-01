let fundo = 255; // cor de fundo inicial (branco)
let mostrarMensagem = false;

function setup() {
  createCanvas(500, 300);
  background(fundo);
  textAlign(CENTER, CENTER);
  textSize(20);

  // Botão: mudar cor de fundo
  document.getElementById("btnCorFundo").addEventListener("click", () => {
    fundo = color(random(255), random(255), random(255));
  });

  // Botão: mostrar/ocultar mensagem
  document.getElementById("btnMensagem").addEventListener("click", () => {
    mostrarMensagem = !mostrarMensagem;
  });

  // Botão: limpar o canvas
  document.getElementById("btnLimpar").addEventListener("click", () => {
    fundo = 255;
    mostrarMensagem = false;
  });

  // Botão: alerta
  document.getElementById("btnAlerta").addEventListener("click", () => {
    alert("Você clicou no botão de alerta!");
  });
}

function draw() {
  background(fundo);

  fill(0);
  text("Canvas com p5.js e addEventListener", width / 2, height / 2 - 40);

  if (mostrarMensagem) {
    fill(30, 144, 255);
    text("Mensagem ativada!", width / 2, height / 2 + 20);
  }
}
