import { getDailyQuote } from './api';

const quoteOfTheDay = document.querySelector('.daily-quote');

const getQuote = async () => {
  try {
    const quoteText = await getDailyQuote();
    displayQuoteText(quoteText);
  } catch (err) {
    console.error(err);
  }
};

const displayQuoteText = ({ author, quote }) => {
  quoteOfTheDay.innerHTML = `<p class="daily-quote-text">${quote}</p>
    <h4 class="daily-quote-author">${author}</h4>`;
};
