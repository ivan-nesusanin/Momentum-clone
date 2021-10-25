import { getWeather } from "./weather.js";
import { NAME } from "./greeting_name.js";

export const language = document.querySelector('.language');

language.addEventListener('click', changeLang);


export function changeLang() {
  if (language.classList.contains('ru') === false) {
    language.classList.add('ru');
    NAME.placeholder = '[Введите имя]'
    getWeather('ru');
  } else {
    language.classList.remove('ru');
    NAME.placeholder = '[Enter name]'
    getWeather('en');
  }
}

