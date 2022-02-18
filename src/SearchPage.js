import React, { useState } from 'react';
import CardList from './CardList';
import { getCardsList, searchCards } from './services/fetch-utils';

export default function SearchPage() {
  const [name, setName] = useState('');
  const [results, setResults] = useState([]);
  const [cardList, setCardList] = useState([]);

  async function handleCardSubmit(e) {
    e.preventDefault();
    const cards = await searchCards(name);

    setResults(cards);
      
  }

  async function refreshCardList() {
      const personalCards = await getCardsList();

      setCardList(personalCards);
  }
  return (
    <div>
      <form onSubmit={handleCardSubmit}>
        <input value={name} onChange={e => setName(e.target.value)} />
        <button>Search by Name</button>

      </form>
      <section>
          Your results:
        <CardList cards={results} />
      </section>
    </div>
  );
}
