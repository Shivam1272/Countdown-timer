
const daysel = document.getElementById('days');
const hoursel = document.getElementById('hours');
const minsel = document.getElementById('mins');
const secondsel = document.getElementById('seconds');

const newYear = '1 jan 2024';


function countdown() {

    const newYearsDate = new Date(newYear);
    const currentDate = new Date();

    const totalseconds = Math.floor(newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = (Math.floor(totalseconds / 3600) % 24);
    const mins = (Math.floor(totalseconds / 60) % 60);
    const seconds = Math.floor(totalseconds % 60);

    daysel.innerHTML = days;
    hoursel.innerHTML = fomatTime(hours);
    minsel.innerHTML = fomatTime(mins);
    secondsel.innerHTML = fomatTime(seconds);
}

function fomatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

countdown();
setInterval(countdown, 1000);
