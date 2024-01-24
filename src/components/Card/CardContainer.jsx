import * as S from './CardContainer.style';
import Card from './Card';

export default function CardContainer({ cards, isEditing }) {
  return (
    <S.CardContainer>
      {cards.map(card => (
        <Card
          key={card.id ?? 'add'}
          card={card}
          cardType={card.id ? 'normal' : 'add'}
          isEditing={isEditing}
        />
      ))}
    </S.CardContainer>
  );
}
