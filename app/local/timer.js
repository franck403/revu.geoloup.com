var i = 0;

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function list() {
  i = i + 1;
  revu = i;
  sleep(60000)
  postMessage(revu);
  setTimeout("list()",100000000000000000000000000000000000000000000);
}

list();