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

const cards = [
  {
    image: 'images/c1d.png',
    title: 'Tonic',
    info: ['facebook', 'backend', '2015'],
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    skills: ['html', 'css', 'javascript'],
  },
  {
    image: 'images/c2d.png',
    title: 'Multi-Post Stories',
    info: ['facebook', 'backend', '2015'],
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    skills: ['html', 'css', 'javascript'],
  },
  {
    image: 'images/c3d.png',
    title: 'Facebook 360',
    info: ['facebook', 'backend', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript'],
  },
  {
    image: 'images/c4d.png',
    title: 'UBER navigation',
    info: ['facebook', 'backend', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript'],
  },
];

const work = document.querySelector('#portfolio');
function cardsBuilder(card, index) {
  const {
    image, title, info, description, skills,
  } = card;
  const infoHtml = info.map(
    (i) => `<li class="canopy">${i}</li>
    ${
  i === info[info.length - 1]
    ? ''
    : '<li><img src="images/Counter.png" alt="counter" /></li>'
}`,
  ).join('');
  const skillsHtml = skills.map(
    (s) => `<li class="highlight font-1">${s}</li>`,
  ).join('');
  work.innerHTML += `
  <div class="card card-${(index === 0 || index % 2 === 0) ? '1' : '2'}">
        <a href="#"
          ><img src="${image}" alt="Snapshoot-Portfolio" class="snapshot"
        /></a>
        <div class="${(index === 0 || index % 2 === 0) ? 'right' : 'left'}-cont">
          <h3 class="tonic flex0">${title}</h3>
          <ul class="ul-box1 flex0">
            ${infoHtml}
          </ul>
          <p class="description-2 flex0">
            ${description}
          </p>
          <ul class="ul-box2 flex0">
            ${skillsHtml}
          </ul>
          <button class="highlight-2 font-4 flex0 btns">
            See Project
          </button>
        </div>
      </div>
  `;
}

cards.forEach((card, index) => {
  cardsBuilder(card, index);
});

const popupCards = [
  {
    title: 'Tonic',
    info: ['facebook', 'backend', '2015'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. <span class='description-3'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt animi consequuntur consectetur voluptate accusantium facilis, fuga non minus, </span>",
    skills: ['html', 'css', 'javascript'],
    image: 'images/c1d.png',
    liveLink: 'see live',
    sourceLink: 'see source',
  },
  {
    title: 'Multi-Post Stories',
    info: ['facebook', 'full stack dev', '2015'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. <span class='description-3'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt animi consequuntur consectetur voluptate accusantium facilis, fuga non minus, </span>",
    skills: ['html', 'css', 'javascript'],
    image: 'images/c2d.png',
    liveLink: 'see live',
    sourceLink: 'see source',
  },
  {
    title: 'Facebook 360',
    info: ['facebook', 'backend', '2015'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. <span class='description-3'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt animi consequuntur consectetur voluptate accusantium facilis, fuga non minus, </span>",
    skills: ['html', 'css', 'javascript'],
    image: 'images/c3d.png',
    liveLink: 'see live',
    sourceLink: 'see source',
  },
  {
    title: 'Uber Navigation',
    info: ['UBER', ' Lead Developer', '2015'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. <span class='description-3'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt animi consequuntur consectetur voluptate accusantium facilis, fuga non minus, </span>",
    skills: ['html', 'css', 'javascript'],
    image: 'images/c4d.png',
    liveLink: 'see live',
    sourceLink: 'see source',
  },
];

const btns = document.querySelectorAll('.work button');
const bgModal = document.querySelector('.bg-modal');

function popUp(index) {
  const {
    title, info, description, skills, image,
  } = popupCards[index];

  const infoHtml = info
    .map(
      (i) => `
      <li class="canopy">${i}</li>
      ${
  i === info[info.length - 1]
    ? ''
    : '<li><img src="images/Counter.png" alt="counter" /></li>'
}
    `,
    )
    .join('');

  const skillsHtml = skills
    .map((s) => `<li class="highlight font-1">${s}</li>`)
    .join('');

  bgModal.innerHTML = `
  <div class="modal-content">
        <div class="modal-header">
          <h3 class="tonic">${title}</h3>
          <span class="close-button">+</span>
        </div>
        <ul class="ul-box1 flex0">
          ${infoHtml}
        </ul>
        <a href="#"
          ><img src="${image}" alt="Snapshoot-Portfolio" class="snapshot"
        /></a>
        <div class="flex-99">
          <div class="flex-98">
            <p class="description-2 flex0">
            ${description}
            </p>
          </div>
          <div>
            <ul class="ul-box2 flex0">
             ${skillsHtml}
            </ul>
            <hr class="solid-1">
            <div class="buttons">
              <button type="button" class="live-btn">
                see live
                <i class="fas fa-check"></i>
              </button>
              <button type="button" class="live-btn">
                see source
                <i class="fab fa-github"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
  `;
  bgModal.style.display = 'flex';
  document.querySelector('.close-button').addEventListener('click', () => {
    document.querySelector('.bg-modal').style.display = 'none';
  });
}

btns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    popUp(index);
  });
});
// Form Validation
const form = document.getElementById('form');
const error = document.querySelector('.error');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
  const message = [];
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    message.push('E-mail has to be in lowercase letters !!!');
  }
  if (message.length > 0) {
    error.innerText = message.join(', ');
  }
});

let formLocal = { name: '', email: '', message: '' };
if (localStorage.formLocal) {
  formLocal = JSON.parse(localStorage.formLocal);
  name.value = formLocal.name;
  email.value = formLocal.email;
  message.value = formLocal.message;
}
form.addEventListener('input', () => {
  localStorage.formLocal = JSON.stringify(formLocal);
  formLocal.name = name.value;
  formLocal.email = email.value;
  formLocal.message = message.value;
});
