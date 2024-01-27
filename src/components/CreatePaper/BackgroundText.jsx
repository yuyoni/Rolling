import * as S from './BackgroundText.style';

export default function BackgroundText() {
  return (
    <S.Wrapper>
      <S.Guide>배경화면을 선택해주세요.</S.Guide>
      <S.AssistantGuide>
        컬러를 선택하거나, 이미지를 선택할 수 있습니다.{' '}
      </S.AssistantGuide>
    </S.Wrapper>
  );
}
