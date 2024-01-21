import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 27.5rem;
  height: 26rem;
  flex-shrink: 0;
  border-radius: 1.6rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  background: var(--Purple-200, #ecd9ff); // 나중에 데이터로부터 받아와야하는 값
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);
  padding: 2.4rem;

  @media (max-width: 360px) {
    width: 20.8rem;
    height: 23.2rem;
  }
`;

export default Wrapper;
