// Header
VANTA.BIRDS({
  el: "#birds",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundAlpha: 0.00,
  color1: 0xdaa520,
  color2: 0x0
});


// Skill bar
var skillbars = document.querySelectorAll('.skillbar-bar');
var offsetTop = document.querySelector('#skills').offsetTop;
window.addEventListener("scroll", function(){ 
var height = window.innerHeight;
console.log(window.scrollTop);
if(window.pageYOffset+height > offsetTop) {
  for (var i = 0; i < skillbars.length; i++) {
    console.log(skillbars[i].parentNode.dataset.percent);
    skillbars[i].style.width = skillbars[i].parentNode.dataset.percent;
  }
}
});

// Footer
document.querySelector('#contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});

let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
