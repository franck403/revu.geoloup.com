var urlparm = new URLSearchParams(window.location.search).has('load')
var cookierevu = document.cookie.valueOf("lastr")
var cookielast = cookierevu.replace('lastr=','')
document.getElementById("revue").src=laster;
var db = {"b4t58tb9854tb89":"/local/page/georenard/2022/noel2022.html","789iongt66re":"/local/page/georenard/2022/humain.html","r89n5bt895t98y5":"/local/page/georenard/2022/olympique.html","jufehi554ufleisn8l49":"/local/page/georenard/dieu/egypte/seth.html","49jj3mp489ypm389":"/local/page/georenard/2022/halloween2022.html"}
var revudb = new URLSearchParams(window.location.search).get('load')
var revulink = db[revudb]
if (urlparm == true) {
    console.log("ok load parm si here");
    document.getElementById("revue").src=revulink;
    var lastr = "lastr=" + new URLSearchParams(window.location.search).get('load');
    var lastrd = lastr + "; expires=Thu, 01 Jan 1970 00:00:00 UTC"
    document.cookie = lastr;
    document.cookie = lastr;
} 
else if (cookielast == "") {
    document.getElementById("revue").src="https://revu.geoloup.com/error.html";
}
else {
    var lastrevu = document.cookie.valueOf("lastr")
    var laster = lastrevu.replace('lastr=','')
    var revulinkcookie = db[laster]
    document.getElementById("revue").src=revulinkcookie;
    
}
var audio = new Audio('loading.mp3');
audio.play();