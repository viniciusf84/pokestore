import React, { useEffect, useMemo, useContext } from 'react';

// hooks
import { ShopContext } from '../../contexts/ShopContext';

// components
import LoadingContent from '../../components/LoadingContent';
import Item from './Item';

// styles
import { ResultList } from './Results.styled';

function Results() {
	const shopContext = useContext(ShopContext);
	const { isLoading, data, message } = shopContext;
	const { setSelectedPokemon } = shopContext.actions;

	useEffect(() => {
		setSelectedPokemon('null');
	}, []);

	const displayPokemonList = useMemo(() => {
		return (
			data &&
			data.length > 0 && (
				<>
					<h1 className="page-title">{message}</h1>

					{data.map((character) => (
						<Item
							key={character.pokemon.name}
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
