import React from 'react';
import { playCard } from './services/fetch-utils';

export default function CardDeckItem({ cards, refreshCardList }) {

  async function handleClick() {
    await playCard(cards.id);
    await refreshCardList();
  }
  return (
    <div onClick={handleClick} className='cards-item'>
      <h1>{cards.in_deck ? '✅' : '👀'} </h1>
    </div>
  );
}
