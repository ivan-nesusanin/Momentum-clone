export const GREETING = document.querySelector('.greeting');

export function showGreeting() {
  return GREETING.textContent = `Good ${getTimeOfDay()}`;
}

function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  if (hours >= 6 && hours < 12) {
    return 'morning';
  } else if (hours >= 12 && hours < 18) {
    return 'afternoon';
  } else if (hours >= 18 && hours < 24) {
    return 'evening';
  } else {
    return 'night';
  }
}

