import React, { useEffect, useMemo, useCallback, useContext } from 'react';

// hooks
import { ShopContext } from '../../contexts/ShopContext';

// service
import { getPokemonByType } from '../../services';

// components
import LoadingContent from '../../components/LoadingContent';
import Item from './Item';

// styles
import { ResultList } from './Results.styled';

function Results() {
	const shopContext = useContext(ShopContext);
	const { isLoading, data, search, message } = shopContext;
	const { setIsLoading, setSearchData, setMessage } = shopContext.actions;

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
		if (search === '') {
			setMessage('');
		}

		if (search.length > 0) {
			getResults(search);
		}
	}, [search]);

	const displayPokemonList = useMemo(() => {
		return (
			data &&
			data.length > 0 && (
				<>
					<h4 className="page-title">{message}</h4>

					{data.map((character) => (
						<Item
							name={character.pokemon.name}
							pokemonUrl={character.pokemon.url}
						/>
					))}
				</>
			)
		);
	}, [data, message]);

	return (
		<div className="wrapper container-fluid">
			<LoadingContent isLoading={isLoading} loadingText="Loading results">
				<ResultList id="results">{displayPokemonList}</ResultList>
			</LoadingContent>
		</div>
	);
}

export default Results;
