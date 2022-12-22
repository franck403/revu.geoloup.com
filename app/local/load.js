const jwtw = sessionStorage.getItem("session");
if (jwtw != null){var worker = "true";}
else {var worker = "false"}
if (worker == "false") {
  document.getElementById("pay").remove();
  console.log("free session");
}
else if (worker == "true") {
  document.getElementById("free").remove();
  console.log("pay session");
}
else {
  console.log("a error was find");
}