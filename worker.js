var i = 0;

function fmtMSS(s){return(s-(s%=60))/60+(9<s?':':':0')+s}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function sec() {
  i = i + 1;
  revu = i;
  setTimeout("sec()",60);
  return revu
}

function min() {
  i = i + 1;
  sleep(60000)
  revu = i;
  return
}

function list() {
  revu = fmtMSS(i);
  postMessage(revu);
  setTimeout("list()",100000000000000000000000000000000000000000000);
}

list();