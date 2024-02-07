const targetDate = new Date("2024-04-28 11:30:00");

const updateCountdown = () => {
    const currentDate = new Date();
    const timeDiff = targetDate.getTime() - currentDate.getTime();
    let secondsDiff = Math.floor(timeDiff / 1000);
    let minutesDiff = Math.floor(secondsDiff / 60);
    let hoursDiff = Math.floor(minutesDiff / 60);
    let daysDiff = Math.floor(hoursDiff / 24);

    secondsDiff %= 60;
    minutesDiff %= 60;
    hoursDiff %= 24;

    // 문구 셋업
    const cdDays = document.getElementById("cddays");
    cdDays.textContent = daysDiff;
    const cdHours = document.getElementById("cdhours");
    cdHours.textContent = hoursDiff;
    const cdMin = document.getElementById("cdminutes");
    cdMin.textContent = minutesDiff;
    const cdSec = document.getElementById("cdseconds");
    cdSec.textContent = secondsDiff;

    setTimeout(updateCountdown, 1000);
}