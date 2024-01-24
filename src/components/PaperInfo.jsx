import * as S from './PaperInfo.style';
import * as VariedS from './PaperInfo.style.horizon';
import addIcon from '../assetes/images/add-icon.svg';
import shareIcon from '../assetes/images/share-icon.svg';
import arrowDown from '../assetes/images/arrow-down.svg';

export default function PaperInfo({
  name,
  recentMessages,
  messageCount,
  topReactions,
  isVertical = true
}) {
  return isVertical ? (
    <S.PaperInfoBox>
      <S.PaperTitle>To. {name}</S.PaperTitle>

      <S.ImageList>
        {recentMessages.map(e => (
          <S.Image src={e.profileImageURL} key={e.id} alt={e.sender} />
        ))}
        {messageCount > 3 ? (
          <S.RestMessageCount>{`+${messageCount - 3}`}</S.RestMessageCount>
        ) : null}
      </S.ImageList>

      <S.MessageCount>{messageCount}명이 작성했어요!</S.MessageCount>

      <S.HorizontalLine />

      <S.EmojiList>
        {topReactions.map(reaction => (
          <S.EmojiCount key={reaction.id}>
            <p>{reaction.emoji}</p>
            <p>{reaction.count}</p>
          </S.EmojiCount>
        ))}
      </S.EmojiList>
    </S.PaperInfoBox>
  ) : (
    <VariedS.InformationBox>
      <VariedS.NameBox>To. {name}</VariedS.NameBox>

      <VariedS.Wrapper>
        <VariedS.SenderInformationBox>
          <VariedS.ProfileImageContainer>
            {recentMessages.map(e => (
              <VariedS.ProfileImageItem
                src={e.profileImageURL}
                key={e.id}
                alt={e.sender}
              />
            ))}
            {messageCount > 3 ? (
              <S.RestMessageCount>{`+${messageCount - 3}`}</S.RestMessageCount>
            ) : null}
          </VariedS.ProfileImageContainer>

          <VariedS.SenderNumberText>
            <span>{messageCount}</span>명이 작성했어요!
          </VariedS.SenderNumberText>
        </VariedS.SenderInformationBox>

        <VariedS.EmojiBox>
          <S.EmojiList>
            {topReactions.map(reaction => (
              <S.EmojiCount key={reaction.id}>
                <p>{reaction.emoji}</p>
                <p>{reaction.count}</p>
              </S.EmojiCount>
            ))}
          </S.EmojiList>
          <VariedS.ClearButton>
            <img src={arrowDown} alt="arrow-down" />
          </VariedS.ClearButton>
        </VariedS.EmojiBox>

        <VariedS.ButtonBox>
          <VariedS.Button>
            <img src={addIcon} alt="add-icon" />
            <h2>추가</h2>
          </VariedS.Button>{' '}
          <VariedS.VerticalLine />
          <VariedS.Button>
            <img src={shareIcon} alt="share-icon" />
          </VariedS.Button>
        </VariedS.ButtonBox>
      </VariedS.Wrapper>
    </VariedS.InformationBox>
  );
}
