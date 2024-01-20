import * as S from './MainTextBox.style';

function MainTextBox({ num, text, subText }) {
  return (
    <S.TextBox>
      <S.PointBox>Point.{num}</S.PointBox>
      <S.Text>{text}</S.Text>
      <S.SubText>{subText}</S.SubText>
    </S.TextBox>
  );
}

export default MainTextBox;
