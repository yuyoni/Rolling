import ImageButton from '../Button/ImageButton';

export default function PopUpButton({ reference, isPopUpShow }) {
  return (
    <div ref={reference}>
      {isEmojiPickerShow && (
        <S.EmojiPickerBox>
          <EmojiPicker onEmojiClick={event => handleReactionClick(event)} />
        </S.EmojiPickerBox>
      )}
    </div>
  );
}
