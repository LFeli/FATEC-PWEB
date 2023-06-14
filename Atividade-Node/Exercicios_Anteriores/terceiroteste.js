/* Comando para rodar o programa: npm nomePrograma.exteçao 
 e se tiver argumentos nomePrograma.exteçao 1 2 3 4 ...*/

var soma = 0;
for (var i = 2; i <= process.argv.length - 1; i++)
  soma = soma + Number(process.argv[i]);
console.log("soma = " + soma);
