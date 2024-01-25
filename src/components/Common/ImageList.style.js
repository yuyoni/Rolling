import styled, { css } from 'styled-components';

export const ImageList = styled.div`
  display: flex;
  margin-left: 1.2rem;
`;

const commonStyles = css`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 5rem;
  border: 0.15rem solid var(--white);
  background: var(--white);
  margin-left: -1.2rem; // 12만큼씩 음수 갭 설정
  color: var(--gray-500);
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
