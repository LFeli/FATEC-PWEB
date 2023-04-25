let Lista = [];
let agesCount = null;
let searchCount = null;
let menCount = 0
let womanCount = 0;

function run(){
    const search = parseInt(document.getElementById("usersSearch").value)
    const age = parseInt(document.getElementById("userAge").value)
    const sexo = document.querySelector('input[name="sexo"]:checked').value

    Lista.push({search, age, sexo});
    sexo == "M" ? menCount++ : womanCount++;

    
    agesCount = Lista.map((Lista) => Lista.age);
    searchCount = Lista.map((Lista) => Lista.search);
    
    alert(`
        Idade média:  ${mediumAge(agesCount)}\n
        Menor idade:  ${minorAge()} \n
        Maior idade:  ${moreAge()} \n
        Quantidade que responderam péssimo: ${ratingBadCount(searchCount)} \n
        Porcentagem que responderam Ótimo e Bom:  ${ratingGoodPercentage(searchCount)}% \n
        Numero de homens que responderam:  ${menCount} \n
        Numero de mulheres que responderam:  ${womanCount} \n
    `);
}

function mediumAge(list){
    aux = 0;
    list.forEach(age => {
        aux += age;
    })

    return aux / list.length;
}

function minorAge(){
    return Math.min.apply(null, agesCount)
}

function moreAge(){
    return Math.max.apply(null, agesCount)
}

function ratingBadCount(list){
    aux = 0;
    list.forEach(search => {
        if(search == 1){
            aux++;
        }
    }); 
    return aux;
}

function ratingGoodPercentage(list){
    aux = 0;
    list.forEach(search => {
        if(search == 4 || search == 3){
            aux++;
        }
    }); 
    return ((aux / list.length) * 100).toFixed(2);
}