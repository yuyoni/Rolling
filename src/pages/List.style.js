import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  width: 100%;
  max-width: 1200px;
`;

export const Button = styled.button`
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translate(-50%, -50%);
`;
