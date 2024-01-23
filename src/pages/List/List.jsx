import { Link } from 'react-router-dom';
import PaperBox from '../../components/Paper/PaperBox';
import * as S from './List.style';
import useFetchData from '../../hooks/useFetchData';
import Skeleton from '../../components/Paper/Skeleton/Skeleton';

export default function List() {
  const { data, isLoading } = useFetchData('recipients/');

  return (
    <S.Wrapper>
      {isLoading || !data ? (
        <Skeleton />
      ) : (
        <S.Container>
          <PaperBox title="인기 롤링 페이퍼 🔥" paperData={data.results} />
          <PaperBox
            title="최근에 만든 롤링 페이퍼 ⭐️️"
            paperData={data.results}
          />
          <Link to="/post">
            <S.Button>나도 만들어 보기</S.Button>
          </Link>
        </S.Container>
      )}
    </S.Wrapper>
  );
}
