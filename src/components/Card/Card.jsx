import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './Card.style';
import RelationBadge from './RelationBadge';

export default function Card({ card, cardType }) {
  const { sender, profileImageURL, relationship, content, font, createdAt } =
    card;

  const formattedDate = new Date(createdAt).toLocaleDateString();
  const nextUrl = `${useLocation().pathname}/message`;
  const navigate = useNavigate();

  const handleClickAddCard = () => {
    navigate(nextUrl);
  };

  return (
    <div>
      {cardType === 'add' ? (
        <S.AddCard>
          <S.AddCardButton onClick={handleClickAddCard}>
            <S.IconWrapper>
              <S.AddIcon alt="add-button-icon" />
            </S.IconWrapper>
          </S.AddCardButton>
        </S.AddCard>
      ) : (
        <S.Card>
          <S.CardHeader>
            <S.SenderBox>
              <S.ProfileImageWrapper>
                <S.ProfileImage src={profileImageURL} alt="profile-image" />
              </S.ProfileImageWrapper>

              <S.SenderInfoBox>
                <S.SenderNameWrapper>
                  <span>From.</span>
                  <S.Sender>{sender}</S.Sender>
                </S.SenderNameWrapper>
                <RelationBadge relationship={relationship} />
              </S.SenderInfoBox>
            </S.SenderBox>
            <S.DeleteButton>
              <S.DeleteIcon alt="delete-button-icon" />
            </S.DeleteButton>
          </S.CardHeader>
          <S.HorizonLine />
          <S.Content $font={font}>{content}</S.Content>
          <S.DateWrapper>{formattedDate}</S.DateWrapper>
        </S.Card>
      )}
    </div>
  );
}
