import styled from 'styled-components';

function MainTextBox({ num, text, subText }) {
  return (
    <TextBox>
      <PointBox>Point.{num}</PointBox>
      <Text>{text}</Text>
      <SubText>{subText}</SubText>
    </TextBox>
  );
}

export default MainTextBox;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const PointBox = styled.div`
  display: flex;
  padding: 6px 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 50px;
  background: var(--Purple-600, #9935ff);

  color: var(--white, #fff);

  /* Font/14 Bold */
  font-family: 'Pretendard-Bold';
  font-size: 14px;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.07px;
`;

const Text = styled.div`
  color: var(--gray-900, #181818);

  /* Font/24 Bold */
  font-family: 'Pretendard-Bold';
  font-size: 24px;
  line-height: 36px; /* 150% */
  letter-spacing: -0.24px;
`;

const SubText = styled.div`
  color: var(--gray-500, #555);

  /* Font/18 Regular */
  font-family: 'Pretendard-Regular';
  font-size: 18px;
  line-height: 28px; /* 155.556% */
  letter-spacing: -0.18px;
`;
