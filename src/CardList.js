import { useLocation } from 'react-router-dom';
import Cards from './Cards';
import CardDeckItem from './CardDeckItem';

export default function CardList({ cards, refreshCardList, isOnCardList }) {
  const location = useLocation();
  return (
    <div className='play-card-list'>
      {
        cards.map((playCard, i) => location.pathname.includes('name')
          ? <Cards key={playCard.name + i}
            cards={cards}
            isOnCardList={isOnCardList}
            refreshCardList={refreshCardList} />
          : <CardDeckItem
            key={cards.name}
            refreshCardList={refreshCardList}
            cards={cards} />)
      }
    </div>
  );
}
