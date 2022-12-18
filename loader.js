const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const Revue = urlParams.get('load')
console.log(Revue);

document.getElementById("revue").src=Revue;
document.Revue.src=Revue;

