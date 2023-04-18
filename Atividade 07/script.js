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
    resetGame();

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
      
    jogadaMaquina = Math.floor((Math.random() * 3))

    if (jogadaMaquina == 0){
        papelBtn.style.opacity = '0.4';
        tesouraBtn.style.opacity = '0.4';
    } else if (jogadaMaquina == 1){
        pedraBtn.style.opacity = '0.4';
        tesouraBtn.style.opacity = '0.4';
    } else if (jogadaMaquina == 2){
        pedraBtn.style.opacity = '0.4';
        papelBtn.style.opacity = '0.4';
    }

    if ((jogadaMaquina == 0 && numJogada == 0) || (jogadaMaquina == 1 && numJogada == 1) || (jogadaMaquina == 2 && numJogada ==2)){
        tittle.innerHTML ="Houve um empate!!!"
        
        player.style.backgroundColor = "#1E1E1E"
        pc.style.backgroundColor = "#1E1E1E"
    }else if (jogadaMaquina == 0 && numJogada == 2 || jogadaMaquina == 2 && numJogada == 1 || jogadaMaquina == 1 && numJogada == 0){
        tittle.innerHTML ="Vitória do Computador :("
        
        player.style.backgroundColor = "#C74141"
        pc.style.backgroundColor = "#3781C5"
            
    } else if (jogadaMaquina == 2 && numJogada == 0|| jogadaMaquina == 1 && numJogada == 2 || jogadaMaquina == 0 && numJogada == 1){
        tittle.innerHTML ="Vitória do Jogador :)"

        player.style.backgroundColor = "#3781C5"
        pc.style.backgroundColor = "#C74141"
    }  
}

function resetGame(){
    pedraBtn.style.opacity = '1';
    papelBtn.style.opacity = '1';
    tesouraBtn.style.opacity = '1';

    pedraBtnPlayer.style.opacity = '1';
    papelBtnPlayer.style.opacity = '1';
    tesouraBtnPlayer.style.opacity = '1';
}