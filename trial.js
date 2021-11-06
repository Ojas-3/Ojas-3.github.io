//Get the button
var mybutton = document.getElementById("myBtn");
var myintro = document.getElementById("myIntro");
var myEdu = document.getElementById("Education");
var myCont = document.getElementById("Contact");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop = 0 || document.documentElement.scrollTop >= 1) {
    mybutton.style.display = "block";
    myintro.style.display = "block";
    myEdu.style.display = "block";
    myCont.style.display = "block";

  } else {
    mybutton.style.display = "none";
    myintro.style.display = "none";
    myEdu.style.display = "none";
    myCont.style.display = "none";

  }
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function topFunction1() {
  document.body.scrollTop = 950;
  document.documentElement.scrollTop = 950;
}

function topFunction2() {
  document.body.scrollTop = 1800;
  document.documentElement.scrollTop = 1800;
}

function topFunction3() {
  document.body.scrollTop = 3100;
  document.documentElement.scrollTop = 3100;
}