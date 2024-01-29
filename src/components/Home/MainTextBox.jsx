import * as S from './MainTextBox.style';

export default function MainTextBox({ number, text, subText }) {
  return (
    <S.TextContainer>
      <S.PointBox>Point.{number}</S.PointBox>
      <S.TextBox>
        <S.Text>{text}</S.Text>
        <S.SubText>{subText}</S.SubText>
      </S.TextBox>
    </S.TextContainer>
  );
}
