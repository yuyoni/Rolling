import styled from 'styled-components';

export default function SendMessageForm({ children }) {
  return <MessageForm>{children}</MessageForm>;
}

const MessageForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5.7rem 2.4rem;
  margin: 0 auto;
  max-width: fit-content;
  width: 100%;

  & .MessagePage {
    &__input {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      margin-bottom: 5rem;
    }

    &__profileImg {
      display: flex;
      flex-direction: column:
      align-items: flex-start;
      gap: 1.2rem;
      margin-bottom: 5rem;
    }

    &__relationship {
      display: flex;
      flex-direction: column:
      align-items: flex-start;
      gap: 1.2rem;
      margin-bottom: 5rem;
    }

    &__content {
      display: flex;
      flex-direction: column:
      align-items: flex-start;
      gap: 1.2rem;
      margin-bottom: 5rem;
    }

    &__font {
      display: flex;
      flex-direction: column:
      align-items: flex-start;
      gap: 1.2rem;
      margin-bottom: 6.2rem;
    }

    &__submit {
      left: 2.4rem;
      right: 2.4rem;
      bottom: 2.4rem;
    }
  }
`;
