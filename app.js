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
    image: 'images/budget.png',
    title: 'Wishyacht',
    info: ['frontend', 'backend', 'fullstack'],
    description:
    "a web application that allows users to rent and share their wishyacht's.",
    skills: ['react', 'redux', 'rails'],
  },
  {
    image: 'images/wishyacht.png',
    title: 'Budget mobile',
    info: ['Transactions', 'backend', '2022'],
    description:
      "a mobile application's that allows users to manage their budget and transactions.",
    skills: ['ruby', 'rails', 'bootstrap'],
  },
  {
    image: 'images/company.png',
    title: 'Companies 3D',
    info: ['frontend', 'Api', '2022'],
    description:
      'a web application that allows users to see the metrics of the top companies.',
    skills: ['react', 'redux', 'bootstrap'],
  },
  {
    image: 'images/space.png',
    title: 'Space travellers',
    info: ['pair', 'APIs', '2022'],
    description:
      'Basic app for doing some reservations.',
    skills: ['react', 'redux', 'bootstrap'],
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
    title: 'Wishyacht',
    info: ['frontend', 'backend', 'fullstack'],
    description:
      'This is a Web application where users should sign in to rent a Yacht from a list then reserve it for a determined period, users can then see their reservations or cancel them.',
    skills: ['react', 'redux', 'rails'],
    image: 'images/budget.png',
    liveLink: 'see live',
    sourceLink: 'see source',
  },
  {
    title: 'Budget App',
    info: ['facebook', 'full stack dev', '2015'],
    description:
      'The Ruby on Rails capstone project is about building a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    skills: ['ruby', 'rails', 'bootstrap'],
    image: 'images/wishyacht.png',
    liveLink: 'see live',
    sourceLink: 'see source',
  },
  {
    title: 'Companies 3D',
    info: ['frontend', 'Api', '2022'],
    description:
      "this is an informative/numeric web application that shows information about the canadian technical companies and their statistcs like the market cap and the trading status it also has search feature and for each company page it's unique root and responsive website",
    skills: ['react', 'redux', 'bootstrap'],
    image: 'images/company.png',
    sourceLink: 'see source',
  },
  {
    title: 'Space hub',
    info: ['pair', 'APIs', '2022'],
    description:
      'A web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions',
    skills: ['react', 'redux', 'bootstrap'],
    image: 'images/space.png',
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
