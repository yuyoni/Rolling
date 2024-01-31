import styled from 'styled-components';

export const Liner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.3rem 2.4rem;

  @media (max-width: 360px) {
    padding: 1.2rem 0.5rem;
    min-width: 33rem;
  }
`;
export const BackgroundArea = styled.div`
  position: relative;

  width: 100%;
  max-width: 120rem;
  min-width: 86rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #fff;

  @media (max-width: 768px) {
    max-width: 76.8rem;
    min-width: 62rem;
  }

  @media (max-width: 360px) {
    min-width: 0;
    padding: 0;

    flex-direction: column;
    align-items: flex-start;
  }
`;

export const PaperTitle = styled.div`
  color: var(--gray-800, #2b2b2b);
  font-family: Poppins;
  font-size: 2.8rem;
  font-weight: 700;

  @media (max-width: 360px) {
    font-size: 1.8rem;
  }
`;

export const PaperBox = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  gap: 1.2rem;

  & > img {
    cursor: pointer;
  }

  @media (max-width: 360px) {
    gap: 0.4rem;
    justify-content: center;
  }
`;

export const HorizonLine = styled.div`
  width: 0.1rem;
  height: 2.8rem;
  background-color: var(--gray-300);
  margin: auto ${props => `${props.$margin || 0}`};
  @media (max-width: 360px) {
    margin: 0;
  }
`;

export const EmojiPickerBox = styled.div`
  position: absolute;
  top: 5.6rem;
  right: 0;
  z-index: 1;
`;

export const EmojiListBox = styled.div`
  position: absolute;
  top: 5.6rem;
  right: 20rem;
  z-index: 1;
  padding: 2.4rem;
  border-radius: 0.9rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 0.2rem 1.4rem 0 rgba(0, 0, 0, 0.08);

  & > div {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 360px) {
    display: none;
  }
`;

export const SmallEmojiListBox = styled.div`
  position: absolute;
  top: 5.6rem;
  right: 20rem;
  z-index: 1;
  padding: 2.4rem;
  border-radius: 0.9rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 0.2rem 1.4rem 0 rgba(0, 0, 0, 0.08);

  & > div {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 360px) {
    & > div {
      gap: 0.8rem;
    }

    position: absolute;
    top: 3rem;
    right: 10rem;
  }
  @media (min-width: 360px) {
    display: none;
  }
`;

export const DropdownWrapper = styled.div`
  position: relative;
`;

export const HorizonLineDisplay = styled.div`
  width: 0.1rem;
  height: 2.8rem;
  background-color: var(--gray-300);
  margin: auto ${props => `${props.$margin || 0}`};
  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 360px) {
  }
`;

export const ConditionalVisibleLine = styled.div`
  width: 360px;
  height: 1px;
  margin: 1.2rem 0;
  flex-shrink: 0;
  background: var(--gray-200, #eee);
  @media (min-width: 360px) {
    display: none;
  }
`;
