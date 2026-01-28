const teams = [
  { name: "Arsenal", primaryColor: "#EF0107", secondaryColor: "#FFFFFF" },
  { name: "Man City", primaryColor: "#6CABDD", secondaryColor: "#FFFFFF" },
  { name: "Aston Villa", primaryColor: "#7A263A", secondaryColor: "#95BFE5" },
  { name: "Liverpool", primaryColor: "#C8102E", secondaryColor: "#FFFFFF" },
  { name: "Chelsea", primaryColor: "#034694", secondaryColor: "#FFFFFF" },
  { name: "Brentford", primaryColor: "#D20000", secondaryColor: "#FFFFFF" },
  { name: "Newcastle", primaryColor: "#000000", secondaryColor: "#FFFFFF" },
  { name: "Sunderland", primaryColor: "#EB172B", secondaryColor: "#FFFFFF" },
  { name: "Everton", primaryColor: "#003399", secondaryColor: "#FFFFFF" },
  { name: "Brighton", primaryColor: "#0057B8", secondaryColor: "#FFFFFF" },
  { name: "Spurs", primaryColor: "#FFFFFF", secondaryColor: "#132257" },
  { name: "Crystal Palace", primaryColor: "#1B458F", secondaryColor: "#C4122E" },
  { name: "Leeds United", primaryColor: "#FFFFFF", secondaryColor: "#1D428A" },
  { name: "Nottm Forest", primaryColor: "#DD0000", secondaryColor: "#FFFFFF" },
  { name: "West Ham", primaryColor: "#7A263A", secondaryColor: "#1BB1E7" },
  { name: "Burnley", primaryColor: "#6C1D45", secondaryColor: "#99D6EA" },
  { name: "Man United", primaryColor: "#DA291C", secondaryColor: "#E5E7EB" },
{ name: "Fulham", primaryColor: "#FFFFFF", secondaryColor: "#E5E7EB" },
{ name: "bournemouth", primaryColor: "#DA291C", secondaryColor: "#E5E7EB" },
{ name: "Wolves", primaryColor: "#FDB913", secondaryColor: "#E5E7EB" },

];
let btn = document.querySelector('#predictBtn');
let body = document.querySelector("body");
let container = document.querySelector(".container");
let heading = document.querySelector("#matchupText");
btn.addEventListener('click',function(){
    let a = Math.floor(Math.random()*20);
    body.style.backgroundColor = teams[a].primaryColor;
    container.style.backgroundColor = teams[a].secondaryColor;
    heading.innerText = teams[a].name;

})
