//Slider

const slideList = [
  {
    img: '../images/slider_big.jpg'
  },
  {
    img: '../images/slider_big_2.jpg'
  },
  {
    img: '../images/slider_big_3.png'
  }
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const leftController = document.querySelector('.slider-controller-left');
const rightController = document.querySelector('.slider-controller-right');
const sliderControllers = document.querySelectorAll('slider-controller');

// Interfejs
const time = 5000;
let active = 0;

// Implementacje

const changeSlide = () => {
  active++;
  if (active === slideList.length) {
    active = 0;
  }
  image.src = slideList[active].img;
};
let indexInterval = setInterval(changeSlide, time);

// Klawisze
const keyChangeSlide = e => {
  // console.log(e.keyCode);
  if (e.keyCode == 37 || e.keyCode == 39) {
    clearInterval(indexInterval);
    e.keyCode == 37 ? active-- : active++;
    if (active === slideList.length) {
      active = 0;
    } else if (active < 0) {
      active = slideList.length - 1;
    }
    image.src = slideList[active].img;
    indexInterval = setInterval(changeSlide, time);
  }
};

//Buttony
const btnChangeSlide = function(e) {
  if (e.type == 'click') {
    console.log(e.target.classList);
    clearInterval(indexInterval);
    e.target.classList.contains('fa-angle-right') ||
    e.target.classList.contains('slider-controller-right')
      ? active++
      : active--;
    if (active === slideList.length) {
      active = 0;
    } else if (active < 0) {
      active = slideList.length - 1;
    }
    image.src = slideList[active].img;
    indexInterval = setInterval(changeSlide, time);
  }
};

window.addEventListener('keydown', keyChangeSlide);
leftController.addEventListener('click', btnChangeSlide);
rightController.addEventListener('click', btnChangeSlide);
