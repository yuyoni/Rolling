import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 275px;
  height: 260px;
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: var(--Purple-200, #ecd9ff); // 나중에 데이터로부터 받아와야하는 값
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  padding: 24px;
`;

export default Wrapper;
