const hourSleepBtn = document.querySelector("#hourSleepBtn");
const hoursList = document.querySelector("#hoursList");
const currentDate = new Date();
const newDate = new Date();

hourSleepBtn.addEventListener("click", getTimeSleep, { once: true });

function getTimeSleep() {
  for (let i = 1; i <= 6; i++) {
    newDate.setTime(currentDate.getTime() + 90 * i * 60 * 1000);
    const hourBox = document.createElement("li");
    hourBox.innerText =
      newDate.getMinutes() < 10
        ? `${newDate.getHours()}:0${newDate.getMinutes()}`
        : `${newDate.getHours()}:${newDate.getMinutes()}`;
    hoursList.appendChild(hourBox);
  }
}
