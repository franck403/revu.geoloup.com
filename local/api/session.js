console.log("-----------------------------");

var keys = localStorage.getItem("computerid");
var keyid = sessionStorage.getItem("session");

if (keys != null) {
    console.log("computer logged")    
}
else {
    var key = Math.random();
    console.log("generating computer key");
    localStorage.setItem("computerid", key);
}

if (keyid != null) {
    console.log("session load")
}
else {
    var session = Math.random();
    console.log("generating session keys");
    sessionStorage.setItem("session", session);
}


console.log("-----------------------------");
console.log("finish generating the session");
console.log("-----------------------------");