import React, {useContext} from 'react';
import { BsCart3, BsHeart, BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import AppContext from "../context";

function Header({ onOpenCart }) {
	const { cartItems } = useContext(AppContext);
	const totalSum = cartItems.reduce((sum, cartItem) => Number(cartItem.price) + sum, 0);
	return (
		<header className="header">
			<Link to="/">
				<div className="header-logo">
					<img className="logo" src="/static/images/logo.png" alt="logo" />
					<div className="d-flex flex-column ms-3">
						<div className="header-logo__title">react sneakers</div>
						<div className="header-logo__subtitle">Магазин найкращих кросівок</div>
					</div>
				</div>
			</Link>
			<div className="header-cart">
				<div className="header-cart__cart" onClick={onOpenCart}>
					<BsCart3 className="header-cart__image" />
					<span className="header-cart__price">{totalSum} грн</span>
				</div>
				<Link to="/favorites">
					<BsHeart className="header-cart__favorites" />
				</Link>
				<BsPersonCircle  className="header-cart__cabinet" />
			</div>
		</header>
	);
}

export default Header;