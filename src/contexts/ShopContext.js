import React, { useState, createContext, useEffect, useCallback } from 'react';
import useLocalState from '../utils/UseLocalState';

// service
import { getPokemonByType } from '../services';

const ShopContext = createContext();

const ShopContextProvider = ({ theme, setTheme, children }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [shopData, setShopData] = useLocalState('data', []);
	const [selected, setSelectedPokemon] = useLocalState('selected', null);
	const [message, setMessage] = useLocalState('message', '');
	const [cart, setAddToCart] = useLocalState('cart', []);
	const [displayToast, setDisplayToast] = useState(false);
	const [total, setTotal] = useLocalState('total', 0);
	const [checkout, setCheckout] = useState(false);
	const [resetCart, setResetCart] = useState(false);

	const shop = theme.name;

	const state = {
		isLoading,
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
			setMessage('Error on get Pokemón.');
			setShopData([]);
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
		getResults(shop);
	}, [shop]);

	useEffect(() => {
		const total = getTotal();

		setTotal(total);
	}, [cart]);

	// useEffect(() => {
	// 	const types = selected && selected.types;
	// 	const findShop =
	// 		types && selected.types.find((item) => item.type.name === shop);

	// 	if (!findShop) {
	// 		setTheme(fire);
	// 	}
	// }, [selected]);

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
			{children}
		</ShopContext.Provider>
	);
};

export { ShopContext, ShopContextProvider };
