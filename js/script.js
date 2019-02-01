//Hamburger menu

const hamburger = document.querySelectorAll('.hamburger-icon');
const activeElements = document.querySelectorAll('.rwd');

hamburger.forEach(icon =>
  icon.addEventListener('click', () =>
    activeElements.forEach(element => element.classList.toggle('active'))
  )
);

// hamburger.forEach(icon =>
//   icon.addEventListener('click', () =>
//     activeElements.forEach(element => console.log('dziala'))
//   )
// );
