import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

import AppContext from "./context";
import Orders from "./pages/Orders";

export default function App() {
	const [items, setItems] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [favItems, setFavItems] = useState([]);
	const [cartOpened, setCartOpened] = useState(false);
	const [searchItem, setSearchItem] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchData () {
			const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
				axios.get('https://63c1c10f99c0a15d28f184b1.mockapi.io/cart'),
				axios.get('https://63c1c10f99c0a15d28f184b1.mockapi.io/favorites'),
				axios.get('https://63c1c10f99c0a15d28f184b1.mockapi.io/items')
			]);

			// const cartResponse = await axios.get('https://63c1c10f99c0a15d28f184b1.mockapi.io/cart');
			// const favoritesResponse = await axios.get('https://63c1c10f99c0a15d28f184b1.mockapi.io/favorite');
			// const itemsResponse = await axios.get('https://63c1c10f99c0a15d28f184b1.mockapi.io/items');

			setCartItems(cartResponse.data);
			setFavItems(favoritesResponse.data);
			setItems(itemsResponse.data);

			// console.log(favItems);

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
		const cartItemsMock = cartItems.find((cartItem) => cartItem.uniqId === item.uniqId);
		if (cartItemsMock) {
			try {
				await axios.delete(`https://63c1c10f99c0a15d28f184b1.mockapi.io/cart/${cartItemsMock.id}`);
				setCartItems((prev) => prev.filter((prevItem) => prevItem.uniqId !== item.uniqId));
			} catch (error) {
				console.error('?????????????? ?? ???????????????????? ???????????? ?? ????????????', error);
			}
		} else {
			try {
				const { data } = await axios.post('https://63c1c10f99c0a15d28f184b1.mockapi.io/cart', item);
				setCartItems((prev) => [...prev, data]);
			} catch (error) {
				console.error('?????????????? ?? ???????????????????? ???????????? ?? ????????????', error);
			}
		}
	}

	const onAddToFavorite = async (item) => {
		const favItemsMock = favItems.find((favItem) => favItem.uniqId === item.uniqId);
		if (favItemsMock) {
			try	{
				await axios.delete(`https://63c1c10f99c0a15d28f184b1.mockapi.io/favorites/${favItemsMock.id}`);
				setFavItems((prev) => prev.filter((prevItem) => prevItem.uniqId !== item.uniqId));
			} catch (error) {
				console.error('?????????????? ?? ???????????????????? ???????????? ?? ??????????????', error);
			}
		} else {
			try	{
				const { data } = await axios.post('https://63c1c10f99c0a15d28f184b1.mockapi.io/favorites', item);
				setFavItems((prev) => [...prev, data]);
			} catch (error) {
				console.error('?????????????? ?? ???????????????????? ???????????? ???? ??????????????', error);
			}
		}
	}

	const deleteItemFromCart = (id) => {
		axios.delete(`https://63c1c10f99c0a15d28f184b1.mockapi.io/cart/${id}`);
		setCartItems(prev => prev.filter(item => item.id !== id));
	}

	const searchItems = (event) => {
		setSearchItem(event.target.value);
	}

	const cartItemIsAdded = (uniqId) => {
		return cartItems.some((cartItem) => cartItem.uniqId === uniqId);
	}

	const favItemIsAdded = (uniqId) => {
		return favItems.some((favItem) => favItem.uniqId === uniqId);
	}

	return (
		<AppContext.Provider value={{ items, cartItems, setCartOpened, setCartItems, favItems, onAddToFavorite, onAddToCart, cartItemIsAdded, favItemIsAdded }}>
			<div className="wrapper">
				<Drawer cartItems={cartItems} onCloseCart={() => setCartOpened(false)} onDeleteItem={deleteItemFromCart} opened={cartOpened} />
				<Header onOpenCart={() => setCartOpened(true)} />
				<Routes>
					<Route
						path="/"
						exact
						element=
							{
								<Home
									searchItem={searchItem}
									searchItems={searchItems}
									onAddToCart={onAddToCart}
									onAddToFavorite={onAddToFavorite}
									isLoading={isLoading}
								/>
							}
					/>
					<Route path="/favorites" element={<Favorites onAddToFavorite={onAddToFavorite} isLoading={isLoading} onAddToCart={onAddToCart} favorite />} exact />
					<Route path="/orders" element={<Orders /> } exact />
				</Routes>
			</div>
		</AppContext.Provider>
  	);
}
