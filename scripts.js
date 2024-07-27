const switchElement = document.querySelector('.switch')

switchElement.addEventListener('click', () => {
  document.body.classList.toggle('dark')
})


const button = document.getElementById('hamButton');
const icon = button.querySelector('i');

button.addEventListener('click', () => {
  if (icon.classList.contains('fa-bars')) {
    icon.classList.replace('fa-bars', 'fa-arrow-left');
  } else {
    icon.classList.replace('fa-arrow-left', 'fa-bars');
  }
});