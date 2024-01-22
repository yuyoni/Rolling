import Card from './Card';

export default function CardContainer({ cards }) {
  return (
    <div>
      {cards.map(card => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}
