const targetDate = new Date("2024-04-28 11:30:00");

const updateCountdown = () => {
    const currentDate = new Date();
    const timeDiff = targetDate.getTime() - currentDate.getTime();
    const secondsDiff = Math.floor(timeDiff / 1000) % 60;
    const minutesDiff = Math.floor(secondsDiff / 60) % 60;
    const hoursDiff = Math.floor(minutesDiff / 60) % 24;
    const daysDiff = Math.floor(hoursDiff / 24);

    // Display the remaining time on the webpage
    const cdDays = document.getElementById("cddays");
    cdDays.textContent = daysDiff;
    const cdHours = document.getElementById("cdhours");
    cdHours.textContent = hoursDiff;
    const cdMin = document.getElementById("cdminutes");
    cdMin.textContent = minutesDiff;
    const cdSec = document.getElementById("cdseconds");
    cdSec.textContent = secondsDiff;

    const ddays = document.getElementById("ddays")
    ddays.textContent = `${daysDiff}일 남았습니다`

    // Update the countdown every second
    setTimeout(updateCountdown, 1000);
}