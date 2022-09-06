import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AnimeComponent.module.scss';

type Props = {
	data: Record<any, any>;
};

const AnimeComponent: React.FC<Props> = ({ data }) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/anime-detail/${data.mal_id}`);
	};

	return (
		<div className={styles.AnimeComponent} onClick={handleClick}>
			<img src={data.images.jpg.image_url} className='anime-background' alt='anime' />
			<span>{data.title}</span>
		</div>
	);
};

export default AnimeComponent;
