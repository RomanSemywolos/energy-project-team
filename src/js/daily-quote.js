import axios from 'axios';
import { API_PROPERTIES } from './api/api-properties';

const quoteOfTheDay = document.querySelector('.daily-quote');

const { BASE_URL, QUOTE } = API_PROPERTIES;
axios.defaults.baseURL = BASE_URL;
const today = new Date().toISOString().split('T')[0];

const getNewQuote = async () => {
  const res = await axios.get(QUOTE);
  return {
    quote: res.data.quote,
    author: res.data.author,
    date: today,
  };
};

const displayQuoteText = ({ author, quote }) => {
  quoteOfTheDay.innerHTML = `<p class="daily-quote-text">${quote}</p>
    <h4 class="daily-quote-author">${author}</h4>`;
};

const displayQuote = async () => {
  const savedQuote = localStorage.getItem('quote');

  if (savedQuote) {
    const savedData = JSON.parse(savedQuote);
    const savedDate = savedData.date;
    if (savedDate === today) {
      displayQuoteText(savedData);
      return;
    }
  }

  const newQuote = await getNewQuote();
  localStorage.setItem('quote', JSON.stringify(newQuote));
  displayQuoteText(newQuote);
};

displayQuote();

export { displayQuote };
