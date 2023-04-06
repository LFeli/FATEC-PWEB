var aluno, nota1, nota2, nota3, media;

aluno = prompt("Digite o nome do aluno: ");
nota1 = prompt("Digite a primeira nota do aluno: ");
nota2 = prompt("Digite a segunda nota do aluno: ");
nota3 = prompt("Digite a terceira nota do aluno: ");

media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;

alert("Média do aluno " + aluno + ": " + media.toFixed(2));