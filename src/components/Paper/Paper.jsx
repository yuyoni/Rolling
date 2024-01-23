import PaperInfo from '../PaperInfo';
import Wrapper from './Paper.style';

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
    <Wrapper
      $backgroundImageURL={backgroundImageURL}
      $backgroundColor={backgroundColor}
    >
      <PaperInfo
        name={name}
        recentMessages={recentMessages}
        messageCount={messageCount}
        topReactions={topReactions}
      />
    </Wrapper>
  );
}
