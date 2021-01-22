import React from 'react';
import type { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import { Container, Box } from '@material-ui/core';

import Navbar from 'components/navbar';

interface IProps {
	children: ReactNode;
}
// here we add the private route logic
const AppLayout: React.FC<IProps> = ({ children }: IProps) => {
	return (
		<div>
			<Navbar />
			<ToastContainer autoClose={2000} />
			<Container>
				<Box marginBottom={4}>{children}</Box>
			</Container>
		</div>
	);
};

export default AppLayout;
