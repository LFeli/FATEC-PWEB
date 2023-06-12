// ----------- Menu Toggle
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
const body = document.querySelector('body')

for (const element of toggle) {
   element.addEventListener('click', function() {
      nav.classList.toggle('show')
      body.classList.toggle('stop')
   })
}

// ----------- menu click hidden items
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
   link.addEventListener('click', function() {
      nav.classList.remove('show')
      body.classList.remove('stop')
   })
}


// ----------- Forms Check
// inputs
const inputsTexts = document.querySelectorAll('#name, #company, #message');
const inptPhone = document.getElementById('phone')
const inptEmail = document.getElementById('email')


// Name, name company and message validation
function validarCampos(event) {
   let field = event.target;
   let fieldValue = field.value.trim();
 
   if (fieldValue === '') {
      field.setCustomValidity('Por favor, preencha este campo.');
   } else {
      field.setCustomValidity('');
   }
}
 
inputsTexts.forEach(function(field) {
   field.addEventListener('input', validarCampos);
});


// Tel validation
inptPhone.addEventListener('input', function() {
   let Telvalue = this.value;
   Telvalue = Telvalue.replace(/\D/g, ''); // Remove caracteres não numéricos

   validarTelefone(Telvalue);

   if (Telvalue.length > 10) {
      Telvalue = Telvalue.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
   } else if (Telvalue.length > 6) {
      Telvalue = Telvalue.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
   } else if (Telvalue.length > 2) {
      Telvalue = Telvalue.replace(/^(\d{2})(\d{0,4}).*/, '($1) $2');
   }

   this.value = Telvalue;
});

function validarTelefone(tel) {
   if (tel.length === 0) {
      inptPhone.setCustomValidity('Este campo é obrigatório.');
   } else if (!/^\d{10,11}$/.test(tel)) {
      inptPhone.setCustomValidity('Por favor, insira um número de telefone válido.');
   } else {
      inptPhone.setCustomValidity('');
   }
}

 // Email validation
function validarEmail(event) {
   var field = event.target;
   var email = field.value.trim();
 
   if (email === '') {
      field.setCustomValidity('Por favor, preencha este campo.');
   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      field.setCustomValidity('Por favor, insira um endereço de e-mail válido.');
   } else {
      field.setCustomValidity('');
   }
}
inptEmail.addEventListener('input', validarEmail);
 
// ----------- Forms 
const form = document.getElementById('form-contact');
   form.addEventListener("submit", ()=> {
      alert(
         "Obrigado! O formulário foi enviado com sucesso! em breve irei retornar seu contato."
      );
})