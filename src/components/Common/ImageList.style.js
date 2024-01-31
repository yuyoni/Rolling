import styled, { css } from 'styled-components';

export const ImageList = styled.div`
  display: flex;
  margin-left: 1.2rem;
  height: 2.8rem;
`;

export const ImageListDisplay = styled.div`
  display: flex;
  margin-left: 1.2rem;
  height: 2.8rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const commonStyles = css`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 5rem;
  border: 0.15rem solid var(--gray-200, #eeeeee);
  background: var(--white, #fff);
  margin-left: -1.2rem;
  color: var(--gray-500, #555555);
`;

export const Image = styled.img`
  ${commonStyles};
`;

export const RestMessageCount = styled.div`
  ${commonStyles};
  display: flex;
  align-items: center;
  justify-content: center;
`;
