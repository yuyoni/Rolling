import * as S from './CardModal.style';

export default function CardModal({ onClick, card }) {
  const { id, sender, content, font, createdAt } = card;

  return (
    <S.Background onClick={onClick}>
      <S.ModalBody>
        <S.ModalContent>
          <div>{id}</div>
          <div>{sender}</div>
          <div>{content}</div>
          <div>{font}</div>
          <div>{createdAt}</div>
        </S.ModalContent>
      </S.ModalBody>
    </S.Background>
  );
}
