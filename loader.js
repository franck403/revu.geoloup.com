const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const newUser = urlParams.get('load')
console.log(newUser);
