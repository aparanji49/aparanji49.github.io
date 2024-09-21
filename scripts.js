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

function sendEmail(){
  Email.send({
Host : "smtp.gmail.com",
Username : "nsaiaparanji@gmail.com",
Password : "password",
To : 'them@website.com',
From : "you@isp.com",
Subject : "This is the subject",
Body : "And this is the body"
}).then(
message => alert(message)
);
}