window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
  if(window.scrollY == 0) {
        document.getElementById('navbr').style.backgroundColor="transparent";
        document.getElementById('navbr').style.color="black"
        }
    else{
        document.getElementById('navbr').style.backgroundColor="#202020";
        document.getElementById('navbr').style.color="white"
        }
}