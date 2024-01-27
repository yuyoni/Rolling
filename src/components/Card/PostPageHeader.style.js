import styled from 'styled-components';

export const BackgroundArea = styled.div`
  position: relative;
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 0;
  background: #fff;
`;

export const PaperTitle = styled.div`
  margin-right: 26.3rem;
  color: var(--gray-800, #2b2b2b);
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
`;

export const PaperBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  & > img {
    cursor: pointer;
  }
`;

export const HorizonLine = styled.div`
  width: 0.1rem;
  height: 2.8rem;
  background-color: var(--gray-300);
  margin: auto ${props => `${props.$margin || 0}`};
`;

export const EmojiPickerBox = styled.div`
  position: absolute;
  top: 5.6rem;
  right: 0;
  z-index: 1;
`;
