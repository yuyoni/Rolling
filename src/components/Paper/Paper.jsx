import EmojiList from '../Common/EmojiList';
import ImageList from '../Common/ImageList';
import MessageCount from '../Common/MessageCount';
import beige from '../../assets/images/yellow-pattern.svg';
import purple from '../../assets/images/purple-pattern.svg';
import green from '../../assets/images/green-pattern.svg';
import blue from '../../assets/images/blue-pattern.svg';
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

  const isBackgroundColor = backgroundImageURL === null;
  const colorPattern = {
    beige,
    green,
    blue,
    purple
  };

  return (
    <S.Wrapper
      $backgroundImageURL={backgroundImageURL}
      $backgroundColor={backgroundColor}
    >
      {isBackgroundColor && (
        <S.ColorPattern
          src={colorPattern[backgroundColor]}
          alt={`${colorPattern[backgroundColor]}`}
        />
      )}
      <S.ContentsBox>
        <S.PaperTitle $isWhite={backgroundImageURL}>To. {name}</S.PaperTitle>
        <ImageList
          recentMessages={recentMessages}
          messageCount={messageCount}
        />
        <MessageCount messageCount={messageCount} />
        <S.HorizonLine />

        <EmojiList topReactions={topReactions} />
      </S.ContentsBox>
    </S.Wrapper>
  );
}
