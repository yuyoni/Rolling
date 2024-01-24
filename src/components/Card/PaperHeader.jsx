import PaperInfo from '../PaperInfo';
import * as S from './PaperHeader.style';

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
