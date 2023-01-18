import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import { Route, Routes } from 'react-router-dom';
import Favorites from "./pages/Favorites";

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
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchData () {
			// const cartResponse = await axios.get('https://63c1c10f99c0a15d28f184b1.mockapi.io/cart');
			const favoritesResponse = await axios.get('https://63c1c10f99c0a15d28f184b1.mockapi.io/favorite');
			const itemsResponse = await axios.get('https://63c1c10f99c0a15d28f184b1.mockapi.io/items');

			// setCartItems(cartResponse);
			setFavItems(favoritesResponse.data);
			setItems(itemsResponse.data);

			setIsLoading(false);
		}
		fetchData();
		// axios.get('https://63c1c10f99c0a15d28f184b1.mockapi.io/cart').then(res => {
		// 	setCartItems(res.data);
		// });
		// axios.get('https://63c1c10f99c0a15d28f184b1.mockapi.io/favorite').then(res => {
		// 	setFavItems(res.data);
		// });
	}, []);

	const onAddToCart = async (item) => {
		try {
			if (cartItems.find((cartItem) => cartItem.uniqId === item.uniqId)) {
				await axios.delete(`https://63c1c10f99c0a15d28f184b1.mockapi.io/cart/${item.id}`);
				setCartItems((prev) => prev.filter((prevItem) => prevItem.uniqId !== item.uniqId));
			} else {
				await axios.post('https://63c1c10f99c0a15d28f184b1.mockapi.io/cart', item);
				setCartItems((prev) => [...prev, item]);
			}
		} catch (error) {
			console.log('Помилка з товарами в кошику', error)
		}
	}

	const onAddToFavorite = async (item) => {
		try {
			if (favItems.find((favItem) => favItem.uniqId === item.uniqId)) {
				await axios.delete(`https://63c1c10f99c0a15d28f184b1.mockapi.io/favorite/${item.id}`);
				setFavItems((prev) => prev.filter((prevItem) => prevItem.uniqId !== item.uniqId));
			} else {
				const { data } = await axios.post('https://63c1c10f99c0a15d28f184b1.mockapi.io/favorite', item);
				setFavItems((prev) => [...prev, data]);
			}
		} catch (error) {
			console.log('Не вдалося добавити до обраних', error);
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
				<Route
					path="/"
					exact
					element={<Home searchItem={searchItem} searchItems={searchItems} items={items} cartItems={cartItems} favItems={favItems} onAddToCart={onAddToCart} onAddToFavorite={onAddToFavorite} isLoading={isLoading} />}
				/>
				<Route path="/favorites" element={<Favorites favItems={favItems} onAddToFavorite={onAddToFavorite} isLoading={isLoading} onAddToCart={onAddToCart} favorite />} exact />
			</Routes>
    </div>
  );
}
