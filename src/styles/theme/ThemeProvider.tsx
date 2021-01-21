import * as React from 'react';
import { ThemeProvider as StyledComponentsProvider } from 'styled-components';
import GlobalStyle from '../globalStyle';
import theme from './theme';
import { ReactNode } from 'react';

interface IProps {
	children: ReactNode;
}

const ThemeProvider: React.FC<IProps> = ({ children }: IProps) => (
	<StyledComponentsProvider theme={theme}>
		<GlobalStyle />
		{children}
	</StyledComponentsProvider>
);

export default ThemeProvider;
