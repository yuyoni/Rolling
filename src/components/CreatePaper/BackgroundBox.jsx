import { useState } from 'react';
import BackgroundSelector from './BackgroundSelector';
import BackgroundText from './BackgroundText';
import ColorImgSelector from './ColorImgSelector';

export default function BackgroundBox() {
  const [toggle, setToggle] = useState('collor');
  const toggleChange = () => {
    if (toggle === 'collor') setToggle('img');
    else setToggle('collor');
  };
  return (
    <div>
      <BackgroundText />
      <BackgroundSelector toggle={toggle} toggleChange={toggleChange} />
      <ColorImgSelector />
    </div>
  );
}
