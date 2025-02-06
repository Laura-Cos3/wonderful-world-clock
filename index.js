let losAngelesElement= document.queryselector("#los-angeles");
let losAngelesDateElement= losAngelesElement.querySelector(".date");
let losAngelesTimeElement= losAngelesElement.querySelector(".time");
let losAngelesTime= moment().tz("America/Los_Angeles);

losAngelesDateElement.innerHTML= losAngelesTime.format("Do MMMM YYYY");
losAngelesTimeElement.innerHTML= `${losAngelesTime.format("h:mm:ss") <small>${losAngelesTime.format("A")}</small>`;

let sydneyElement= document.queryselector("#sydney");
let sydneyDateElement= sydneyElement.querySelector(".date");
let sydneyTimeElement= sydneyElement.querySelector(".time");
let sydneyTime= moment().tz("Australia/Sydney);

sydneyDateElement.innerHTML= sydneyTime.format("Do MMMM YYYY");
sydneyTimeElement.innerHTML= `${sydneyTime.format("h:mm:ss") <small>${sydneyTime.format("A")}</small>`;

