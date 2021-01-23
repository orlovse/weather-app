import * as React from 'react';
import { ThemeProvider as StyledComponentsProvider } from 'styled-components';
import GlobalStyle from '../globalStyle';
import { theme, themeDark } from './theme';
import { ReactNode } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { isDarkSelector } from 'store/selectors/localUserOptions.selector';
import { ApplicationState } from 'store/types';

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
	children: ReactNode;
};

const connector = connect((state: ApplicationState) => ({
	isDark: isDarkSelector(state),
}));

const ThemeProvider: React.FC<Props> = ({ children, isDark }: Props) => {
	const currentTheme = isDark ? themeDark : theme;
	return (
		<StyledComponentsProvider theme={currentTheme}>
			<GlobalStyle />
			{children}
		</StyledComponentsProvider>
	);
};

export default connector(ThemeProvider);
