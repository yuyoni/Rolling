import Wrapper from './BackgroundBox.style';
import BackgroundSelector from './BackgroundSelector';
import BackgroundText from './BackgroundText';
import ColorImageSelector from './ColorImageSelector';

export default function BackgroundBox() {
  return (
    <Wrapper>
      <BackgroundText />
      <BackgroundSelector />
      <ColorImageSelector />
    </Wrapper>
  );
}
