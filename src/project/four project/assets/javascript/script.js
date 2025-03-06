function updateHours() {
  let now = new Date();
  let hours = now.getHours().toString().padStart(2, '0');
  let minutes = now.getMinutes().toString().padStart(2, '0');
  let seconds = now.getSeconds().toString().padStart(2, '0');
  let timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById('hours-real').textContent = timeString;
}

setInterval(updateHours, 1000);
updateHours();

