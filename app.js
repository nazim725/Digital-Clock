const getclock=()=>{
let date=new Date;
let hours=date.getHours();
let min=date.getMinutes();
let second=date.getSeconds();
let timeFormet='AM';
// 1 digit er age 0 add kora
if(second<10){
    second='0'+ second
}
if(hours<10){
    hours="0"+hours;
}
if(min<10){
    min='0'+min;
}
// time format 12 raka and am or pm thik kora
if(hours==0){
    hours=12;
}
if(hours>12){
    hours=hours-12;
    timeFormet='PM'
}


  let weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  const day = weekday[date.getDay()];
  document.getElementById("day").innerText = day;
//   month add kora
const month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
const currentmonth = month[date.getMonth()];
document.getElementById('month').innerText=currentmonth;
// Year add kora

const year=date.getFullYear();
document.getElementById('year').innerText=year;


let time=`${hours}:${min}:${second} <small>${timeFormet}</small>`;
document.getElementById('clock').innerHTML=time;

setInterval(getclock,1000);
}

getclock()

