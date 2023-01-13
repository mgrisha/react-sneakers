import React, { useState } from 'react';
import { BsHeart, BsPlus, BsCheck } from "react-icons/bs";

import styles from './Card.module.scss';

export default function Card({ title, image, price, onAddToCart }) {
	const [isAdded, setIsAdded] = useState(false);

	const addToCart = () => {
		onAddToCart({ title, image, price });
		setIsAdded(!isAdded);
	}

	const classButton = styles['card-add'] + (isAdded ? ' ' + styles['is-active'] : '');

	return (
		<div className={styles.card}>
			<button className={styles['card-favorite']}>
				<BsHeart />
			</button>
			<img className={styles['card-image']} src={`./static/images/products/${image}`} alt=""/>
			<div>{title}</div>
			<div className="d-flex justify-content-between align-items-center mt-3">
				<div className="d-flex flex-column">
					<div className={styles['card-price__title']}>Ціна:</div>
					<div className={styles['card-price__price']}>{price} грн</div>
				</div>
				<button className={classButton} onClick={addToCart}>
					{ isAdded ? <BsCheck /> : <BsPlus /> }
				</button>
			</div>
		</div>
	);
}
