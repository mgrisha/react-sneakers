import React from 'react';
import {BsHeart, BsPlus} from "react-icons/bs";

export default function Card() {
	return (
		<div className="card">
			<button className="card-favorite">
				<BsHeart />
			</button>
			<img className="card-image" src="/static/images/products/1.jpg" alt=""/>
			<div>Чоловічі кросівки Nike Blazer Mid Suede</div>
			<div className="d-flex justify-content-between align-items-center mt-3">
				<div className="d-flex flex-column">
					<div className="card-price__title">Ціна:</div>
					<div className="card-price__price">2 500 грн</div>
				</div>
				<button className="card-add">
					<BsPlus />
				</button>
			</div>
		</div>
	);
}
