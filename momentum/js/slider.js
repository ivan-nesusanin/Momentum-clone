import {getTimeOfDay} from './greeting.js';

const BODY = document.querySelector('body');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
let randomNum;

export function getRandomNum(min, max) {
  randomNum = Math.round(Math.random() * (max - min) + min);
  return randomNum;
}
getRandomNum(1, 20);

function setBg(bgNum) {
  let timeOfDay = getTimeOfDay();
  if (String(bgNum).length === 1) {
    bgNum = String(bgNum).padStart(2, '0');
  }
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/ivan-nesusanin/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
  img.onload = () => {
    BODY.style.backgroundImage = `url(${img.src})`;
  };
  return img;
}
setBg(randomNum);

slideNext.addEventListener('click', getSlideNext);
function getSlideNext() {
  if (randomNum < 20) {
    randomNum++;
  } else {
    randomNum = 1;
  }
  setBg(randomNum);
}

slidePrev.addEventListener('click', getSlidePrev);
function getSlidePrev() {
  if (randomNum > 1) {
    randomNum--;
  } else {
    randomNum = 20;
  }
  setBg(randomNum);
}