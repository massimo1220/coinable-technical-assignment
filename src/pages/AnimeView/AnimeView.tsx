import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'app/store';
import { setCurrentPage, setTotalPage } from 'redux/slices/pagination';
import MainLayout from 'layouts/MainLayout';
import AnimeComponent from 'components/AnimeComponent';
import PaginationComponent from 'components/PaginationComponent';
import styles from './AnimeView.module.scss';
import { scrollToTop } from 'utils';

const AnimeView = () => {
	const [animeData, setAnimeData] = useState<Array<Record<any, any>>>([]);
	const dispatch = useDispatch();

	useEffect(() => {
		const loadAnimeData = async () => {
			const result = await axios.get('https://api.jikan.moe/v4/anime');
			setAnimeData(result.data.data);
			dispatch(setTotalPage(Math.ceil(result.data.data.length / 12)));
		};
		loadAnimeData();
	}, [dispatch]);

	const currentPage = useSelector((state: RootState) => state.pagination.currentPage);
	const totalPage = useSelector((state: RootState) => state.pagination.totalPage);
	const shownData = animeData.slice(12 * (currentPage - 1), 12 * currentPage);

	const handlePrevPage = () => {
		if (currentPage === 1) return;
		dispatch(setCurrentPage(currentPage - 1));
		scrollToTop();
	};

	const handleNextPage = () => {
		if (currentPage === totalPage) return;
		dispatch(setCurrentPage(currentPage + 1));
		scrollToTop();
	};

	return (
		<MainLayout title='Anime View' className={styles.AnimeView}>
			<div className='container'>
				<div className='anime-view'>
					{shownData.map((anime, index) => (
						<AnimeComponent data={anime} key={'anime-detail-' + index} />
					))}
				</div>
				<div className='pagination'>
					<PaginationComponent
						currentPage={currentPage}
						totalPage={totalPage}
						onPrev={handlePrevPage}
						onNext={handleNextPage}
					/>
				</div>
			</div>
		</MainLayout>
	);
};

export default AnimeView;
