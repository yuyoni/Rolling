import styled from 'styled-components';

const animation = `
  animation: bounce-in 2s ease;
  @keyframes bounce-in {
    0% {
      opacity: 0;
      transform: scale(0.3);
    }
    50% {
      opacity: 1;
      transform: scale(1.05);
    }
    70% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const MainDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: var(--Surface, #f6f8ff);
`;

export const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
  border-radius: 2rem;
  color: var(--gray-500, #555);

  @media screen and (min-width: 375px) {
    width: 100%;
  }

  @media screen and (min-width: 76.8px) {
    max-width: 76.8rem;
  }

  & img {
    ${animation}
    @media screen and (min-width: 375px) {
      width: 18rem;
    }

    @media screen and (min-width: 768px) {
      width: 28rem;
    }
  }

  & h1 {
    ${animation}
    font-weight: 700;
    color: transparent;
    background: linear-gradient(15deg, #f6f8ff, #9966cc);
    -webkit-background-clip: text;
    background-clip: text;

    @media screen and (min-width: 375px) {
      font-size: 8rem;
    }

    @media screen and (min-width: 768px) {
      font-size: 10rem;
    }
  }

  & h2 {
    ${animation}
    text-align: center;

    @media screen and (min-width: 375px) {
      font-size: 2.3rem;
    }

    @media screen and (min-width: 768px) {
      font-size: 3.2rem;
    }
  }
`;
