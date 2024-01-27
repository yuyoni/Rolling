import arrowTop from '../../assets/images/arrow-top.svg';
import * as S from './ScrollToTopButton.style';

export default function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <S.Wrapper>
      <button type="button" onClick={scrollToTop}>
        <S.Arrow src={arrowTop} alt="arrow-top" />
      </button>
    </S.Wrapper>
  );
}
