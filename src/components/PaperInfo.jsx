import * as S from './PaperInfo.style';

export default function PaperInfo({
  name,
  recentMessages,
  messageCount,
  topReactions
}) {
  const threeRecentMessages = recentMessages
    .slice(0, 3)
    .map(e => <S.Image src={e.profileImageURL} key={e.id} alt={e.sender} />);

  const restMessageCount =
    messageCount > 3 ? (
      <S.RestMessageCount>{`+${messageCount - 3}`}</S.RestMessageCount>
    ) : null;

  const reactions = topReactions.map(reaction => (
    <S.EmojiCount key={reaction.id}>
      <p>{reaction.emoji}</p>
      <p>{reaction.count}</p>
    </S.EmojiCount>
  ));

  return (
    <S.PaperInfoBox>
      <S.PaperTitle>To. {name}</S.PaperTitle>
      <S.ImageList>
        {threeRecentMessages}
        {restMessageCount}
      </S.ImageList>
      <S.MessageCount>{messageCount}명이 작성했어요!</S.MessageCount>
      <S.DividedLine />
      <S.EmojiList>{reactions}</S.EmojiList>
    </S.PaperInfoBox>
  );
}
