import React from 'react';
import * as S from './CardModal.style';
import RelationBadge from '../Card/RelationBadge';

export default function CardModal({ onClick, card }) {
  const { sender, content, font, createdAt, profileImageURL, relationship } =
    card;
  const formattedDate = new Date(createdAt).toLocaleDateString();

  return (
    <S.Background>
      <S.ModalBody>
        <S.ModalContent>
          <S.ContentHeader>
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

            <S.DateWrapper>{formattedDate}</S.DateWrapper>
          </S.ContentHeader>

          <S.HorizontalLine />

          <S.Content $font={font}>
            {React.createElement('div', {
              dangerouslySetInnerHTML: { __html: content }
            })}
          </S.Content>
          <S.Button onClick={onClick}>확인</S.Button>
        </S.ModalContent>
      </S.ModalBody>
    </S.Background>
  );
}
