import { Link } from 'react-router-dom';
import PaperBox from '../../components/Paper/PaperBox';
import * as S from './List.style';

export default function List() {
  const boxTitles = ['인기 롤링 페이퍼 🔥', '최근에 만든 롤링 페이퍼 ⭐️️'];
  return (
    <S.Wrapper>
      <S.Container>
        {boxTitles.map(boxTitle => (
          <PaperBox key={boxTitle.slice(0, 3)} title={boxTitle} />
        ))}
        <Link to="/post">
          <S.Button>나도 만들어 보기</S.Button>
        </Link>
      </S.Container>
    </S.Wrapper>
  );
}
