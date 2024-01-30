import styled from 'styled-components';

export const EmojiList = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;

  @media (max-width: 360px) {
    gap: 0.4rem;
  }
`;

export const EmojiCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0.8rem 1.2rem;
  width: 6.5rem;
  height: 3.6rem;
  gap: 1rem;
  border-radius: 3.2rem;
  background: rgba(0, 0, 0, 0.5);

  p {
    color: var(--white, #fff);
    font-size: 1.6rem;
  }

  @media (max-width: 360px) {
    padding: 0.8rem;
    width: 5.5rem;
    height: 3.2rem;
    gap: 0.4rem;

    p {
      font-size: 1.4rem;
    }
  }
`;
