import * as S from './Card.style';

export default function Card({ card }) {
  const { sender, profileImageURL, relationship, content, font, createdAt } =
    card;

  const formattedDate = new Date(createdAt).toLocaleDateString();

  return (
    <S.Card>
      <S.CardHeader>
        <S.SenderBox>
          <S.ProfileImageWrapper>
            <S.ProfileImage src={profileImageURL} />
          </S.ProfileImageWrapper>

          <S.SenderInfoBox>
            <S.SenderNameWrapper>
              <span>From.</span>
              <S.Sender>{sender}</S.Sender>
            </S.SenderNameWrapper>

            <S.RelationshipWrapper>
              <S.Relationship>{relationship}</S.Relationship>
            </S.RelationshipWrapper>
          </S.SenderInfoBox>
        </S.SenderBox>
        <S.DeleteButton>
          <S.DeleteIcon />
        </S.DeleteButton>
      </S.CardHeader>
      <S.HorizonLine />
      <S.Content font={font}>{content}</S.Content>

      <S.DateWrapper>{formattedDate}</S.DateWrapper>
    </S.Card>
  );
}
