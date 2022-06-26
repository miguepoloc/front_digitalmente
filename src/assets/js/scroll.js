// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  Scroll()
}

// Get the navbar
const navbar = document.getElementById('navBar')
const home = document.getElementById('Home')
const section2 = document.getElementById('section-2')
// Get the offset position of the navbar
const positionSection = section2.offsetTop

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function Scroll () {
  if (window.pageYOffset >= positionSection) {
    alert('hola')
    navbar.classList.remove('bg-transparent')
    navbar.classList.add('bg-white')
  } else {
    navbar.classList.remove('bg-white')
    navbar.classList.add('bg-transparent')
  }
}
