import styled from 'styled-components';

/* color 부분 css 변수이름과 달라서 일시적으로 복잡하게 변환해놓음 - 추후 스타일 변수명 변경 제안 */
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 27.5rem;
  height: 26rem;
  flex-shrink: 0;
  border-radius: 1.6rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  ${({ $backgroundImageURL, $backgroundColor }) =>
    `${
      $backgroundImageURL
        ? `background-image: linear-gradient(rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0.55)), url(${$backgroundImageURL});`
        : `background-color: var(--${$backgroundColor[0].toUpperCase() + $backgroundColor.slice(1)}-200)`
    }`};
  background-repeat: no-repeat;
  background-size: cover;

  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);
  padding: 2.4rem;

  @media (min-width: 768px) {
    &:hover {
      transform: translateY(-0.5rem);
    }
  }

  @media (max-width: 360px) {
    width: 20.8rem;
    height: 23.2rem;
  }
`;

export const PaperTitle = styled.span`
  height: 3.6rem;
  align-self: stretch;
  overflow: hidden;
  color: var(--gray-900);
  text-overflow: ellipsis;
  white-space: nowrap;

  font-family: Pretendard-Bold;
  font-size: 2.4rem;
  line-height: 3.6rem;

  @media (max-width: 360px) {
    font-size: 1.8rem;
  }
`;

export const HorizonLine = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: rgba(0, 0, 0, 0.12);
  margin-top: 3.1rem;
  margin-bottom: 0.4rem;

  @media (max-width: 360px) {
    margin-top: 2.1rem;
  }
`;
