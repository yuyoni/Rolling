import * as S from './ImageList.style';

export default function ImageList({ recentMessages, messageCount }) {
  return (
    <S.ImageList>
      {recentMessages.map(message => (
        <S.Image
          src={message.profileImageURL}
          key={message.id}
          alt={message.sender}
        />
      ))}
      {messageCount > 3 && (
        <S.RestMessageCount>{`+${messageCount - 3}`}</S.RestMessageCount>
      )}
    </S.ImageList>
  );
}
