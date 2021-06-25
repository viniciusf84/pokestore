import React, { useContext, useCallback } from 'react';
import { debounce } from 'lodash';
import { SearchContext } from '../../contexts/SearchContext';

// components
import SearchInput from '../../components/SearchInput';

export default function Search() {
	const searchContext = useContext(SearchContext);
	const {
		setSearchString,
    setMessage,
	} = searchContext.actions;

	const onHandleChange = useCallback(
		debounce((value) => {
			if (value.length > 3) {
				setSearchString(value);
				setMessage('');
			}
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
