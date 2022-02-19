import { useLocation } from 'react-router-dom';
import Cards from './Cards';
import CardDeckItem from './CardDeckItem';

export default function CardList({ cards, refreshCardList, isOnCardList }) {
  const location = useLocation();
  return (
    <div className='play-card-list'>
      {
        cards.map((card, i) => location.pathname.includes('SearchPage')
          ? <Cards key={card.name + i}
            card={card}
            isOnCardList={isOnCardList}
            refreshCardList={refreshCardList} />
          : <CardDeckItem
            key={card.name}
            refreshCardList={refreshCardList}
            card={card} />)
      }
    </div>
  );
}
