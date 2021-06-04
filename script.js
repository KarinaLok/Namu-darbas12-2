"use strict";

var names = ["Jon Snow", "Cersei Lannister", "Daenerys Targaryen", "Theon Greyjoy", "Tyrion Lannister", "Arya Stark"];
alert("Pasirinkite personažą iš 6 galimų. Pirmas: " + names[0] + ", paskutinis: " + names[names.length -1] + ".");
console.log("Pirmas ir paskutinis personažas yra: " + names[0] + " ir " + names[names.length -1] + ", iš viso yra šeši.");
var number = prompt("Pasirinkite personažą įrašydami skaičių nuo 0 iki 6");
alert("Jūs pasirinkote " + names[number] + "!");
console.log("Jūsų personažas — " + names[number] + ".");
