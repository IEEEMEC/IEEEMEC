/* Loader */
window.onload = function () {
  document.getElementById("loader").classList.add("se-pre-con");
}

window.onscroll = function () { myFunction() };

// Get the header
let header = document.getElementById("navbar");

// Get the offset position of the navbar
let sticky = header.offsetTop;

function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    header.classList.remove("static");
  } else {
    header.classList.add("static");
    header.classList.remove("sticky");
  }
}


function hamBurger() {
  let x = document.getElementById("navbar");
  if (x.classList.contains("visible")) {
    x.classList.remove("visible");
  } else {
    x.classList.add("visible");
  }
}
/*
function carousel() {
  let a = window.getComputedStyle(document.getElementById("one"));
  let b = window.getComputedStyle(document.getElementById("two"));
  let c = window.getComputedStyle(document.getElementById("three"));
  if (a.display == "block") {
    a.display = "none";
    b.display = "block";
  } else if (b.display == "block") {
    b.display = "none";
    c.display = "block";
  } else {
    c.display = "none";
    a.display = "block";
  }
}

let myCar = setInterval(carousel, 1000);
*/