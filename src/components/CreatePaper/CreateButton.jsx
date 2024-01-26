import ButtonStyle from './CreateButton.style';

export default function CreateButton({ children, abled }) {
  return (
    <ButtonStyle type="submit" disabled={abled}>
      {children}
    </ButtonStyle>
  );
}
