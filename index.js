let losAngelesElement= document.queryselector("#los-angeles");
let losAngelesDateElement= losAngelesElement.querySelector(".date");
let losAngelesTimeElement= losAngelesElement.querySelector(".time");
let losAngelesTime= moment();

losAngelesDateElement.innerHTML= losAngelesTime.format("Do MMMM YYYY");
losAngelesTimeElement.innerHTML= `${losAngelesTime.format("h:mm:ss") <small>${losAngelesTime.format("A")}</small>`;
