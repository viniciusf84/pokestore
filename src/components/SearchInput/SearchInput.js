import React, { useState, useCallback, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { SearchInputStyled } from './SearchInput.styled';

function SearchInput({ name, placeholder, onSearch }) {
	const inputRef = useRef();
	const [isDisabled, setIsDisabled] = useState(true);
	const [inputValue, setInputValue] = useState(null);

	const handleKeyDown = useCallback(
		(event) => {
			if (event.key === 'Enter' && !isDisabled) {
				onSearch(event.target.value);
			}
		},
		[isDisabled],
	);

	useEffect(() => {
		if (inputValue && inputValue.length > 3) {
			setIsDisabled(false);
		} else {
			setIsDisabled(true);
		}
	}, [inputValue]);

	return (
		<SearchInputStyled>
			<input
				ref={inputRef}
				data-testid="search-input"
				type="text"
				className="form-control"
				name={name}
				placeholder={placeholder}
				autoComplete="off"
				onChange={(e) => setInputValue(e.target.value)}
				onKeyDown={(e) => handleKeyDown(e)}
			/>
			<button
				className="icon__wrapper"
				data-testid="search-button"
				disabled={isDisabled}
				onClick={() => onSearch(inputRef.current.value)}
			>
				<FontAwesomeIcon className="end-xs" icon={faSearch} size="2x" />
			</button>
		</SearchInputStyled>
	);
}

export default SearchInput;
