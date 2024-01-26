import styled from 'styled-components';

const MessageForm = styled.form`
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

    &__font {
      @media screen and (min-width: 375px) {
        margin-bottom: 16.2rem;
      }

      @media screen and (min-width: 768px) {
        margin-bottom: 6.2rem;
      }
    }
    
    &__submit {
      left: 2.4rem;
      right: 2.4rem;
      bottom: 2.4rem;
    }
`;

export default MessageForm;
