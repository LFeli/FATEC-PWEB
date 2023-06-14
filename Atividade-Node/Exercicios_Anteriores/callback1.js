const prompt = require("prompt-sync")();
// Não requer de instalar
// npm install  prompt-sync
function saudacao(nome) {
  console.log("Olá " + nome + "!");
}
function entradaNome(callback) {
  var nome = prompt("\n\t Digite seu nome: ");
  callback(nome);
}
entradaNome(saudacao);
