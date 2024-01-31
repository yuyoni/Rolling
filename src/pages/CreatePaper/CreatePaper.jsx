import styled from 'styled-components';
import MetaTag from '../../MetaTag';
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
      <MetaTag
        title="Rolling - 내 롤링 페이퍼 만들기"
        description="추억의 롤링 페이퍼를 웹에서도 즐길 수 있는 플랫폼 'Rolling'"
      />
      <FormArea />
    </Wrap>
  );
}
