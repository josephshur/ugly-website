//Modal

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

//"Bad" Modal

var badmodal = document.getElementById("mybadModal");

var badbtn = document.getElementById("mybadBtn");

var badspan = document.getElementsByClassName("badclose")[0];

badbtn.onclick = function() {
  badmodal.style.display = "block";
}

badspan.onclick = function() {
  badmodal2.style.display = "block";
  badmodal3.style.display = "block";
  badmodal4.style.display = "block";
}

//"Bad" Modal 2

var badmodal2 = document.getElementById("mybadModal2");

var badbtn2 = document.getElementById("mybadBtn2");

var badspan2 = document.getElementsByClassName("badclose2")[0];

badspan2.onclick = function() {
  badmodal2.style.display = "none";
  badmodal.style.display = "none";
}

//"Bad" Modal 3

var badmodal3 = document.getElementById("mybadModal3");

var badbtn3 = document.getElementById("mybadBtn3");

var badspan3 = document.getElementsByClassName("badclose3")[0];

badspan3.onclick = function() {
  badmodal3.style.display = "none";
  badmodal.style.display = "none";
}

//"Bad" Modal 4

var badmodal4 = document.getElementById("mybadModal4");

var badbtn4 = document.getElementById("mybadBtn4");

var badspan4 = document.getElementsByClassName("badclose4")[0];

badspan4.onclick = function() {
  badmodal4.style.display = "none";
  badmodal.style.display = "none";
}


//Random Clicker

let cookieCount = 0;
let clickPower = 1;

let cookieCounter = document.getElementById('cookie-counter');
let cookieClicker = document.getElementById('cookie-clicker');

cookieClicker.addEventListener("click", function() {
  cookieCount = cookieCount + clickPower;
  refreshCookieCount()
})

let refreshCookieCount = function() {
  cookieCounter.innerHTML = cookieCount;
}
