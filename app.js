const menu = document.querySelector('#icon');
const navbar = document.querySelector('nav');
menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('nav-toggle');
});

window.addEventListener('scroll', () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('nav-toggle');
});

// See project
document.getElementById('button').addEventListener('click', () => {
  document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close-button').addEventListener('click', () => {
  document.querySelector('.bg-modal').style.display = 'none';
});

document.getElementById('button-1').addEventListener('click', () => {
  document.querySelector('.bg-modal').style.display = 'flex';
});

document.getElementById('button-2').addEventListener('click', () => {
  document.querySelector('.bg-modal').style.display = 'flex';
});

document.getElementById('button-3').addEventListener('click', () => {
  document.querySelector('.bg-modal').style.display = 'flex';
});