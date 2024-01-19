import styled from 'styled-components';

const HeadingStyle = styled.label`
  color: var(--gray-900, #181818);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 150% */
  letter-spacing: -0.24px;
`;

export default function Heading({ children }) {
  return <HeadingStyle>{children}</HeadingStyle>;
}
