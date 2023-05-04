const state = document.getElementById("state")
const windowPage = document.getElementById("window")

function openWindow(){
    windowPage.style.backgroundImage = 'url(./assets/openWindow.png)'
    state.innerText = "Janela aberta"
}

function closeWindow(){
    windowPage.style.backgroundImage = 'url(./assets/closeWindow.png)'
    state.innerText = "Janela fechada"
}

function brokenWindow(){
    windowPage.style.backgroundImage = 'url(./assets/brokenWindow.png)'
    state.innerText = "Janela quebrada"
}