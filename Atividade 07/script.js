let jogada;
let numJogada = null;
let jogadaMaquina = null;

const pedraBtn = document.getElementById("Pedra");
const papelBtn = document.getElementById("Papel");
const tesouraBtn = document.getElementById("Tesoura");

const pedraBtnPlayer = document.getElementById("PedraPly")
const papelBtnPlayer = document.getElementById("PapelPly")
const tesouraBtnPlayer = document.getElementById("TesouraPly")


const player = document.getElementById("player");
const pc = document.getElementById("pc");
const tittle = document.getElementById("chamada");

function jogar(opcao) {
    if (opcao == "PEDRA") {
        numJogada = 0;

        papelBtnPlayer.style.opacity = '0.4';
        tesouraBtnPlayer.style.opacity = '0.4';
    } else if (opcao == "PAPEL") {
        numJogada = 1;

        pedraBtnPlayer.style.opacity = '0.4';
        tesouraBtnPlayer.style.opacity = '0.4';
    } else if (opcao == "TESOURA") {
        numJogada = 2;

        pedraBtnPlayer.style.opacity = '0.4';
        papelBtnPlayer.style.opacity = '0.4';
    }
    
    alert("Jogador: escolhe " + opcao);
    
    jogadaMaquina = Math.floor((Math.random() * 3))
    console.log(`Numero do pc ${jogadaMaquina}`);
    console.log(`Numero do jogador ${numJogada}`);

    
    if (jogadaMaquina == 0){
        alert("Jogador: " + opcao + "\nComputador: PEDRA")
        papelBtn.style.opacity = '0.4';
        tesouraBtn.style.opacity = '0.4';
    } else if (jogadaMaquina == 1){
        alert("Jogador: " + opcao + "\nComputador: PAPEL")
        pedraBtn.style.opacity = '0.4';
        tesouraBtn.style.opacity = '0.4';
    } else if (jogadaMaquina == 2){
        alert("Jogador: " + opcao + "\nComputador: TESOURA")
        pedraBtn.style.opacity = '0.4';
        papelBtn.style.opacity = '0.4';
    }

    if ((jogadaMaquina == 0 && numJogada == 0) || (jogadaMaquina == 1 && numJogada == 1) || (jogadaMaquina == 2 && numJogada ==2)){
        tittle.innerHTML ="Houve um empate!!!"
        
        player.style.backgroundColor = "#1E1E1E"
        pc.style.backgroundColor = "#1E1E1E"
    }else if (jogadaMaquina == 0 && numJogada == 2 || jogadaMaquina == 2 && numJogada == 1 || jogadaMaquina == 1 && numJogada == 0){
        tittle.innerHTML ="Vitória do Computador :("
        
        player.classList.add('loser')
        pc.classList.add('winer')
            
    } else if (jogadaMaquina == 2 && numJogada == 0|| jogadaMaquina == 1 && numJogada == 2 || jogadaMaquina == 0 && numJogada == 1){
        tittle.innerHTML ="Vitória do Jogador :)"

        player.classList.add('winer')
        pc.classList.add('loser')
    }  
}