import styled from 'styled-components';

export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: var(--white, #fff);
  display: flex;
  height: 6.4rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 0.1rem solid var(--gray-200, #eeeeee);

  @media (max-width: 768px) {
    padding: 1.1rem 2.4rem;
  }

  @media (max-width: 360px) {
    padding: 1.2rem 2rem;
  }
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  min-width: 120rem;
  padding: 1.1rem 0;
  height: 6.2rem;
  justify-content: space-between;

  @media (max-width: 1248px) {
    min-width: 70rem;
    width: 100%;
    padding: 0 2.4rem;
    transition: max-width 0.5s ease;
  }

  @media (max-width: 768px) {
    min-width: 32.7rem;
    padding: 0;
    transition: max-width 0.5s ease;

    &.navNoShow {
      display: none;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  height: 4rem;
  padding: 0.8rem 1.6rem;
  align-items: center;
  gap: 1rem;

  border-radius: 0.6rem;
  border: 0.1rem solid var(--gray-300, #ccc);
  background: var(--white, #fff);

  font-weight: 700;
  line-height: 2.6rem;
  letter-spacing: -0.016rem;
  color: var(--gray-900, #181818);
`;
