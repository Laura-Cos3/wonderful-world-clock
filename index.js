let losAngelesElement= document.queryselector("#los-angeles");
let losAngelesDateElement= losAngelesElement.querySelector(".date");
let losAngelesTimeElement= losAngelesElement.querySelector(".time");
losAngelesDateElement.innerHTML= moment().format("Do MMMM YYYY");
losAngelesTimeElement.innerHTML= moment().format("hh:mm:ss a");
