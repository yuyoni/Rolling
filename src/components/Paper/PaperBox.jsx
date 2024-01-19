import PaperContainer from './PaperContainer';
import Container from './PaperBox.style';

export default function PaperBox({ title }) {
  return (
    <Container>
      <span>{title}</span>
      <PaperContainer />
    </Container>
  );
}
