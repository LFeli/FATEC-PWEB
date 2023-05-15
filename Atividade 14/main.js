let nameUser, emailUser, commentaryUser, responseYes, responseNo;

function send(){

    nameUser = document.quiz.elements[0].value;
    emailUser = document.getElementById("Email").value;
    commentaryUser = document.getElementById("Commentary").value;
    responseYes = document.getElementById('ResponseYes');
    responseNo = document.getElementById('ResponseNo');

    validationName(nameUser);
    validationEmail(emailUser);
    validationCommentary(commentaryUser);
    validationResponse(responseYes, responseNo);
}

function validationName(value){
    if(value == "" || value.length < 10){
        alert("O campo nome precisa de no minímo 10 caracteres ou está vazio, por favor verifique o campo novamente.")
    }
}

function validationEmail(value){
    if(((value.indexOf("@") > -1) == false) || ((value.indexOf(".") > -1) == false)){
        alert("Informe um endereço de email válido, por favor verifique o campo novamente.")
    }
}

function validationCommentary(value){
    if(value.length < 20){
        alert("O campo comentário precisa de no minímo 20 caracteres, por favor verifique o campo novamente.")
    }
}

function validationResponse(valueYes, valueNo){
    if(valueYes.checked == false && valueNo.checked == false){
        alert("selecione uma das duas respotas, por favor.")
    } else{
        valueNo.checked == true ? alert("Que bom que você voltou a visitar esta página!") : alert("Volte sempre à esta página!");
    }
}

