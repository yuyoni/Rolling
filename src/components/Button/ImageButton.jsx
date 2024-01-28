import Wrapper from './ImageButton.style';

export default function ImageButton({ imageAlt, imageURL, handleClick }) {
  return (
    <Wrapper>
      <button type="button" onClick={handleClick}>
        <img src={imageURL} alt={imageAlt} />
      </button>
    </Wrapper>
  );
}
