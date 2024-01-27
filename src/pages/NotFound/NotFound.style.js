import styled from 'styled-components';

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
    @media screen and (min-width: 375px) {
      width: 18rem;
    }

    @media screen and (min-width: 768px) {
      width: 28rem;
    }
  }

  & h1 {
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
    text-align: center;

    @media screen and (min-width: 375px) {
      font-size: 2.3rem;
    }

    @media screen and (min-width: 768px) {
      font-size: 3.2rem;
    }
  }
`;
