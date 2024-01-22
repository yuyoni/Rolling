import styled from 'styled-components';

const MessageForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 5.7rem 2.4rem;
  margin: 0 auto;
  max-width: fit-content;
  width: 100%;

  .MessagePage {
    &__input,
    &__profileImg,
    &__relationship,
    &__content,
    &__font,
    &__submit {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      margin-bottom: 5rem;
    }

    &__submit {
      left: 2.4rem;
      right: 2.4rem;
      bottom: 2.4rem;
    }
`;

export default MessageForm;
