import { BsCart3, BsHeart, BsPersonCircle, BsPlus, BsSearch, BsX } from "react-icons/bs";

export default function App() {
	return (
		<div className="wrapper">

			<div className="overlay">
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
					</div>

				</div>
			</div>

			<header className="header">
        		<div className="header-logo">
          			<img className="logo" src="/static/images/logo.png" alt="logo" />
				  	<div className="d-flex flex-column ms-3">
						<div className="header-logo__title">react sneakers</div>
						<div className="header-logo__subtitle">Магазин найкращих кросівок</div>
				  	</div>
				</div>
				<div className="header-cart">
					<div className="header-cart__cart">
						<BsCart3 className="header-cart__image" />
						<span className="header-cart__price">2 500 грн</span>
					</div>
					<BsHeart className="header-cart__favorites" />
					<BsPersonCircle  className="header-cart__cabinet" />
				</div>
			</header>
			<div className="main-slider">Main Slider</div>
			<div className="content">
				<div className="d-flex align-items-center justify-content-between mb-5">
					<h1>Всі кросівки</h1>
					<div className="search-block d-flex">
						<BsSearch className="search-icon" />
						<input type="search" placeholder="Пошук..." />
					</div>
				</div>
				<div className="content-products">
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
					<div className="card">
						<img className="card-image" src="/static/images/products/2.jpg" alt=""/>
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
					<div className="card">
						<img className="card-image" src="/static/images/products/3.jpg" alt=""/>
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
					<div className="card">
						<img className="card-image" src="/static/images/products/4.jpg" alt=""/>
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
				</div>

			</div>
    </div>
  );
}
