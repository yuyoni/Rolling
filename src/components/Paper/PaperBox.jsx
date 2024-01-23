import PaperContainer from './PaperContainer';
import Container from './PaperBox.style';

export default function PaperBox({ title, paperData }) {
  return (
    <Container>
      <span>{title}</span>
      <PaperContainer paperData={paperData} />
    </Container>
  );
}
