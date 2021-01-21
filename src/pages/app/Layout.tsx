import React from 'react';
import type { ReactNode } from 'react';
import Navbar from 'components/navbar';

interface IProps {
	children: ReactNode;
}
// here we add the private route logic
const AppLayout: React.FC<IProps> = ({ children }: IProps) => {
	return (
		<div>
			<Navbar />
			{children}
		</div>
	);
};

export default AppLayout;
