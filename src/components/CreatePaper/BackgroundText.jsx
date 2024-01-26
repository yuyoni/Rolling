import styled from 'styled-components';

const Guide = styled.div`
  color: var(--gray-900, #181818);
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.25rem; /* 150% */
  letter-spacing: -0.015rem;
`;
const AssistantGuide = styled.div`
  color: var(--gray-500, #555);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.625rem;
  letter-spacing: -0.01rem;
`;
const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  margin-bottom: 1.5rem;
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
