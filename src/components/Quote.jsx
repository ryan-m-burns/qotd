import quotes from '../data/quotes';
import { useState } from 'react';

function Quote() {
  const [quote, setQuote] = useState('');
  const [quoteIndex, setQuoteIndex] = useState(-1);

  function getRandomQuote(e) {
    e.preventDefault();
    let index;

    do {
      index = Math.floor(Math.random() * quotes.length);
    } while (index === quoteIndex);

    setQuoteIndex(index);
    setQuote(quotes[index]);
  }
  return (
    <main>
      {quoteIndex === -1 ? (
        <p>Click the button to get a quote</p>
      ) : (
        <blockquote>
          <p>{quote.quote}</p>
          <footer>{quote.author}</footer>
        </blockquote>
      )}

      <button onClick={(e) => getRandomQuote(e)}>
        {quoteIndex === -1 ? 'Get Quote' : 'Get Another Quote'}
      </button>
    </main>
  );
}

export default Quote;
