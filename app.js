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
// document.getElementById('button').addEventListener('click', () => {
//   document.querySelector('.bg-modal').style.display = 'flex';
// });

// document.querySelector('.close-button').addEventListener('click', () => {
//   document.querySelector('.bg-modal').style.display = 'none';
// });

// document.getElementById('button-1').addEventListener('click', () => {
//   document.querySelector('.bg-modal').style.display = 'flex';
// });

// document.getElementById('button-2').addEventListener('click', () => {
//   document.querySelector('.bg-modal').style.display = 'flex';
// });

// document.getElementById('button-3').addEventListener('click', () => {
//   document.querySelector('.bg-modal').style.display = 'flex';
// });

const cards = [
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
  } = cards[index];
  const [info1, info2, info3] = info;
  const [skill1, skill2, skill3] = skills;

  bgModal.innerHTML = `
  <div class="modal-content">
        <div class="modal-header">
          <h3 class="tonic">${title}</h3>
          <span class="close-button">+</span>
        </div>
        <ul class="ul-box1 flex0">
          <li class="canopy">${info1}</li>
          <li><img src="images/Counter.png" alt="counter" /></li>
          <li class="light">${info2}</li>
          <li><img src="images/Counter.png" alt="counter" /></li>
          <li class="light">${info3}</li>
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
              <li class="highlight font-1">${skill1}</li>
              <li class="highlight font-2">${skill2}</li>
              <li class="highlight font-3">${skill3}</li>
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