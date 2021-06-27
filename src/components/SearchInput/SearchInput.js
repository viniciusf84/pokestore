import React, { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { SearchInputStyled } from './SearchInput.styled';

function SearchInput(props) {
	const { name, placeholder, onChange } = props;

	const handleKeyDown = useCallback((event) => {
		if (event.key === 'Enter') {
			onChange(event);
		}
	}, []);

	return (
		<SearchInputStyled>
			<input
				type="text"
				className="form-control"
				name={name}
				placeholder={placeholder}
				autoComplete="off"
				onKeyDown={(e) => handleKeyDown(e)}
			/>
			<span className="icon__wrapper" onClick={(e) => onChange(e)}>
				<FontAwesomeIcon className="end-xs" icon={faSearch} size="2x" />
			</span>
		</SearchInputStyled>
	);
}

export default SearchInput;
