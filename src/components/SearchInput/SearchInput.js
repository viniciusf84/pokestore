import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { SearchInputStyled } from './SearchInput.styled';

function SearchInput(props) {
	const { name, placeholder, onChange } = props;

	return (
		<SearchInputStyled>	
			<input
				type="text"
				className="form-control"
				name={name}
				placeholder={placeholder}
				onChange={onChange}
				autoComplete="off"
			/>
			<span className="icon__wrapper">
				<FontAwesomeIcon className="end-xs" icon={faSearch} size="2x" />
			</span>
		</SearchInputStyled>
	);
}

export default SearchInput;
