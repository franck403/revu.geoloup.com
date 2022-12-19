function fmtMSS(s){return(s-(s%=60))/60+(9<s?':':':0')+s}

var i = 0;
function list() {
  i = i + 1;
  if (i < 61) {
    var revu = i;
  }
  else {
    revu = fmtMSS(i);
  }
  postMessage(revu);
  setTimeout("list()",100000000000000000000000000000000000000000000);
}

list();