console.log("-----------------------------");

var keys = localStorage.getItem("computerid");
var keyid = sessionStorage.getItem("session");

if (keys = null) {
    var key = Math.random();
    console.log("generating computer key");
    localStorage.setItem("computerid", key);
    console.log("finish");
}
else {
    console.log("computer is logged");
}

if (keyid = null) {
    var session = Math.random();
    console.log("generating session keys");
    sessionStorage.setItem("session", session);
    console.log("finish");
}
else {
    console.log("session load")
}


console.log("-----------------------------");