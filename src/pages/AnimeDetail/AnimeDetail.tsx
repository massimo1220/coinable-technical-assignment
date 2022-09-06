import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from 'icons/arrow-left.svg';
import { ReactComponent as Tick } from 'icons/tick.svg';
import styles from './AnimeDetail.module.scss';
import axios from 'axios';

const AnimeDetail = () => {
	const [data, setData] = useState<Record<any, any>>({});
	const { id } = useParams();
	const navigate = useNavigate();
	useEffect(() => {
		console.log(id);
		const loadData = async () => {
			const result = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
			console.log(result.data.data);
			setData(result.data.data);
		};
		loadData();
	}, [id]);
	return (
		<div className={styles.AnimeDetail}>
			<div className='container'>
				<div className='goto-main' onClick={() => navigate('/')}>
					<ArrowLeft />
					Go back to Main
				</div>
				<div className='content'>
					<div className='main-content'>
						<img src={data.images?.jpg?.small_image_url} alt='anime' />
						<div className='information'>
							<span className='anime-title'>
								{data.title}
								<Tick />
							</span>
							<div className='type-value'>
								<div className='type-field'>
									<span className='type'>Type</span>
									<span className='value'>{data.type}</span>
								</div>
								<div className='type-field'>
									<span className='type'>Source</span>
									<span className='value'>{data.source}</span>
								</div>
								<div className='type-field'>
									<span className='type'>Episodes</span>
									<span className='value'>{data.episodes}</span>
								</div>
								<div className='type-field'>
									<span className='type'>Status</span>
									<span className='value'>{data.status}</span>
								</div>
							</div>
							<div className='main-value'>
								<div className='value-item'>
									<span className='count'>{data.score}</span>
									<span className='name'>Score</span>
								</div>
								<div className='value-item'>
									<span className='count'>{data.rank}</span>
									<span className='name'>Rank</span>
								</div>
								<div className='value-item'>
									<span className='count'>{data.popularity}</span>
									<span className='name'>Popularity</span>
								</div>
							</div>
						</div>
					</div>
					<div className='description'>
						<span className='title'>Description</span>
						<br />
						<span className='detail'>{data.synopsis}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AnimeDetail;
