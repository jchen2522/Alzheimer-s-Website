/* fact generator */
var factList = [
  "\“The number of people living with the disease doubles every 5 years beyond age 65.\” - CDC",
  "\“Younger people may get Alzheimer’s disease, but it is less common.\” - CDC",
  "Risk: Very Common (over 3 million annual cases in the US)",
  "Symptoms often begin years before diagnosis"
]

var fact = document.getElementById("fact");
var clickMe = document.getElementById("clickMe");
var count = 0;

if (clickMe){
  clickMe.addEventListener("click", displayFact);
}

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count=0;
  }
}
