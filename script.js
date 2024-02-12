setInterval(() => {
  d = new Date(); //object of date()
  hr = d.getHours();
  min = d.getMinutes();
  if(Number.parseInt(min)<10){
    min='0'+min
  }
  sec = d.getSeconds();
  if(Number.parseInt(sec)<10){
    sec='0'+sec
  }
  hr_rotation = 30 * hr + min / 2; //converting current time
  min_rotation = 6 * min;
  sec_rotation = 6 * sec;

  hour.style.transform = `rotate(${hr_rotation}deg)`;
  minute.style.transform = `rotate(${min_rotation}deg)`;
  second.style.transform = `rotate(${sec_rotation}deg)`;
  document.getElementById('hour1').innerHTML=`${hr} :`;
  document.getElementById('min1').innerHTML=`${min} :`;
  document.getElementById('sec1').innerHTML=sec;
}, 1000);
