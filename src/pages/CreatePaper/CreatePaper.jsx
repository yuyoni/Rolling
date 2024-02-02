import FormArea from '../../components/CreatePaper/FormArea';
import { ColorImageProvider } from '../../contexts/ColorImageContext';
import MetaTag from '../../MetaTag';
import Wrap from './CreatePaper.style';

export default function CreatePaper() {
  return (
    <ColorImageProvider>
      <MetaTag
        title="Rolling - 내 롤링 페이퍼 만들기"
        description="추억의 롤링 페이퍼를 웹에서도 즐길 수 있는 플랫폼 'Rolling'"
      />
      <Wrap>
        <FormArea />
      </Wrap>
    </ColorImageProvider>
  );
}
