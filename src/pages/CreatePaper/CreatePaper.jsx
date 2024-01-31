import FormArea from '../../components/CreatePaper/FormArea';
import { ColorImageProvider } from '../../contexts/ColorImageContext';
import Wrap from './CreatePaper.style';

export default function CreatePaper() {
  return (
    <ColorImageProvider>
      <Wrap>
        <FormArea />
      </Wrap>
    </ColorImageProvider>
  );
}
