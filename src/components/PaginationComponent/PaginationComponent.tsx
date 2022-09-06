import React from 'react';
import { ReactComponent as LeftDirection } from 'icons/left-direction.svg';
import { ReactComponent as RightDirection } from 'icons/right-direction.svg';
import styles from './PaginationComponent.module.scss';

interface Props {
	currentPage: number;
	totalPage: number;
	onPrev: () => void;
	onNext: () => void;
}

const PaginationComponent: React.FC<Props> = ({ currentPage, totalPage, onPrev, onNext }) => {
	return (
		<div className={styles.Pagination}>
			<div className={`icon-box ${currentPage === 1 && 'disabled'}`} onClick={onPrev}>
				<LeftDirection />
			</div>
			<span>{currentPage}</span>
			<div className={`icon-box ${currentPage === totalPage && 'disabled'}`} onClick={onNext}>
				<RightDirection />
			</div>
		</div>
	);
};

export default PaginationComponent;
