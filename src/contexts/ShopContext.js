import React, { useState, createContext, useEffect, useCallback } from 'react';
import useLocalState from '../utils/UseLocalState';

// service
import { getPokemonByType } from '../services';

const ShopContext = createContext();

const ShopContextProvider = (props) => {
	const [isLoading, setIsLoading] = useState(false);
	const [shop, setShop] = useLocalState('shop', 'electric');
	const [shopData, setShopData] = useLocalState('data', []);
	const [selected, setSelectedPokemon] = useLocalState('selected', null);
	const [message, setMessage] = useLocalState('message', '');
	const [cart, setAddToCart] = useLocalState('cart', []);
	const [displayToast, setDisplayToast] = useState(false);
	const [total, setTotal] = useLocalState('total', 0);
	const [checkout, setCheckout] = useState(false);
	const [resetCart, setResetCart] = useState(false);

	const state = {
		isLoading,
		shop,
		shopData,
		selected,
		message,
		cart,
		displayToast,
		total,
		checkout,
		resetCart,
	};

	const actions = {
		setIsLoading,
		setShop,
		setShopData,
		setSelectedPokemon,
		setMessage,
		setAddToCart,
		setDisplayToast,
		setTotal,
		setCheckout,
		setResetCart,
	};

	const getResults = useCallback(async (searchStr) => {
		setIsLoading(true);

		try {
			const response = await getPokemonByType(searchStr);

			setShopData(response.data.pokemon);
			setMessage(`${searchStr} Pokemón shop`);
		} catch (error) {
			setMessage(error);
			console.error(error);
		}

		setIsLoading(false);
	}, []);

	const getTotal = useCallback(() => {
		const cartTotal = cart.reduce(function (total, current) {
			return total + current.base_experience;
		}, 0);

		return cartTotal;
	}, [cart]);

	useEffect(() => {
		if (shopData && shopData.length > 0) {
			setMessage(`${shop} Pokemón shop`);
		}
	}, [shopData, shop]);

	useEffect(() => {
		if (shop) {
			getResults(shop);
		}
	}, [shop]);

	useEffect(() => {
		const total = getTotal();

		setTotal(total);
		// setDisplayToast(true);
	}, [cart]);

	useEffect(() => {
		if (checkout) {
			setAddToCart([]);
			setTotal(0);
			setResetCart(true);
			setResetCart(false);
			setSelectedPokemon(null);
		}
	}, [checkout]);

	return (
		<ShopContext.Provider value={{ ...state, actions: actions }}>
			{props.children}
		</ShopContext.Provider>
	);
};

export { ShopContext, ShopContextProvider };
