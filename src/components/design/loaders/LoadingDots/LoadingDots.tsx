import styled, { css, keyframes } from 'styled-components';

export const LoadingDots = () => {
	return (
		<StyledDotWrapper>
			<Dot1 />
			<Dot2 />
			<Dot3 />
		</StyledDotWrapper>
	);
};

const StyledDotWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const grow = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.5;
  }

  25% {
    transform: scale(1.8);
    opacity: 1;
  }

  50% {
    transform: scale(1);
    opacity: 0.5;
  }

  100% {
    transform: scale(1);
    opacity: 0.5;
  }
`;

const LoadingDotAnimation = () => css`
	${grow} 0.7s linear infinite;
`;

const Dot = styled.div(
	({ theme: { color } }) => css`
		margin: 0 3px;
		width: 8px;
		height: 8px;
		background: ${color.loadingDot};
		border-radius: 100%;
	`
);

const Dot1 = styled(Dot)`
	animation: ${LoadingDotAnimation};
	animation-delay: 0s;
`;
const Dot2 = styled(Dot)`
	animation: ${LoadingDotAnimation};
	animation-delay: 0.1s;
`;
const Dot3 = styled(Dot)`
	animation: ${LoadingDotAnimation};
	animation-delay: 0.2s;
`;
