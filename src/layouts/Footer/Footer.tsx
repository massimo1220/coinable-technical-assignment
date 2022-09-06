import React from 'react';
import { ReactComponent as ArrowUp } from 'icons/arrow-up.svg';
import './Footer.scss';

const Footer = () => {
	return (
		<footer>
			<div className='container'>
				<div className='left-panel'>
					<h4>Your name</h4>
					<span>A few words about how you found Coinable and how did you feel about this task :)</span>
				</div>
				<div className='right-panel'>
					<ArrowUp />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
