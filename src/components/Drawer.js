import React from 'react';
import { BsArrowRight, BsX } from "react-icons/bs";

function Drawer({ cartItems, onCloseCart }) {
	return (
		<div className="overlay">
			<div className="drawer">
				<div className="d-flex justify-content-between align-items-center mb-4">
					<h2>Кошик</h2>
					<button className="cart-item__delete" onClick={onCloseCart}>
						<BsX />
					</button>
				</div>

				<div className="cart-items">
					{
						cartItems && cartItems.map((cartItem) => (
							<div className="cart-item">
								<img className="cart-item__image" src={"/static/images/products/"+cartItem.image} alt="Sneakers" />
								<div className="cart-item__description">
									<div className="item-title">{cartItem.title}</div>
									<div className="item-price">{cartItem.price} грн</div>
								</div>
								<button className="cart-item__delete">
									<BsX />
								</button>
							</div>
						))
					}
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