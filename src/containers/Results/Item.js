import React, { useState, useEffect, useMemo, useContext } from 'react';

// components
import { SearchContext } from '../../contexts/SearchContext';
import LoadingContent from '../../components/LoadingContent';

// service
import { getPokemonByUrl } from '../../utils/services';

function Item({ name, pokemonUrl }) {
  const [isLoading, setIsLoading] = useState(0);
	const [pokemonData, setPokemonData] = useState({});
	const [message, setMessage] = useState(undefined);

	const searchContext = useContext(SearchContext);
	const { setUpdateList } = searchContext.actions;

  useEffect(() => {
		async function getPokemonDataByUrl(url) {
			setIsLoading(true);

      try {
				const response = await getPokemonByUrl(url);

        setPokemonData(response.data);
        setMessage(undefined);
				
			} catch (error) {
				setMessage(error);
			}

			setIsLoading(false);
		}

		getPokemonDataByUrl(pokemonUrl);
	}, [pokemonUrl]);

  const image = useMemo(() => (
    pokemonData && 
    pokemonData.sprites && 
    (pokemonData.sprites.other['official-artwork'].front_default ||
    pokemonData.sprites.front_default)
  ), [pokemonData]);

	return (
    <div className="item" onClick={() => setUpdateList(false)}>

      <div className="wrap  img__wrapper">
        {isLoading && (
          <LoadingContent 
            isLoading={isLoading} 
            loadingText="Loading results" 
          />
        )}

        {image && (
          <img src={image} alt={name} />
        )}
      </div>

      <div className="text">
        <span className="title">
          {name}
        </span>

        {/* Base experience replaces price   */}
        <span className="price">
          ${pokemonData.base_experience}
        </span>

      </div>

    </div>
	);
}

export default Item;
