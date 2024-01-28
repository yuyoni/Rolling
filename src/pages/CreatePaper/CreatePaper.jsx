import styled from 'styled-components';
import SEOMetatag from '../../SEOMetaTag';
import FormArea from '../../components/CreatePaper/FormArea';

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
// 이 스타일이 필요한지 고민중

export default function CreatePaper() {
  return (
    <Wrap>
      <SEOMetatag title="Rolling - 내 롤링 페이퍼 만들기" />
      <FormArea />
    </Wrap>
  );
}
