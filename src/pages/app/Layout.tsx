import React from 'react';
import type { ReactNode } from 'react';

interface IProps {
	children: ReactNode;
}
// here we add the private route logic
const AppLayout: React.FC<IProps> = ({ children }: IProps) => {
	return <div>{children}</div>;
};

export default AppLayout;
