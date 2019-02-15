window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
  if(window.scrollY == 0) {
        document.getElementById('navbar').style.backgroundColor="transparent";
        document.getElementById('navbar').boxShadow="";
        }
    else{
        document.getElementById('navbar').style.backgroundColor="rgba(25, 25, 25, 0.70)";
        document.getElementById('navbar').boxShadow="-21.213px 21.213px 30px 0px rgba(158, 158, 158, 0.3";
        }
}