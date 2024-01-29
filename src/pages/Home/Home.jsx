import LinkButton from '../../components/Button/LinkButton';
import MainBoxFirst from '../../components/Home/MainBoxFirst';
import MainBoxSecond from '../../components/Home/MainBoxSecond';
import SEOMetaTag from '../../SEOMetaTag';
import * as S from './Home.style';

export default function Home() {
  return (
    <S.MainArea>
      <SEOMetaTag title="Rolling" />
      <S.MainContainer>
        <MainBoxFirst />
        <MainBoxSecond />
      </S.MainContainer>
      <LinkButton value="구경해보기" link="/list" />
    </S.MainArea>
  );
}
