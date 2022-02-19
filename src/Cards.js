import React from 'react';
import './App.css';
import { addToCardsList } from './services/fetch-utils';

export default function Cards({ card, refreshCardList, isOnCardList }) {
  const hasCard = isOnCardList(card.id);

  async function handleClick() {
    if (!hasCard) {
      const cardListItem = {
        name: card.name,
        api_id: card.id,
        type: card.type,
        image: card.card_image.id,
        description: card.desc,
      };
      await addToCardsList(cardListItem);
      await refreshCardList();
    }
  }
  return (
    <div
      title='card-item'
      onClick={handleClick}
      className={`card-item ${hasCard ? 'currentCard' : ''}`}>

      <h1>{hasCard && '❤️'}</h1>
      <h3>{card.name}</h3>
      <p>{card.desc}</p>
      <p>
        <img src={`https://storage.googleapis.com/ygoprodeck.com/pics/${card.id}.jpg`} />
      </p>

    </div>
  );
}
