
const data = JSON.parse(localStorage.getItem("datos"))

let email = data.email
let phone = data.phone
let cell = data.cell

var mail = document.getElementById("dataMail");
mail.innerHTML += email
var tel = document.getElementById("dataPhone");
tel.innerHTML += phone
var cel = document.getElementById("dataCell");
cel.innerHTML += cell

