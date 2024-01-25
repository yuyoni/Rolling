import EmojiList from '../Common/EmojiList';
import ImageList from '../Common/ImageList';
import MessageCount from '../Common/MessageCount';
import * as S from './Paper.style';

export default function Paper({ data }) {
  const {
    name,
    recentMessages,
    messageCount,
    topReactions,
    backgroundImageURL,
    backgroundColor
  } = data;

  return (
    <S.Wrapper
      $backgroundImageURL={backgroundImageURL}
      $backgroundColor={backgroundColor}
    >
      <S.PaperTitle $isWhite={backgroundImageURL}>To. {name}</S.PaperTitle>
      <ImageList recentMessages={recentMessages} messageCount={messageCount} />
      <MessageCount messageCount={messageCount} />
      <S.HorizonLine />
      <EmojiList topReactions={topReactions} />
    </S.Wrapper>
  );
}
