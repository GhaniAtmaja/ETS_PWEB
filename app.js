const countdown = () => {
    const countDate = new Date('May 17, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    //Time work
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //calculate time
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;

    if(gap < 10000){
        //kalau abis countdownnya
    }
};

setInterval(countdown, 1000);