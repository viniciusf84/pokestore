import React, { useContext, useCallback } from 'react';
import { ShopContext } from '../../contexts/ShopContext';

// components
import SearchInput from '../../components/SearchInput';

export default function Search() {
	const shopContext = useContext(ShopContext);
	const { setShop, setMessage } = shopContext.actions;

	const onHandleChange = useCallback((value) => {
		setShop(value);
		setMessage('');
	}, []);

	return (
		<SearchInput
			name="search-input"
			placeholder="Search for your favorite pokemon"
			onChange={(e) => onHandleChange(e.target.value)}
		/>
	);
}
