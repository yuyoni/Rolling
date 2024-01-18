import PaperBox from '../components/Paper/PaperBox';
import * as S from './List.style';

export default function List() {
  return (
    <S.Container>
      <PaperBox title="인기 롤링 페이퍼 🔥" />
      <PaperBox title="최근에 만든 롤링 페이퍼 ⭐️️" />
      <S.Button>나도 만들어 보기</S.Button>
    </S.Container>
  );
}
