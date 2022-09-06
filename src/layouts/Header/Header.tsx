import React, { useState } from 'react';
import SearchComponent from 'components/SearchComponent';
import { ReactComponent as SearchIcon } from 'icons/search.svg';
import './Header.scss';

const Header = () => {
	const [open, setOpen] = useState<boolean>(false);

	const today = new Date();
	let day = today.getDate();
	let monthLong = today.toLocaleString('default', { month: 'long' });
	let monthShort = today.toLocaleString('default', { month: 'short' });

	return (
		<>
			<header>
				<div className='container'>
					<h2>Anime</h2>
					<div className='search-bar' onClick={() => setOpen(true)}>
						<SearchIcon />
						<span>Search...</span>
					</div>
					<div className='current-date'>
						<span className='wide-screen'>
							Today is the
							<span className='underline'>
								{day}th of {monthLong}
							</span>
						</span>
						<span className='mobile-screen'>
							{monthShort} {day}th
						</span>
					</div>
				</div>
			</header>
			<SearchComponent open={open} onClose={() => setOpen(false)} />
		</>
	);
};

export default Header;
