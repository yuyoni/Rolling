import * as S from './Paper.style';

export default function Paper({ data }) {
  const { name, recentMessages, messageCount, topReactions } = data;

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
    <S.Wrapper>
      <S.PaperInfoBox>
        <S.PaperTitle>To. {name}</S.PaperTitle>
        <S.ImageList>
          {threeRecentMessages}
          {restMessageCount}
        </S.ImageList>
        <h3>{messageCount}명이 작성했어요!</h3>
      </S.PaperInfoBox>
      <S.DividedLine />
      <S.EmojiList>{reactions}</S.EmojiList>
    </S.Wrapper>
  );
}
