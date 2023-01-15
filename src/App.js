import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import { Route, Routes } from 'react-router-dom';

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

	useEffect(() => {
		axios.get('https://63c1c10f99c0a15d28f184b1.mockapi.io/items').then(res => {
			setItems(res.data);
		});
		// axios.get('https://63c1c10f99c0a15d28f184b1.mockapi.io/cart').then(res => {
		// 	setCartItems(res.data);
		// });
		axios.get('https://63c1c10f99c0a15d28f184b1.mockapi.io/favorite').then(res => {
			setFavItems(res.data);
		});
	}, []);

	const onAddToCart = (item) => {
		if (cartItems.find((cartItem) => cartItem.id === item.id)) {
			axios.delete(`https://63c1c10f99c0a15d28f184b1.mockapi.io/cart/${item.id}`);
			setCartItems((prev) => prev.filter((prevItem) => prevItem.id !== item.id));
		} else {
			axios.post('https://63c1c10f99c0a15d28f184b1.mockapi.io/cart', item);
			setCartItems((prev) => [...prev, item]);
		}
	}

	const onAddToFavorite = (item) => {
		if (favItems.find((favItem) => favItem.id === item.id)) {
			axios.delete(`https://63c1c10f99c0a15d28f184b1.mockapi.io/favorite/${item.id}`);
			setFavItems((prev) => prev.filter((prevItem) => prevItem.id !== item.id));
		} else {
			axios.post('https://63c1c10f99c0a15d28f184b1.mockapi.io/favorite', item);
			setFavItems((prev) => [...prev, item]);
		}
	}

	const deleteItemFromCart = (id) => {
		axios.delete(`https://63c1c10f99c0a15d28f184b1.mockapi.io/cart/${id}`);
		setCartItems(prev => prev.filter(item => item.id !== id));
	}

	const searchItems = (event) => {
		setSearchItem(event.target.value);
	}

	return (
		<div className="wrapper">
			{cartOpened && <Drawer cartItems={cartItems} onCloseCart={() => setCartOpened(false)} onDeleteItem={deleteItemFromCart} />}
			<Header onOpenCart={() => setCartOpened(true)} totalPrice={0} />
			{/*<Routes>*/}
			{/*	<Route path="/" exact element={} />*/}
			{/*</Routes>*/}
			<Routes>
				<Route path="/" exact element={<Home searchItem={searchItem} searchItems={searchItems} items={items} onAddToCart={onAddToCart} onAddToFavorite={onAddToFavorite} />} />
			</Routes>
    </div>
  );
}
