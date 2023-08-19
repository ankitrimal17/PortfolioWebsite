document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    var div03 = document.getElementById("musicDiv");
    div03.style.opacity = "1";
    div03.style.transform = "translateY(1000)";
  }, 5000); // Show after 5 seconds
});




var div = document.getElementById('div04');
var display = 0;

function audioPlayer() {
  if(display == 0)
  {
    div.style.display = 'block';
    display = 0;
  }
  else
  {
    div.style.display = 'none';
    display = 1;
  }
}




