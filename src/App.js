import { BsSearch } from "react-icons/bs";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Card from "./components/Card";
import {useEffect, useState} from "react";

/* const arrProds = [
	{
		"key": 1,
		"title": "Чоловічі кросівки Nike Blazer Mid Suede",
		"image": "1.jpg",
		"price": "12999"
	},
	{
		"key": 2,
		"title": "Чоловічі кросівки Nike Air Max 270",
		"image": "2.jpg",
		"price": "12999"
	},
	{
		"key": 3,
		"title": "Чоловічі кросівки Nike Blazer Mid Suede",
		"image": "3.jpg",
		"price": "8499"
	},
	{
		"key": 4,
		"title": "Кросівки Puma X Aka Boku Future Rider",
		"image": "4.jpg",
		"price": "8999"
	},
	{
		"key": 5,
		"title": "Чоловічі кросівки Under Armour Curry 8",
		"image": "5.jpg",
		"price": "15199"
	},
	{
		"key": 6,
		"title": "Чоловічі кросівки Nike Kyrie 7",
		"image": "6.jpg",
		"price": "11299"
	},
	{
		"key": 7,
		"title": "Чоловічі кросівки Jordan Air Jordan 11",
		"image": "7.jpg",
		"price": "10799"
	},
	{
		"key": 8,
		"title": "Чоловічі кросівки Nike LeBron XVIII",
		"image": "8.jpg",
		"price": "16499"
	}
]; */
export default function App() {
	const [items, setItems] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [cartOpened, setCartOpened] = useState(false);

	useEffect(() => {
		fetch('https://63c1c10f99c0a15d28f184b1.mockapi.io/items')
			.then((res) => {
				return res.json();
			})
			.then((json) => {
				setItems(json);
			});
	}, []);

	const onAddToCart = (item) => {
		console.log('add to cart');
	}

	return (
		<div className="wrapper">
			{cartOpened && <Drawer cartItems={cartItems} onCloseCart={() => setCartOpened(false)} />}
			<Header onOpenCart={() => setCartOpened(true)} />
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
					{
						items.map(({ key, title, price, image }) => (
							<div key={key}>
								<Card
									title={title}
									price={price}
									image={image}
									onAddToCart={onAddToCart}
								/>
							</div>
						))
					}
				</div>

			</div>
    </div>
  );
}
