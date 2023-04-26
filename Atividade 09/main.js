let list = [];

function run(){
    const numberOne = parseInt(document.getElementById("number1").value);
    const numberTwo = parseInt(document.getElementById("number2").value);
    const numberThree = parseInt(document.getElementById("number3").value);

    list.push(numberOne, numberTwo, numberThree)

    alert(`
        Maior entre eles: ${list.sort(crescent)[2]}
        Ordem crescente: ${list.sort(crescent)[0]}, ${list.sort(crescent)[1]}, ${list.sort(crescent)[2]}
    `)

    // reset array
    list = [];
}

function crescent (a,b){
    return (a - b)
}