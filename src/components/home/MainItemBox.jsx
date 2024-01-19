import styled from 'styled-components';

function MainItemBox({ img, name, rel, content, date }) {
  return (
    <ItemBox>
      <FirstBox>
        <InfoBox>
          <ProfileImg>
            <Image src={img} alt="프로필 사진" />
          </ProfileImg>
          <WhoBox>
            <Name>From. {name}</Name>
            <div>{rel}</div>
          </WhoBox>
        </InfoBox>
      </FirstBox>
      <Line />

      <SecondBox>
        <Content>{content}</Content>
        <div>{date}</div>
      </SecondBox>
    </ItemBox>
  );
}

export default MainItemBox;

const ItemBox = styled.div`
  width: 206px;
  height: 162px;
  flex-shrink: 0;

  border-radius: 12px;
  border: 1px solid #dbd9e9;
  background: #fff;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const FirstBox = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 24px 0px 24px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

const InfoBox = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 10px;
`;

const ProfileImg = styled.div`
  display: flex;
  height: 34px;

  // border: 1px solid;
  // background: url(<path-to-image>);
  // lightgray 50% / cover no-repeat;
  // border: 1.5px solid var(--white);
  // background: var(--white);
`;

const Image = styled.img`
  border-radius: 50px;
`;

const WhoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1px;
`;

const Name = styled.div`
  color: #000;
  font-family: 'Pretendard-Bold';
  font-size: 12px;
  line-height: 18px; /* 120% */
`;

const Line = styled.div`
  width: 180px;
  height: 1px;
  flex-shrink: 0;
  background: #e1e1e1;
`;

const SecondBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  width: 180px;
  height: 54px;
  flex-shrink: 0;

  overflow: hidden;
  color: #555;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'Pretendard-Regular';
  font-size: 12px;
  line-height: 18px; /* 150% */
  letter-spacing: -0.059px;

  // border: solid 1px;
`;
