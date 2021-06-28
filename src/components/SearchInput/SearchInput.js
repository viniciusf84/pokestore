import React, { useCallback, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { SearchInputStyled } from './SearchInput.styled';

function SearchInput({ name, placeholder, onSearch }) {
	const inputRef = useRef();

	const handleKeyDown = useCallback((event) => {
		if (event.key === 'Enter') {
			console.log(event);
			onSearch(event.target.value);
		}
	}, []);

	return (
		<SearchInputStyled>
			<input
				ref={inputRef}
				type="text"
				className="form-control"
				name={name}
				placeholder={placeholder}
				autoComplete="off"
				onKeyDown={(e) => handleKeyDown(e)}
			/>
			<span
				className="icon__wrapper"
				onClick={() => onSearch(inputRef.current.value)}
			>
				<FontAwesomeIcon className="end-xs" icon={faSearch} size="2x" />
			</span>
		</SearchInputStyled>
	);
}

export default SearchInput;
