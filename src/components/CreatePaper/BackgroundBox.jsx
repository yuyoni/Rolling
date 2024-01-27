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

// 이 컴포넌트가 필요한지 고민중
