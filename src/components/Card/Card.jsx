import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './Card.style';
import RelationBadge from './RelationBadge';

export default function Card({ card, cardType, isEditing, onDelete, onClick }) {
  const {
    id,
    sender,
    profileImageURL,
    relationship,
    content,
    font,
    createdAt
  } = card;

  const formattedDate = new Date(createdAt).toLocaleDateString();
  const nextUrl = `${useLocation().pathname}/message`;
  const navigate = useNavigate();

  const handleClickAddCard = () => {
    navigate(nextUrl);
  };

  const handleDeleteCard = () => {
    onDelete(id);
  };

  const handleClickCard = () => {
    onClick(id);
  };

  return (
    <div>
      {cardType === 'add' ? (
        <S.AddCard onClick={handleClickAddCard}>
          <S.AddCardButton>
            <S.IconWrapper>
              <S.AddIcon alt="add-button-icon" />
            </S.IconWrapper>
          </S.AddCardButton>
        </S.AddCard>
      ) : (
        <S.Card onClick={handleClickCard}>
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
            {isEditing && (
              <S.DeleteButton onClick={handleDeleteCard}>
                <S.DeleteIcon alt="delete-button-icon" />
              </S.DeleteButton>
            )}
          </S.CardHeader>
          <S.HorizonLine />
          <S.Content $font={font}>
            {React.createElement('div', {
              dangerouslySetInnerHTML: { __html: content }
            })}
          </S.Content>
          <S.DateWrapper>{formattedDate}</S.DateWrapper>
        </S.Card>
      )}
    </div>
  );
}
