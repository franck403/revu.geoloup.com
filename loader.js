function load(){
    var url = new URL(document.URL);
    const params = url.searchParams;
    var srcurl = new.get('load');
    document.getElementById("revue").src=srcurl;
}