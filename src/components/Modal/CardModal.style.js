import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: rgba(0, 0, 0, 0.6);
`;
export const ModalBody = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalContent = styled.div`
  background: white;
  padding: 1rem;
  width: 400px;
  height: auto;
`;
