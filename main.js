let mybutton = document.getElementById("myBtn");

// cuando se scrollea para abajo aparece el boton
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// cuando se hace clic va a la parte superior
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; // chrome, Firefox,
}
