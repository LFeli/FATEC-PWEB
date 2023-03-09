// Menu toggle

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
const body = document.querySelector('body')

const tes = document.querySelector('nav.show .menu')
console.log(tes);

for (const element of toggle) {
   element.addEventListener('click', function() {
      nav.classList.toggle('show')
      body.classList.toggle('stop')
      
   })
}

// menu click hidden items
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
   link.addEventListener('click', function() {
      nav.classList.remove('show')
      body.classList.remove('stop')
      tes.style.animation = "animation: slide1 0.6s ease-in-out forwards;"

   })
}

// switch themer
const html = document.querySelector('html')
const checkbox = document.querySelector('input[name=checkbox-slider]')

checkbox.addEventListener('change', () =>{
    html.classList.toggle('dark-mode')
})
