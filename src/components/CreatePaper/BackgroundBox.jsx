import BackgroundSelector from './BackgroundSelector';
import BackgroundText from './BackgroundText';
import ColorImageSelector from './ColorImageSelector';

export default function BackgroundBox() {
  return (
    <div>
      <BackgroundText />
      <BackgroundSelector />
      <ColorImageSelector />
    </div>
  );
}
