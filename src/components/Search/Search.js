import React, { useContext, useCallback } from 'react';
import { debounce } from 'lodash';
import { ShopContext } from '../../contexts/ShopContext';

// components
import SearchInput from '../../components/SearchInput';

export default function Search() {
	const shopContext = useContext(ShopContext);
	const { setSearchString, setMessage } = shopContext.actions;

	const onHandleChange = useCallback(
		debounce((value) => {
			setSearchString(value);
			setMessage('');
		}, 600),
		[],
	);

	return (
		<SearchInput
			name="search-input"
			placeholder="Search for your favorite pokemon"
			onChange={(e) => onHandleChange(e.target.value)}
		/>
	);
}
