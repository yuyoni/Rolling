import * as S from './ImageButton.style';

export default function ImageButton({
  imageAlt,
  imageURL,
  handleClick,
  smallImageUrl
}) {
  return (
    <>
      <S.Wrapper>
        <button type="button" onClick={handleClick}>
          <img src={imageURL} alt={imageAlt} />
        </button>
      </S.Wrapper>
      <S.SmallImageWrapper>
        <button type="button" onClick={handleClick}>
          <img src={smallImageUrl} alt={imageAlt} />
        </button>
      </S.SmallImageWrapper>
    </>
  );
}
