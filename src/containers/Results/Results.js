import React, { useEffect, useCallback, useContext } from 'react';

// hooks
import { ShopContext } from '../../contexts/ShopContext';

// components
import LoadingContent from '../../components/LoadingContent';
import Item from './Item';

// styles
import { ResultList } from './Results.styled';

function Results() {
	const shopContext = useContext(ShopContext);
	const { isLoading, shopData, message } = shopContext;
	const { setSelectedPokemon } = shopContext.actions;

	useEffect(() => {
		setSelectedPokemon('null');
	}, []);

	const displayPokemonList = useCallback((shop, title) => {
		if (shop && shop.length > 0 && title) {
			return (
				<>
					<h1 className="page-title">{title}</h1>

					{shop.map((character) => (
						<Item
							key={character.pokemon.name}
							name={character.pokemon.name}
							pokemonUrl={character.pokemon.url}
						/>
					))}
				</>
			);
		}

		return;
	}, []);

	return (
		<div className="wrapper container-fluid">
			<LoadingContent isLoading={isLoading} loadingText="Loading results">
				<ResultList id="results">
					{displayPokemonList(shopData, message)}
				</ResultList>
			</LoadingContent>
		</div>
	);
}

export default Results;
