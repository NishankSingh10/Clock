let deg=6;
let hr= document.getElementById("hr");
let min= document.getElementById("min");
let sec= document.querySelector("#sec");
console.log("hello");

setInterval(()=>{
    let day = new Date();
    let hh= day.getHours()*30;
    let mm= day.getMinutes()*deg;
    let ss= day.getSeconds()*deg;
    // console.log(ss);
    hr.style.transform=`rotateZ(${(hh)+(mm/12)})deg)`;
    min.style.transform=`rotateZ(${(mm/12)})deg)`;
    sec.style.transform=`rotateZ(${ss})deg)`;
},1000)

// setInterval(() => {
//     d = new Date(); //object of date()
//     hr = d.getHours();
//     min = d.getMinutes();
//     sec = d.getSeconds();
//     hr_rotation = 30 * hr + min / 2; //converting current time
//     min_rotation = 6 * min;
//     sec_rotation = 6 * sec;
  
//     hour.style.transform = `rotate(${hr_rotation}deg)`;
//     minute.style.transform = `rotate(${min_rotation}deg)`;
//     second.style.transform = `rotate(${sec_rotation}deg)`;
// }, 1000)
