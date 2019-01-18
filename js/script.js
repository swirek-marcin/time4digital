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

hamburger.forEach(icon => icon.addEventListener('click', () => activeElements.forEach(element => element.classList.toggle('active'))))