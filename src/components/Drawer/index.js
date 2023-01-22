import React, { useState } from 'react';
import { BsArrowRight, BsX } from "react-icons/bs";
import axios from "axios";

import Info from "../Info";
import { useCart } from "../../hooks/useCart";

import styles from './Drawer.module.scss';

function Drawer({ onCloseCart, onDeleteItem, opened }) {
	const [orderId, setOrderId] = useState(null);
	const [isOrderComplete, setIsOrderComplete] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const { cartItems, setCartItems, totalSum } = useCart();

	const onOrder = async () => {
		try {
			setIsLoading(true);
			const { data } = await axios.post('https://63c1c10f99c0a15d28f184b1.mockapi.io/order', {
				items: cartItems
			});
			await axios.put('https://63c1c10f99c0a15d28f184b1.mockapi.io/cart', []);
			setOrderId(data.id);
			setIsOrderComplete(!isOrderComplete);
			setCartItems([]);
		} catch (err) {
			console.log('Не вдалося сворити замовлення', err);
		}
		setIsLoading(false);
	}

	return (
		<div className={`${styles.overlay} ${opened ? styles['overlay-visible'] : ''}`}>
			<div className={styles.drawer}>
				<div className="d-flex justify-content-between align-items-center mb-4">
					<h2>Кошик</h2>
					<button className="cart-item__delete" onClick={onCloseCart}>
						<BsX />
					</button>
				</div>

				{
					cartItems.length > 0 ?
						(
							<div className="cart-full">
								<div className="cart-items">
									{
										cartItems && cartItems.map((cartItem) => (
											<div className="cart-item" key={cartItem.id}>
												<img className="cart-item__image" src={"/static/images/products/"+cartItem.image} alt="Sneakers" />
												<div className="cart-item__description">
													<div className="item-title">{cartItem.title}</div>
													<div className="item-price">{cartItem.price} грн</div>
												</div>
												<button className="cart-item__delete" onClick={() => onDeleteItem(cartItem.id)}>
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
										<div className="cart-total__price">{totalSum} грн</div>
									</div>
									<div className="d-flex mt-3">
										<div>Податок 5%:</div>
										<div className="cart-total__dashed"></div>
										<div className="cart-total__price">{totalSum / 100 * 5} грн</div>
									</div>
									<button onClick={onOrder} className="cart--button cart-total__button" disabled={isLoading}>
										<span>Оформити замовлення</span>
										<BsArrowRight />
									</button>
								</div>
							</div>
						) : (
							<Info
								image={isOrderComplete ? "./static/images/order-complete.jpg" : "./static/images/cart-empty.jpg"}
								title={isOrderComplete ? "Замовлення оформлено" : "Кошик порожній"}
								description={isOrderComplete ? `Ваше замовлення №${orderId} скоро буде передано кур'єрській доставці` : "Додайте хоча б одну пару кросівок, щоб зробити замовлення."}
							/>
						)
				}
			</div>
		</div>
	);
}

export default Drawer;