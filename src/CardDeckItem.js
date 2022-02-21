import React from 'react';
import { playCard } from './services/fetch-utils';
import './App.css';

export default function CardDeckItem({ card, refreshCardList }) {

  async function handleClick() {
    await playCard(card.id);
    await refreshCardList();
  }
  return (
    <div onClick={handleClick} className='cards-item'>
      <h1>{card.in_deck ? '✅' : '👀'} </h1>
      <h2>{card.name}</h2>
      <p>{card.type}</p>
      <p>{card.description}</p>

      <p>
        <img src={`https://storage.googleapis.com/ygoprodeck.com/pics/${card.image}.jpg`} />
      </p>
    </div>
  );
}
