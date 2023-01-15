import { BsSearch } from "react-icons/bs";
import axios from "axios";
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
	const [favItems, setFavItems] = useState([]);
	const [cartOpened, setCartOpened] = useState(false);
	const [searchItem, setSearchItem] = useState('');
	// const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		axios.get('https://63c1c10f99c0a15d28f184b1.mockapi.io/items').then(res => {
			setItems(res.data);
			// console.log(res.data);
		});
		axios.get('https://63c1c10f99c0a15d28f184b1.mockapi.io/cart').then(res => {
			setCartItems(res.data);
		});
	}, []);

	const onAddToCart = (item) => {
		if (cartItems.find((cartItem) => cartItem.uniqId=== item.uniqId)) {
			// axios.delete(`https://63c1c10f99c0a15d28f184b1.mockapi.io/cart/${item.id}`);
			setCartItems((prev) => prev.filter((prevItem) => prevItem.uniqId !== item.uniqId));
		} else {
			// axios.post('https://63c1c10f99c0a15d28f184b1.mockapi.io/cart', item);
			setCartItems((prev) => [...prev, item]);
		}
	}

	const onAddToFavorite = (item) => {
		if (favItems.find((favItem) => favItem.uniqId === item.uniqId)) {
			axios.delete(`https://63c1c10f99c0a15d28f184b1.mockapi.io/favorite/${item.uniqId}`);
			setFavItems((prev) => prev.filter((prevItem) => prevItem.uniqId !== item.uniqId));
		} else {
			axios.post('https://63c1c10f99c0a15d28f184b1.mockapi.io/favorite', item);
			setFavItems((prev) => [...prev, item]);
		}
	}

	const deleteItemFromCart = (uniqId) => {
		axios.delete(`https://63c1c10f99c0a15d28f184b1.mockapi.io/cart/${uniqId}`);
		setCartItems(prev => prev.filter(item => item.uniqId !== uniqId));
	}

	const searchItems = (event) => {
		setSearchItem(event.target.value);
	}

	return (
		<div className="wrapper">
			{cartOpened && <Drawer cartItems={cartItems} onCloseCart={() => setCartOpened(false)} onDeleteItem={deleteItemFromCart} />}
			<Header onOpenCart={() => setCartOpened(true)} totalPrice={0} />
			<div className="main-slider">Main Slider</div>
			<div className="content">
				<div className="d-flex align-items-center justify-content-between mb-5">
					<h1>{}</h1>
					<div className="search-block d-flex">
						<BsSearch className="search-icon" />
						<input type="search" placeholder="Пошук..." onChange={searchItems} />
					</div>
				</div>
				<div className="content-products">
					{
						items.filter((item) => item.title.toLowerCase().includes(searchItem)).map((item) => (
							<Card
								key={item.uniqId}
								{...item}
								onAddToCart={onAddToCart}
								onAddToFavorite={onAddToFavorite}
							/>
						))
					}
				</div>

			</div>
    </div>
  );
}
