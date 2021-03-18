var loader = setInterval(function () {
    if(document.readyState !== "complete") return;
    clearInterval(loader);
  document.querySelector(".btn-find").addClass("animated bounce");
}, 300);

document.querySelector('#contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});


VANTA.BIRDS({
  el: "#birds",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundColor: 0x0,
  color1: 0xdaa520,
  color2: 0x0
});
