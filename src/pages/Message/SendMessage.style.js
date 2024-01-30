import styled from 'styled-components';

export const MessageForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 5.7rem 2.4rem;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: fit-content;
  }

  @media screen and (min-width: 1248px) {
    width: 100%;
    max-width: fit-content;
  }
`;

export const DivStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 5rem;
`;

export const FontStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 5rem;

  @media screen and (min-width: 375px) {
    margin-bottom: 16.2rem;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 6.2rem;
  }
`;

export const SubmitStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 5rem;

  left: 2.4rem;
  right: 2.4rem;
  bottom: 2.4rem;
`;
