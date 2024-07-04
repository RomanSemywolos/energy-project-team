import axios from 'axios';
import { API_PROPERTIES } from './api/api-properties';

const quoteOfTheDay = document.querySelector('.daily-quote');

const { BASE_URL, QUOTE } = API_PROPERTIES;
axios.defaults.baseURL = BASE_URL;

const getQuote = async () => {
  try {
    const quoteText = await axios.get(QUOTE);
    displayQuoteText(quoteText.data);
  } catch (err) {
    console.error(err);
  }
};

const displayQuoteText = ({ author, quote }) => {
  quoteOfTheDay.innerHTML = `<p class="daily-quote-text">${quote}</p>
    <h4 class="daily-quote-author">${author}</h4>`;
};

getQuote();

export { getQuote };
