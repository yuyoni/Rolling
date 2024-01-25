import styled from 'styled-components';

export const ItemBox = styled.div`
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
  justify-content: center;
  gap: 10px;

  /* 테블릿 */
  @media (max-width: 1248px) {
    /* width: 50%; */
  }

  /* 모바일 */
  @media (max-width: 768px) {
    width: 114px;
    height: 90px;
    border-radius: 6.5px;
    gap: 5px;
    /* justify-content: center; */
    /* align-items: center; */
  }
`;

export const BasicBox = styled(ItemBox)`
  position: relative;
`;

export const FirstBox = styled.div`
  display: flex;
  width: 100%;
  padding: 0 24px 0px 24px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  /* 모바일 */
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const InfoBox = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 10px;
  /* width: 100%; */
`;

export const ProfileImage = styled.img`
  display: flex;
  height: 34px;
  border-radius: 50px;

  // border: 1px solid;
  // background: url(<path-to-image>);
  // lightgray 50% / cover no-repeat;
  // border: 1.5px solid var(--white);
  // background: var(--white);

  /* 모바일 */
  @media (max-width: 768px) {
    height: 20px;
  }
`;

export const Image = styled.img`
  position: absolute;

  @media (max-width: 768px) {
    height: 20%;
  }
`;

export const MouseImage = styled(Image)`
  right: 40px;
  @media (max-width: 768px) {
    right: 20px;
  }
`;

export const WhoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1px;
  /* width: 100%; */
`;

export const Name = styled.div`
  color: #000;
  font-family: 'Pretendard';
  font-weight: 700;
  font-size: 12px;
  line-height: 18px; /* 120% */
  /* width: 100%; */

  /* 모바일 */
  @media (max-width: 768px) {
    font-size: 8px;
    line-height: 10px; /* 120% */
  }
`;

export const rel = styled.div`
  color: var(--Purple-700, #861dee);
  font-family: Pretendard;
  font-size: 9.877px;
  font-style: normal;
  font-weight: 400;
  line-height: 13.827px; /* 140% */

  border-radius: 2.141px;
  background: var(--Purple-200, #ecd9ff);

  /* 모바일 */
  @media (max-width: 768px) {
    font-size: 6px;
    line-height: 10px; /* 120% */
  }
`;

export const Line = styled.div`
  width: 180px;
  height: 1px;
  flex-shrink: 0;
  background: #e1e1e1;
`;

export const SecondBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 180px;
  height: 54px;
  flex-shrink: 0;

  overflow: hidden;
  color: #555;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'Pretendard';
  font-size: 12px;
  line-height: 18px; /* 150% */
  letter-spacing: -0.06px;

  /* 모바일 */
  @media (max-width: 768px) {
    width: 100px;
    height: 30px;
    font-size: 8px;
    line-height: 10px; /* 120% */
  }

  // border: solid 1px;
`;

export const date = styled.div`
  color: #777;
  font-family: 'Pretendard';
  font-size: 10px;
  line-height: 13px; /* 130.071% */

  /* 모바일 */
  @media (max-width: 768px) {
    font-size: 6px;
    line-height: 7px; /* 130.071% */
  }
`;
