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
  const offset = perPage * (page - 1);


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
  
  return (
    <div>
      <h1>Make a Deck!</h1>
      <h2>Current Page {page}</h2>
      <button disabled={page <= 1} onClick={(e) => {setPage(page - 1);
        handleCardSubmit(e);}}>Previous</button>
      <button onClick={(e) => {setPage(page + 1);
        handleCardSubmit(e); }}>Next</button>
      <form onSubmit={handleCardSubmit}>
        <input value={name} onChange={e => setName(e.target.value)} />
        <button>Search by Name</button>

      </form>
      <section>
        <p>Your results:</p>
        <CardList cards={results} isOnCardList={isOnCardList} refreshCardList={refreshCardList} />
      </section>
    </div>
  );
}
