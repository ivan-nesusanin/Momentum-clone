const TIME = document.querySelector('.time');
import { showDate } from './date.js';
import { showGreeting } from './greeting.js';

function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  TIME.textContent = `${currentTime}`;
  showGreeting();
  showDate();
  setTimeout(showTime, 1000);
}
showTime();