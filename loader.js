function load(){
    document.getElementById("revue").src=new URLSearchParams(window.location.search).get('load');
}