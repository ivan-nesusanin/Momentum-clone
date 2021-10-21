const DATE = document.querySelector('.date');

export function showDate() {
  const date = new Date();
  const options = {weekday: 'long', month: 'long', day: 'numeric'};
  const currentDate = date.toLocaleDateString('en-US', options);
  DATE.textContent = `${currentDate}`;
}
// showDate();