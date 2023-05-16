function run(){
    // confirmation for open new window
    let confirmation = confirm("Você deseja abrir a janela referente ao curso?");
    
    if(!confirmation){
        return
    }

    // logic for windows
    let course = document.getElementById("courses").value;
    standardWindow = window.open(`http://fatecsorocaba.edu.br/curso_${course}.asp`, "width = 600", "height = 300");
}