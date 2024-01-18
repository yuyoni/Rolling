import * as S from './PaperContainer.style';
import Paper from './Paper';

export default function PaperContainer() {
  return (
    <S.Wrapper>
      <S.SlideContainer>
        {/* 임시로 직접 4개 불러와봄 */}
        <Paper />
        <Paper />
        <Paper />
        <Paper />
      </S.SlideContainer>
    </S.Wrapper>
  );
}
