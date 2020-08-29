const toggle = document.querySelector('.toggle');
const links = document.querySelector('.links');

function toggleMenu() {
  if(links.classList.contains('active')) {
    links.classList.remove('active');
    toggle.querySelector('a').innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    links.classList.add('active');
    toggle.querySelector('a').innerHTML = "<i class='fas fa-times'></i>";
  }
}
toggle.addEventListener('click', toggleMenu, false);


const navbar = document.querySelector('.navbar');
window.onscroll = function () {
  if(window.pageYOffset > 100) {
    navbar.classList.remove('top');
  } else {
    navbar.classList.add('top');
  }
}