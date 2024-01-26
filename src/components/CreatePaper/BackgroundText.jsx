import styled from 'styled-components';

const Guide = styled.div`
  color: var(--gray-900, #181818);
  font-family: Pretendard;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.6rem;
  letter-spacing: -0.024rem;
`;
const AssistantGuide = styled.div`
  color: var(--gray-500, #555);
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.6rem;
  letter-spacing: -0.016rem;
`;
const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  margin-bottom: 2.4rem;
`;

export default function BackgroundText() {
  return (
    <Wrapper>
      <Guide>배경화면을 선택해주세요.</Guide>
      <AssistantGuide>
        컬러를 선택하거나, 이미지를 선택할 수 있습니다.{' '}
      </AssistantGuide>
    </Wrapper>
  );
}
