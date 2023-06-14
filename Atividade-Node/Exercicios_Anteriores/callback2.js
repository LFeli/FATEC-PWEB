function exibeMensagemNaOrdem(mensagem, callback) {
  console.log(mensagem);
  callback();
}
//executando

exibeMensagemNaOrdem(
  " \n\t Essa é a primeira mensagem exibida na ordem ",
  function () {
    console.log("\n\t Essa é a segunda mensagem exibida na ordem\n\n");
  }
);
