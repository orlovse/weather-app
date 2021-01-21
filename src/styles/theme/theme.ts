import { css, FlattenSimpleInterpolation, InterpolationFunction } from 'styled-components';
import {
	centerFlex,
	scrollbar,
	rotateIcon,
	bodyGray,
	light,
	gray,
	darkGray,
	lightGray,
	success,
	warning,
	error,
	info,
} from '../sharedStyle';

export type ThemeType = {
	colors: {
		primary: {
			light: string;
			dark: string;
			contrastText: string;
		};
		status: {
			success: string;
			warning: string;
			error: string;
			info: string;
		};
		bodyGray: string;
		light: string;
		gray: string;
		darkGray: string;
		lightGray: string;
	};
	utils: {
		centerFlex: string;
		scrollbar: FlattenSimpleInterpolation;
		rotateIcon: InterpolationFunction<{
			isOpen: boolean;
			openDegree?: number;
			closedDegree?: number;
		}>;
		quickTransition: string;
		normalTransition: string;
	};
	spacing: {
		s: number;
		m: number;
		l: number;
		xl: number;
		xxl: number;
	};
	shadow: {
		m: FlattenSimpleInterpolation;
		l: FlattenSimpleInterpolation;
	};
	textSizes: {
		s: number;
		m: number;
		l: number;
		xl: number;
	};
};

const sharedTheme = {
	textSizes: {
		s: 10,
		m: 14,
		l: 18,
		xl: 24,
	},
	utils: {
		centerFlex,
		scrollbar,
		rotateIcon,
		quickTransition: `0.125s ease-in-out`,
		normalTransition: `0.250s ease-in-out`,
	},
	spacing: {
		s: 4,
		m: 8,
		l: 16,
		xl: 24,
		xxl: 32,
	},
	shadow: {
		m: css`
			box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
		`,
		l: css`
			box-shadow: rgba(3, 8, 20, 0.1) 0 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0 0.075rem 0.175rem;
		`,
	},
};

const theme: ThemeType = {
	colors: {
		primary: {
			light: '#757ce8',
			dark: '#222831',
			contrastText: '#f9fafa',
		},
		status: {
			success,
			warning,
			error,
			info,
		},
		bodyGray,
		light,
		gray,
		darkGray,
		lightGray,
	},
	...sharedTheme,
};

export default theme;
