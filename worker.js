function fmtMSS(s){return(s-(s%=60))/60+(9<s?':':':0')+s}

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
  sleep(60000)
  revu = fmtMSS(i);
  postMessage(revu);
  setTimeout("list()",100000000000000000000000000000000000000000000);
}

list();