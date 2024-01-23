import { Link } from 'react-router-dom';
import PaperBox from '../../components/Paper/PaperBox';
import * as S from './List.style';
import useFetchData from '../../hooks/useFetchData';

export default function List() {
  const paperData = useFetchData('recipients/');

  return (
    <S.Wrapper>
      <S.Container>
        <PaperBox title="인기 롤링 페이퍼 🔥" paperData={paperData} />
        <PaperBox title="최근에 만든 롤링 페이퍼 ⭐️️" paperData={paperData} />
        <Link to="/post">
          <S.Button>나도 만들어 보기</S.Button>
        </Link>
      </S.Container>
    </S.Wrapper>
  );
}
