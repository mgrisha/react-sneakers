import React from 'react';
import { BsCart3, BsHeart, BsPersonCircle } from "react-icons/bs";

function Header({ onOpenCart, totalPrice }) {
	return (
		<header className="header">
			<div className="header-logo">
				<img className="logo" src="/static/images/logo.png" alt="logo" />
				<div className="d-flex flex-column ms-3">
					<div className="header-logo__title">react sneakers</div>
					<div className="header-logo__subtitle">Магазин найкращих кросівок</div>
				</div>
			</div>
			<div className="header-cart">
				<div className="header-cart__cart" onClick={onOpenCart}>
					<BsCart3 className="header-cart__image" />
					<span className="header-cart__price">{totalPrice} грн</span>
				</div>
				<BsHeart className="header-cart__favorites" />
				<BsPersonCircle  className="header-cart__cabinet" />
			</div>
		</header>
	);
}

export default Header;