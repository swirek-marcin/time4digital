// function openTab(event, tabName) {
//   let i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName('tabcontent');
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = 'none';
//   }
//   tablinks = document.getElementsByClassName('tablinks');
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(' active', '');
//   }
//   document.getElementById(tabName).style.display = 'block';
//   event.currentTarget.className += ' active';
// }

// openTab();

//Hamburger menu

const hamburger = document.querySelectorAll('.hamburger-icon');
const activeElements = document.querySelectorAll('.rwd');

hamburger.forEach(icon =>
  icon.addEventListener('click', () =>
    activeElements.forEach(element => element.classList.toggle('active'))
  )
);

//Slider

const slideListSmall = [
  {
    img: '../images/slider_big.jpg'
  },
  {
    img: '../images/hero2.jpg'
  }
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')];
// Interfejs
const time = 5000;
let active = 0;

// Implementacje

const changeSlide = () => {
  active++;
  if (active === slideListSmall.length) {
    active = 0;
  }
  image.src = slideListSmall[active].img;
};
let indexInterval = setInterval(changeSlide, time);

// Klawisze
const keyChangeSlide = e => {
  console.log(e.keyCode);
  if (e.keyCode == 37 || e.keyCode == 39) {
    clearInterval(indexInterval);
    e.keyCode == 37 ? active-- : active++;
    if (active === slideListSmall.length) {
      active = 0;
    } else if (active < 0) {
      active = slideListSmall.length - 1;
    }
    image.src = slideListSmall[active].img;
    indexInterval = setInterval(changeSlide, time);
  }
};

window.addEventListener('keydown', keyChangeSlide);

