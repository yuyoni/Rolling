import Wrapper from './ImageButton.style';

export default function ImageButton({ imgAlt, imageURL, handleClick }) {
  return (
    <Wrapper>
      <button type="button" onClick={handleClick}>
        <img src={imageURL} alt={imgAlt} />
      </button>
    </Wrapper>
  );
}
