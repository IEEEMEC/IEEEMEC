window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
  if(window.scrollY == 0) {
        document.getElementById('navbar').style.backgroundColor="transparent";
        document.getElementById('navbar').style.color="white"
        }
    else{
        document.getElementById('navbar').style.backgroundColor="#303030";
        document.getElementById('navbar').style.color="white"
        }
}