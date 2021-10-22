import {getTimeOfDay} from './greeting.js';

const BODY = document.querySelector('body');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
let randomNum;

function getRandomNum(min, max) {
  randomNum = Math.round(Math.random() * (max - min) + min);
  return randomNum;
}

function setBg() {
  let timeOfDay = getTimeOfDay();
  let bgNum = getRandomNum(1, 20);
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
setBg()

slideNext.addEventListener('click', getSlideNext);
function getSlideNext() {
  randomNum = getRandomNum(1, 20);
  if (randomNum <= 20) {
    randomNum++;
    setBg();
  } else {
    randomNum = 1;
    setBg();
  }
}

slidePrev.addEventListener('click', getSlidePrev);
function getSlidePrev() {
  randomNum = getRandomNum(1, 20);
  if (randomNum >= 1) {
    randomNum--;
    setBg();
  } else {
    randomNum = 20;
    setBg();
  }
}