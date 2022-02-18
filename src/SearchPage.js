import React, { useState } from 'react';
import CardList from './CardList';
import { searchCards } from './services/fetch-utils';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [cardList, setCardList] = useState([]);

  async function handleSearch(e) {
    e.preventDefault();

    const cards = await searchCards(searchQuery);

    setResults(cards);
  }
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
        <button>Search by Name</button>

      </form>
    </div>
  );
}
