import React from 'react';
import ReactHelmet from 'react-helmet';
import Header from 'layouts/Header';
import Footer from 'layouts/Footer';

type Props = {
	title: string;
	className?: string;
	children?: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ title, className = '', children }) => {
	return (
		<>
			<ReactHelmet>
				<title>{title}</title>
			</ReactHelmet>
			<Header />
			<main className={className}>{children}</main>
			<Footer />
		</>
	);
};

export default MainLayout;
