import styled, { css } from 'styled-components';
import type { InterpolationFunction } from 'styled-components';
import heart from '../resources/png/heart.png';

export const centerFlex = `
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const textTruncate = `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const primaryTextColor = '#252525';
export const bodyGray = '#2e3c47';
export const light = '#FFFFFF';
export const gray = '#A5B8C0';
export const darkGray = '#636569';
export const lightGray = '#91A7B5';
export const silver = '#A7A7A9';

// notifications colors
export const success = '#00AF9A';
export const warning = '#ea6c17';
export const error = '#D62E34';
export const info = '#20acfa';

type RotateIcon = InterpolationFunction<{
	isOpen: boolean;
	openDegree?: number;
	closedDegree?: number;
}>;

export const rotateIcon: RotateIcon = ({ isOpen, openDegree = 180, closedDegree = 0 }) => css`
	transform: rotate(${isOpen ? openDegree : closedDegree}deg);
	transition: transform 0.2s;
	transform-origin: center;
`;

export const scrollBarWidth = '6px';

export const scrollbar = css`
	&::-webkit-scrollbar-track {
		box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
		border-radius: 6px;
		background-color: #ffffff;
	}
	&::-webkit-scrollbar {
		width: 0;
		height: 0;
		/* height: 6px; */
		background-color: rgba(166, 185, 200, 0.5);
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 6px;
		background-color: rgba(166, 185, 200, 0.5);
	}
	&::-webkit-scrollbar-thumb:hover {
		background-color: rgba(166, 185, 200, 1);
	}

	&:hover::-webkit-scrollbar {
		width: ${scrollBarWidth};
		height: ${scrollBarWidth};
	}
`;

export const sizes = {
	laptopL: '1024px',
	laptopXl: '1370px',
	laptopXXl: '1600px',
};

export const devices = {
	laptopL: `(min-width: ${sizes.laptopL})`,
	laptopXl: `(min-width: ${sizes.laptopXl})`,
	laptopXXl: `(min-width: ${sizes.laptopXXl})`,
};

export const TextContent = styled.p<{
	size?: number;
	weight?: number;
	lineHeight?: number;
	isTruncate?: boolean;
}>`
	font-size: ${({ size = 14 }) => size}px;
	font-weight: ${({ weight = 300 }) => weight};
	line-height: ${({ lineHeight = 20 }) => lineHeight}px;
	${({ isTruncate }) => isTruncate && textTruncate}
`;

export const GlassBox = styled.div`
	width: 100%;
	box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
	border-radius: 15px;
	background-color: rgba(255, 255, 255, 0.15);
	backdrop-filter: blur(5px);
	text-align: center;
	margin-top: 2rem;
`;

export const StyledWeatherCard = styled.div`
	display: flex;
	align-items: center;
	min-width: 200px;
	height: 280px;
	margin: 1rem;
	box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
	border-radius: 15px;
	background-color: rgba(255, 255, 255, 0.15);
	transition: 0.5s;

	&:hover {
		transform: perspective(1px) scale(1.05);
		box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.6);
	}
`;

interface TitleProps {
	readonly isActive: boolean;
}

export const StyledAnimatedHeart = styled.div<TitleProps>`
	width: 100px;
	height: 100px;
	background: url(${heart}) no-repeat;
	background-position: 0 0;
	cursor: pointer;
	animation: ${props => (props.isActive ? 'heart' : 'none')} 1s steps(28);
	animation-fill-mode: forwards;
	@keyframes heart {
		0% {
			background-position: 0 0;
		}

		100% {
			background-position: -2800px 0;
		}
	}
`;
