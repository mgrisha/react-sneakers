import React from 'react';
import { BsArrowRight, BsX } from "react-icons/bs";

function Drawer() {
	return (
		<div className="overlay d-none">
			<div className="drawer">
				<div className="d-flex justify-content-between align-items-center mb-4">
					<h2>Кошик</h2>
					<button className="cart-item__delete">
						<BsX />
					</button>
				</div>

				<div className="cart-items">

					<div className="cart-item">
						<img className="cart-item__image" src="/static/images/products/1.jpg" alt="Sneakers" />
						<div className="cart-item__description">
							<div className="item-title">Чоловічі кросівки Nike Air Max 270</div>
							<div className="item-price">2 500 грн</div>
						</div>
						<button className="cart-item__delete">
							<BsX />
						</button>
					</div>

					<div className="cart-item">
						<img className="cart-item__image" src="/static/images/products/2.jpg" alt="Sneakers" />
						<div className="cart-item__description">
							<div className="item-title">Чоловічі кросівки Nike Air Max 270</div>
							<div className="item-price">2 500 грн</div>
						</div>
						<button className="cart-item__delete">
							<BsX />
						</button>
					</div>

					<div className="cart-item">
						<img className="cart-item__image" src="/static/images/products/3.jpg" alt="Sneakers" />
						<div className="cart-item__description">
							<div className="item-title">Чоловічі кросівки Nike Air Max 270</div>
							<div className="item-price">2 500 грн</div>
						</div>
						<button className="cart-item__delete">
							<BsX />
						</button>
					</div>
				</div>

				<div className="cart-total">
					<div className="d-flex">
						<div>Разом:</div>
						<div className="cart-total__dashed"></div>
						<div className="cart-total__price">7 500 грн</div>
					</div>
					<div className="d-flex mt-3">
						<div>Податок 5%:</div>
						<div className="cart-total__dashed"></div>
						<div className="cart-total__price">375 грн</div>
					</div>
					<button className="cart-total__button">
						<span>Оформити замовлення</span>
						<BsArrowRight />
					</button>
				</div>

			</div>
		</div>
	);
}

export default Drawer;