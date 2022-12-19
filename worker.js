var i = 0;
function list() {
  i = i + 1;
  var revu = i
  postMessage(revu);
  setTimeout("list()",100000000000000000000000000000000000000000000);
}

list();