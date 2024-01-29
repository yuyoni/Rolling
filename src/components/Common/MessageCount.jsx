import * as S from './MessageCount.style';

export default function MessageCount({ messageCount }) {
  return (
    <S.MessageCount>
      <S.Count>{messageCount}</S.Count>명이 작성했어요!
    </S.MessageCount>
  );
}
