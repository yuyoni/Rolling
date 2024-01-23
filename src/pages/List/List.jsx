import PaperBox from '../../components/Paper/PaperBox';
import * as S from './List.style';

export default function List() {
  const boxTitles = ['인기 롤링 페이퍼 🔥', '최근에 만든 롤링 페이퍼 ⭐️️'];
  return (
    <S.Wrapper>
      <S.Container>
        {boxTitles.map(boxTitle => (
          <PaperBox title={boxTitle} />
        ))}
        <S.Button>나도 만들어 보기</S.Button>
      </S.Container>
    </S.Wrapper>
  );
}
