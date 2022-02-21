import { useEffect, useState } from 'react';
import CardList from './CardList';
import { getCardsList } from './services/fetch-utils';

export default function CardDeckPage() {
  const [cards, setCards] = useState([]);

  async function refreshCardList() {
    const personalCards = await getCardsList();

    setCards(personalCards);
  }

  useEffect(() => {
    refreshCardList();
  }, []);
  return (
    <div>
      <h1>My Cards</h1>

      <CardList cards={cards} refreshCardList={refreshCardList} />
    </div>
  );
}
