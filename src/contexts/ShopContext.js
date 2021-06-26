import React, { createContext, useState, useEffect, useCallback } from 'react';

// service
import { getPokemonByType } from '../services';

// hook
const ShopContext = createContext();

const ShopContextProvider = (props) => {
	const [isLoading, setIsLoading] = useState(false);
	const [search, setSearchString] = useState('');
	const [data, setSearchData] = useState([]);
	const [selected, setSelectedPokemon] = useState(null);
	const [message, setMessage] = useState('');
	const [cart, setAddToCart] = useState([]);

	const state = {
		isLoading,
		search,
		data,
		selected,
		message,
		cart,
	};

	const actions = {
		setIsLoading,
		setSearchString,
		setSearchData,
		setSelectedPokemon,
		setMessage,
		setAddToCart,
	};

	const getResults = useCallback(async (searchStr) => {
		setIsLoading(true);

		try {
			const response = await getPokemonByType(searchStr);

			setSearchData(response.data.pokemon);
			setMessage(`${searchStr} Pokemón shop`);
		} catch (error) {
			setMessage(error);
		}

		setIsLoading(false);
	}, []);

	useEffect(() => {
		if (data && data.length > 0) {
			// brings data from context

			setMessage(`${search} Pokemón shop`);
		}
	}, [data, search]);

	useEffect(() => {
		if (search) {
			getResults(search);
		}
	}, [search]);

	return (
		<ShopContext.Provider value={{ ...state, actions: actions }}>
			{props.children}
		</ShopContext.Provider>
	);
};

export { ShopContext, ShopContextProvider };
