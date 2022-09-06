import React, { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';
import { ReactComponent as ArrorRight } from 'icons/arrow-right.svg';
import styles from './SearchComponent.module.scss';

interface Props {
	open: boolean;
	onClose: () => void;
}

const customStyles = {
	content: {
		border: '0px',
		padding: '10px',
		marginLeft: '50%',
		transform: 'translate(-50%, 0%)',
		height: 'fit-content',
		outline: '0px',
	},
};

const SearchComponent: React.FC<Props> = ({ open, onClose }) => {
	const [keyword, setKeyword] = useState<string>('');
	const [searchResult, setSearchResult] = useState<Array<Record<any, any>>>([]);

	const navigate = useNavigate();

	useEffect(() => {
		const search = async () => {
			const result = await axios.get('https://api.jikan.moe/v4/anime', {
				params: {
					letter: keyword,
					limit: 5,
				},
			});
			console.log(result.data.data);
			setSearchResult(result.data.data);
		};
		if (keyword === '') return;
		search();
	}, [keyword]);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const handleKeywordChanged = useCallback(
		debounce((e) => setKeyword(e.target.value), 300),
		[]
	);

	return (
		<Modal
			isOpen={open}
			onRequestClose={onClose}
			contentLabel='Search'
			className={styles.searchModal}
			style={customStyles}
			ariaHideApp={false}
		>
			<div className='search-input-box'>
				<input
					type='text'
					placeholder='You can search for ‘Kyoukai no Kanata’ for example'
          autoFocus
					onChange={handleKeywordChanged}
				/>
			</div>
			{keyword !== '' && (
				<div className='search-result'>
					{searchResult.map((item, index) => (
						<div
							className='result-item'
							key={'search-result-' + index}
							onClick={() => navigate(`/anime-detail/${item.mal_id}`)}
						>
							<img src={item.images.jpg.image_url} alt='' />
							<div>
								<span className='title limit-line'>Shingeki no Kyojin: Attack on Skytree</span>
								<span className='description'>{`${item.type} ${item.status}`}</span>
							</div>
							<ArrorRight />
						</div>
					))}
					{keyword !== '' && searchResult.length === 0 && (
						<span className='title text-center'>Oops it seems there is nothing for `{keyword}`</span>
					)}
				</div>
			)}
		</Modal>
	);
};

export default SearchComponent;
