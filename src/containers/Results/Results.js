import React, { 
  useState, 
  useEffect, 
  useMemo, 
  useCallback, 
  useContext 
} from 'react';

// hooks
import { SearchContext } from '../../contexts/SearchContext';

// service
import { getPokemonByType } from '../../utils/services';

// components
import LoadingContent from '../../components/LoadingContent';
import Item from './Item';

// styles
import { ResultList } from './Results.styled'

function Results() {
  const [results, setResults] = useState([]);

  const searchContext = useContext(SearchContext);
  const { 
    isLoading, 
    data, 
    search, 
    page, 
    message, 
  } = searchContext;
  const {
    setIsLoading,
		setSearchData,
		setSearchString,
    setMessage,
	} = searchContext.actions;

  const getResults = useCallback(async (searchStr) => {
		setIsLoading(true);

		try {
			const response = await getPokemonByType(searchStr);
  
      setResults(response.data.pokemon);
      setMessage(`Results for "${searchStr}"`);
		} catch (error) {
			setMessage(error);
		}

		setIsLoading(false);
	}, []);

	useEffect(() => {
		if (data && data.length > 0) {
			// brings data from context

			setMessage(`Results for "${search}"`);
		} else {
			setSearchString('flying');
		}
	}, [data, search]);

	useEffect(() => {
    if (search === '') {
			setMessage('');
		}

    if(search.length > 0) {
      getResults(search);
    }
	}, [search]);

	useEffect(() => {
		if (results.length > 0) {
			if (page === 1) {
				setSearchData(results);
			} else {
				setSearchData([...data, ...results]);
			}
		}
	}, [results, page]);
	
  const displayPokemonList = useMemo(() => (
    data &&
    data.length > 0 &&
    data.map((character) => (
      <Item
        name={character.pokemon.name}
        pokemonUrl={character.pokemon.url}
      />
    ))
  ), [data])

	return (
		<div className="wrapper container-fluid">
			<h4>{message}</h4>

			<ResultList id="results">
				{displayPokemonList}
			</ResultList>

			{isLoading && (
				<LoadingContent isLoading={isLoading} loadingText="Loading results" />
			)}
		</div>
	);
}

export default Results;
