const TIME = document.querySelector('.time');
import {showDate} from './date.js'

function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  TIME.textContent = `${currentTime}`;
  showDate()
  setTimeout(showTime, 1000);
}
showTime();