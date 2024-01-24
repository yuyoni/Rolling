import EmojiList from '../Common/EmojiList';
import ImageList from '../Common/ImageList';
import MessageCount from '../Common/MessageCount';
import * as S from './PaperHeader.style';
import arrowDown from '../../assetes/images/arrow-down.svg';
import shareIcon from '../../assetes/images/share-icon.svg';
import addEmoji from '../../assetes/images/add-emoji-icon.svg';

export default function PaperHeader({
  recentMessages,
  name,
  messageCount,
  topReactions
}) {
  return (
    <S.BackgroundArea>
      <PaperInfo
        recentMessages={recentMessages}
        name={name}
        messageCount={messageCount}
        topReactions={topReactions}
        isVertical={false}
      />
    </S.BackgroundArea>
  );
}
