import * as S from './EditButtonBox.style';
import editButton from '../../assets/images/edit-button.svg';

export default function EditButtonBox({
  isEditing,
  onClickEdit,
  onClickDelete
}) {
  return (
    <S.BoxLiner>
      <S.EditButtonBox>
        {isEditing && (
          <S.DeleteButton onClick={onClickDelete}>모두 삭제하기</S.DeleteButton>
        )}
        <S.EditButton onClick={onClickEdit}>
          <img src={editButton} alt="edit-button" />
        </S.EditButton>
      </S.EditButtonBox>
    </S.BoxLiner>
  );
}
