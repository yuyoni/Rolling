import ButtonStyle from './SubmitButton.style';

export default function SubmitButton({ children, disabled }) {
  return <ButtonStyle disabled={disabled}>{children}</ButtonStyle>;
}
