const day = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`Januarry 01 ${currentYear + 1} 00:00:00`);

function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const daysConvert = Math.floor(diff / 1000 / 86400);
  const hoursConvert = Math.floor((diff / 1000 / 60 / 60) % 24);
  const minutesConvert = Math.floor((diff / 1000 / 60) % 60);
  const secondsConvert = Math.floor((diff / 1000) % 60);

  day.innerHTML = daysConvert;
  hours.innerText = hoursConvert;
  minutes.innerText = minutesConvert;
  seconds.innerText = secondsConvert;
}
updateCountdown();

setInterval(updateCountdown, 1000);
