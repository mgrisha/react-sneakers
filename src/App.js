import { BsSearch } from "react-icons/bs";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
export default function App() {
	return (
		<div className="wrapper">
			<Drawer />
			<Header />
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
					<Card />
					{ /* <div className="card">
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
					</div> */ }
				</div>

			</div>
    </div>
  );
}
