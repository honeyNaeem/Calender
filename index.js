var date = document.getElementById("date")
var day = document.getElementById("day")
var month = document.getElementById("month")
var year = document.getElementById("year")

let today = new Date();

const weekDays = ["Sunday", "Monday", "Tuesday",
    "Wednesday", "Thursday", "Friday", "Saterday"];

const allMonths = ["January", "February", "March", "April", "May", "June",
    "July", "Auguest", "September", "October", "Nevember", "December"];

date.innerHTML = (today.getDate()<10?"0":"") + today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();


