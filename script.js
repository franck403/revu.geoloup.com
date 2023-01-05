function redirect() {
   if (screen.width <= 950) {
      window.location = "/petit/index.html";
  }
}
if (screen.width < '1510px'){
   window.location.replace("https://revu.geoloup.com/petit/index.html");
}
document.getElementById('last').innerHTML = "<a href='nouvelan.html'>Nouvel Ans</a>";