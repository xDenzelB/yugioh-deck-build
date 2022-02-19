import React from 'react';
import { playCard } from './services/fetch-utils';

export default function CardDeckItem({ card, refreshCardList }) {

  async function handleClick() {
    await playCard(card.id);
    await refreshCardList();
  }
  return (
    <div onClick={handleClick} className='cards-item'>
      <h1>{card.in_deck ? '✅' : '👀'} </h1>
    </div>
  );
}
