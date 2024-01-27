import { useState } from 'react';
import BackgroundSelector from './BackgroundSelector';
import BackgroundText from './BackgroundText';
import ColorImageSelector from './ColorImageSelector';

export default function BackgroundBox() {
  const [toggle, setToggle] = useState('color');
  const toggleChange = () => {
    if (toggle === 'color') setToggle('image');
    else setToggle('color');
  };
  return (
    <div>
      <BackgroundText />
      <BackgroundSelector toggle={toggle} toggleChange={toggleChange} />
      <ColorImageSelector toggle={toggle} toggleChange={toggleChange} />
    </div>
  );
}

// 이 컴포넌트가 필요한지 고민중
