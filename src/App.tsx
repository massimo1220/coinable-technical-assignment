import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AnimeView from 'pages/AnimeView';
import AnimeDetail from 'pages/AnimeDetail';
import 'scss/style.scss';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<AnimeView />} />
				<Route path='/anime-detail/:id' element={<AnimeDetail />} />
			</Routes>
		</div>
	);
}

export default App;
