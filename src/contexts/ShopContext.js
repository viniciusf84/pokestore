import React, { createContext, useEffect, useCallback } from 'react';
import useLocalState from '../utils/UseLocalState';

// service
import { getPokemonByType } from '../services';

const ShopContext = createContext();

const ShopContextProvider = (props) => {
	const [isLoading, setIsLoading] = useLocalState('isLoading', false);
	const [shop, setShop] = useLocalState('shop', '');
	const [data, setSearchData] = useLocalState('data', []);
	const [selected, setSelectedPokemon] = useLocalState('selected', null);
	const [message, setMessage] = useLocalState('message', '');
	const [cart, setAddToCart] = useLocalState('cart', []);
	const [total, setTotal] = useLocalState('total', 0);
	const [resetCart, setResetCart] = useLocalState('resetCart', false);

	const state = {
		isLoading,
		shop,
		data,
		selected,
		message,
		cart,
		total,
		resetCart,
	};

	const actions = {
		setIsLoading,
		setShop,
		setSearchData,
		setSelectedPokemon,
		setMessage,
		setAddToCart,
		setTotal,
		setResetCart,
	};

	const getResults = useCallback(async (searchStr) => {
		setIsLoading(true);

		try {
			const response = await getPokemonByType(searchStr);

			setSearchData(response.data.pokemon);
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
		if (data && data.length > 0) {
			// brings data from context

			setMessage(`${shop} Pokemón shop`);
		}
	}, [data, shop]);

	useEffect(() => {
		if (shop) {
			getResults(shop);
		}
	}, [shop]);

	useEffect(() => {
		const total = getTotal();

		setTotal(total);
	}, [cart]);

	useEffect(() => {
		if (resetCart) {
			setAddToCart([]);
			setTotal(0);
			setResetCart(false);
		}
	}, [resetCart]);

	return (
		<ShopContext.Provider value={{ ...state, actions: actions }}>
			{props.children}
		</ShopContext.Provider>
	);
};

export { ShopContext, ShopContextProvider };
