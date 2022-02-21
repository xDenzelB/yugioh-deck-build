import React, { useEffect, useState } from 'react';
import CardList from './CardList';
import { getCardsList, searchCards } from './services/fetch-utils';

export default function SearchPage() {
  const [name, setName] = useState('');
  const [cards, setCards] = useState([]);
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 3;
  const num = perPage;
  const offset = perPage * page;


  async function handleCardSubmit(e) {
    e.preventDefault();
    const card = await searchCards(name, num, offset);

    setResults(card);
      
    await refreshCardList();
  }

  async function refreshCardList() {
    const personalCards = await getCardsList();

    setCards(personalCards);
  }

  useEffect(() => {
  
    refreshCardList();
  }, []);

  function isOnCardList(api_id) {
    const match = cards.find(item => Number(item.api_id) === Number(api_id));

    return Boolean(match);
  }
  console.log('My Cards', cards);
  return (
    <div>
      <h2>Current Page {page}</h2>
      <button disabled={page <= 1} onClick={() => setPage(page - 1)}>Previous</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
      <form onSubmit={handleCardSubmit}>
        <input value={name} onChange={e => setName(e.target.value)} />
        <button>Search by Name</button>

      </form>
      <section>
          Your results:
        <CardList cards={results} isOnCardList={isOnCardList} refreshCardList={refreshCardList} />
      </section>
    </div>
  );
}
