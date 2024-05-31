
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}

function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "nav-container") {
      x.className += " responsive";
    } else {
      x.className = "nav-container";
    }
  }

