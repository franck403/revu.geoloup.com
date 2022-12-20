function redirect() {
   if (screen.width <= 950) {
      window.location = "/petit/index.html";
  }
}
if (screen.width < '1510px'){
   window.location.replace("https://revu.geoloup.com/petit/index.html");
}

var urlparm = new URLSearchParams(window.location.search).has('load')
var cookierevu = document.cookie.valueOf("lastr")
var cookielast = cookierevu.replace('lastr=','')
document.cookie = lastr;
document.cookie = lastr;
document.getElementById("revue").src="error.html";
var lastrevu = document.cookie.valueOf("lastr")
var laster = lastrevu.replace('lastr=','')
document.getElementById("revue").src=laster;
