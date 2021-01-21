import React from 'react';
import type { ReactNode } from 'react';
import Navbar from 'components/navbar';
import { Container, Box } from '@material-ui/core';

interface IProps {
	children: ReactNode;
}
// here we add the private route logic
const AppLayout: React.FC<IProps> = ({ children }: IProps) => {
	return (
		<div>
			<Navbar />
			<Container>
				<Box marginBottom={4}>{children}</Box>
			</Container>
		</div>
	);
};

export default AppLayout;
