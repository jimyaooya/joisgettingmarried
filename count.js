var targetDate = new Date("2024-04-28 11:30:00");

function updateCountdown() {
    var currentDate = new Date();
    var timeDiff = targetDate.getTime() - currentDate.getTime();
    var secondsDiff = Math.floor(timeDiff / 1000);
    var minutesDiff = Math.floor(secondsDiff / 60);
    var hoursDiff = Math.floor(minutesDiff / 60);
    var daysDiff = Math.floor(hoursDiff / 24);

    hoursDiff %= 24;
    minutesDiff %= 60;
    secondsDiff %= 60;

    // Display the remaining time on the webpage
    var cdDays = document.getElementById("cddays");
    cdDays.textContent = daysDiff;
    var cdHours = document.getElementById("cdhours");
    cdHours.textContent = hoursDiff;
    var cdMin = document.getElementById("cdminutes");
    cdMin.textContent = minutesDiff;
    var cdSec = document.getElementById("cdseconds");
    cdSec.textContent = secondsDiff;

    let ddays = document.getElementById("ddays")
    ddays.textContent = `${daysDiff}일 남았습니다`

    // Update the countdown every second
    setTimeout(updateCountdown, 1000);
}