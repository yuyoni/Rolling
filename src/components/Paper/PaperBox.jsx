import PaperContainer from './PaperContainer';
import * as S from './PaperBox.style';

export default function PaperBox({ title }) {
  return (
    <S.Container>
      <span>{title}</span>
      <PaperContainer />
    </S.Container>
  );
}
