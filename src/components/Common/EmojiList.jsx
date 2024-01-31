import * as S from './EmojiList.style';

export default function EmojiList({ topReactions, isSmall = false }) {
  const reactions = isSmall ? topReactions.slice(0, 6) : topReactions;
  const reactionList = reactions.map(reaction => (
    <S.EmojiCount key={reaction.id}>
      <p>{reaction.emoji}</p>
      <p>{reaction.count}</p>
    </S.EmojiCount>
  ));
  return <S.EmojiList>{reactionList}</S.EmojiList>;
}
