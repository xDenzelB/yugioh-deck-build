import React from 'react';
import { addToCardsList } from './services/fetch-utils';

export default function Cards({ cards, refreshCardList, isOnCardList }) {
  const hasCard = isOnCardList(cards.id);

  async function handleClick() {
    if (!hasCard) {
      const cardListItem = {
        name: cards.name,
        api_id: cards.id,
        type: cards.type,
        image: cards.image_url_small,
        description: cards.desc,
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
      <h3>{cards.name}</h3>
      <p>{cards.desc}</p>
      <p>
        <img src={cards.image_url_small ? `https://storage.googleapis.com/ygoprodeck.com/pics_small/${cards.image_url_small}` : 'https://www.placebear.com/200/300'} />
      </p>

    </div>
  );
}
