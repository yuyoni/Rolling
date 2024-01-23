import styled, { keyframes } from 'styled-components';

const placeholderGlow = keyframes`
  50% {
    opacity: 0.2;
  }
`;

const Flex = styled.div`
  display: flex;
`;

export const Wrapper = styled(Flex)`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Container = styled(Flex)`
  flex-direction: column;
  gap: 5rem;
`;

export const SkeletonBox = styled(Flex)`
  animation: ${placeholderGlow} 2s ease-in-out infinite;
  flex-direction: column;
  margin-top: 5rem;
  gap: 1.6rem;
`;

export const SkeletonList = styled(Flex)`
  gap: 2rem;
`;

const Skeleton = styled.div`
  background-color: #d8d8d8;
`;

export const SkeletonTitle = styled(Skeleton)`
  width: 20.5rem;
  height: 3.1rem;
  border-radius: 0.8rem;
`;

export const SkeletonItem = styled(Skeleton)`
  width: 27.5rem;
  height: 26rem;
  border-radius: 1.6rem;
  background-color: #d8d8d8;
`;
