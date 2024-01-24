import * as S from './MainItemBox.style';

export default function MainItemBox({
  profileImage,
  recipientId,
  relationship,
  content,
  createdAt
}) {
  return (
    <S.ItemBox>
      <S.FirstBox>
        <S.InfoBox>
          <S.ProfileImage src={profileImage} alt="프로필 사진" />

          <S.WhoBox>
            <S.Name>From. {recipientId}</S.Name>
            <div>{relationship}</div>
          </S.WhoBox>
        </S.InfoBox>
      </S.FirstBox>
      <S.Line />

      <S.SecondBox>
        <S.Content>{content}</S.Content>
        <div>{createdAt}</div>
      </S.SecondBox>
    </S.ItemBox>
  );
}
