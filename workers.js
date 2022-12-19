var i = 0;
const revul = [
"dieux seth"
, "GeoRenard - les humain"
, "GeoRenard - halloween"
, "GeoRenard - noel"
,"GeoRenard - les olympiques"];
const linkl = [
"/revue.html/?load=/local/page/georenard/dieu/egypte/seth.html"
,"revue.html/?load=/local/page/georenard/2022/olympique.html"
,"revue.html/?load=/local/page/georenard/2022/humain.html"
,"revue.html/?load=/local/page/georenard/2022/halloween2022.html"
,"revue.html/?load=/local/page/georenard/2022/noel2022.html"]


function list() {
  i = i + 1;
  var link = linkl[i]
  postMessage(link);
  setTimeout("list()",5);
}

list();