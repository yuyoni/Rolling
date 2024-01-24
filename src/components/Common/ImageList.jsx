import * as S from './ImageList.style';

export default function ImageList({ recentMessages, messageCount }) {
  return (
    <S.ImageList>
      {recentMessages.map(e => (
        <S.Image src={e.profileImageURL} key={e.id} alt={e.sender} />
      ))}
      {messageCount > 3 && (
        <S.RestMessageCount>{`+${messageCount - 3}`}</S.RestMessageCount>
      )}
    </S.ImageList>
  );
}
