import styled from 'styled-components';

export const BoxLiner = styled.div`
  position: absolute;
  top: 2rem;
  width: 100%;
  max-width: 120rem;
  padding-top: 1rem;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    max-width: 70rem;
  }

  @media (max-width: 360px) {
  }
`;

export const EditButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`;

export const EditButton = styled.button`
  background: white;
  border-radius: 5rem;
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 5rem;
    height: 5rem;
  }
`;

export const DeleteButton = styled.button`
  width: 10rem;
  height: 4rem;
  flex-shrink: 0;
  border-radius: 6px;
  background: #9935ff;

  color: #fff;
  text-align: center;
  line-height: 26px; /* 162.5% */
  letter-spacing: -0.16px;
`;
