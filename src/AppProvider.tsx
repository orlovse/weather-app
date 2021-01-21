import React from 'react';
import type { ReactNode } from 'react';
// add redux store
import { Provider } from 'react-redux';
// add router
import { ConnectedRouter } from 'connected-react-router';
// add style provider
import AppTheme from 'styles/theme/ThemeProvider';
import history from 'router/history';
import configureStore from './store';

interface IProps {
	children: ReactNode;
}

const store = configureStore();
const AppProvider: React.FC<IProps> = ({ children }: IProps) => {
	return (
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<AppTheme>{children}</AppTheme>
			</ConnectedRouter>
		</Provider>
	);
};

export default AppProvider;
