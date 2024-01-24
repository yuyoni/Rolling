import ButtonStyle from './SubmitButton.style';

export default function SubmitButton({ disabled, children, onClick }) {
  return (
    <ButtonStyle disabled={disabled} onClick={onClick}>
      {children}
    </ButtonStyle>
  );
}
