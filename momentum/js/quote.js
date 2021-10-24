import { getRandomNum } from "./slider.js";

const QUOTE = document.querySelector('.quote');
const AUTHOR = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');

changeQuote.addEventListener('click', getQuotes);

async function getQuotes() {
  const quotes = 'quotes.json';
  const res = await fetch(quotes);
  const data = await res.json();
  const randomNum = getRandomNum(0, data.length)

  QUOTE.textContent = `${data[randomNum].quote}`;
  AUTHOR.textContent = `${data[randomNum].author}`;
}
getQuotes();