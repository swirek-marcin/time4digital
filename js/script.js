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

const slideList = [
  {
    img: '../images/hero_480.png',
    // textHeader: 'Witold Goj'
  },
  {
    img: '../images/hero_480.png',
    // textHeader: 'Drugi tekst'
  },
  {
    img: '../images/hero_480.png',
    // textHeader: 'Trzeci tekst'
  }
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')];
// Interfejs
const time = 2000;
let active = 0;

// Implementacje

const changeDot = () => {
  const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
  dots[activeDot].classList.remove('active');
  dots[active].classList.add('active');
};

const changeSlide = () => {
  active++;
  if (active === slideList.length) {
    active = 0;
  }
  image.src = slideList[active].img;
  // h1.textContent = slideList[active].textHeader;
  // changeDot();
};
let indexInterval = setInterval(changeSlide, time);

// Klawisze
const keyChangeSlide = e => {
  console.log(e.keyCode);
  if (e.keyCode == 37 || e.keyCode == 39) {
    clearInterval(indexInterval);
    e.keyCode == 37 ? active-- : active++;
    if (active === slideList.length) {
      active = 0;
    } else if (active < 0) {
      active = slideList.length - 1;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
    indexInterval = setInterval(changeSlide, time);
  }
};

window.addEventListener('keydown', keyChangeSlide);
