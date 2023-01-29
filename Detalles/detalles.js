

const info = JSON.parse(localStorage.getItem("datos"))
console.log(info)

let city = info.location.city
let country = info.location.country

var pais = document.getElementById("pais"); 
 pais.innerHTML += country
var ciudad = document.getElementById("ciudad"); 
ciudad.innerHTML += city 





