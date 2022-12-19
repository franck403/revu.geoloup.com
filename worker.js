function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

var i = 0;
function list() {
  i = i + 1;
  if (i < 61) {
    var revu = i;
  }
  else {
    sleep(60000)
    revu = i / 60;
  }
  postMessage(revu);
  setTimeout("list()",100000000000000000000000000000000000000000000);
}

list();