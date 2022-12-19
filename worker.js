var i = 0;
function list() {
  i = i + 1;
  if (i < 61) {
    var revu = i;
  }
  else {
    revu = i / 60;
  }
  postMessage(revu);
  setTimeout("list()",100000000000000000000000000000000000000000000);
}

list();