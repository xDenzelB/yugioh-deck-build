import React, { useEffect, useState } from 'react';
import CardList from './CardList';
import { getCardsList, searchCards } from './services/fetch-utils';

export default function SearchPage() {
  const [name, setName] = useState('');
  const [cards, setCards] = useState([]);
//   const [page, setPage] = useState(1);
//   const perPage = 20;

//   async function fetch() {
//     const from = page * perPage - perPage;
//     const to = page * perPage;
//     const playingCards = await searchCards;
//   }

  async function handleCardSubmit(e) {
    e.preventDefault();
    const allCards = await searchCards(name);

    setCards(allCards);
      
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
  console.log(cards);
  return (
    <div>
      <form onSubmit={handleCardSubmit}>
        <input value={name} onChange={e => setName(e.target.value)} />
        <button>Search by Name</button>

      </form>
      <section>
          Your results:
        <CardList cards={cards} isOnCardList={isOnCardList} refreshCardList={refreshCardList} />
      </section>
    </div>
  );
}
