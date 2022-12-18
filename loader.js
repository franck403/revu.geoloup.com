const queryString = window.location.search;
const Revue = document.getElementById("revue")
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const Revue = urlParams.get('load')
console.log(Revue);

document.Revue.src=(Revue);

