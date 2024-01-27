import * as S from './EmojiList.style';

export default function EmojiList({ topReactions }) {
  const reactions = topReactions.map(reaction => (
    <S.EmojiCount key={reaction.id}>
      <p>{reaction.emoji}</p>
      <p>{reaction.count}</p>
    </S.EmojiCount>
  ));
  return <S.EmojiList>{reactions}</S.EmojiList>;
}
