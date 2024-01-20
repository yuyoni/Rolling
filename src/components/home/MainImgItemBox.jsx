import * as S from './MainImgItemBox.style';

export default function MainImgItemBox({ img, name, rel, content, date }) {
  return (
    <S.ItemBox>
      <S.FirstBox>
        <S.InfoBox>
          <S.ProfileImg>
            <S.Image src={img} alt="프로필 사진" />
          </S.ProfileImg>
          <S.WhoBox>
            <S.Name>From. {name}</S.Name>
            <div>{rel}</div>
          </S.WhoBox>
        </S.InfoBox>
      </S.FirstBox>
      <S.Line />

      <S.SecondBox>
        <S.Content>{content}</S.Content>
        <div>{date}</div>
      </S.SecondBox>
    </S.ItemBox>
  );
}
