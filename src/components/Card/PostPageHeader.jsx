import EmojiList from '../Common/EmojiList';
import ImageList from '../Common/ImageList';
import MessageCount from '../Common/MessageCount';
import * as S from './PostPageHeader.style';
import arrowDown from '../../assets/images/arrow-down.svg';
import shareIcon from '../../assets/images/share-icon.svg';
import addEmoji from '../../assets/images/add-emoji-icon.svg';

export default function PostPageHeader({
  recentMessages,
  name,
  messageCount,
  topReactions
}) {
  return (
    <S.BackgroundArea>
      <S.PaperTitle>To. {name}</S.PaperTitle>
      <S.PaperBox>
        <ImageList
          recentMessages={recentMessages}
          messageCount={messageCount}
        />
        <MessageCount messageCount={messageCount} />
        <S.HorizonLine $margin="1.6rem" />
        <EmojiList topReactions={topReactions} />
        <img src={arrowDown} alt="arrow-down" style={{ margin: '0.6rem' }} />
        <img src={addEmoji} alt="emoji-icon" />
        <S.HorizonLine />
        <img src={shareIcon} alt="share-icon" />
      </S.PaperBox>
    </S.BackgroundArea>
  );
}
