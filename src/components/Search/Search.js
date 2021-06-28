import React, {
	useContext,
	useCallback,
	useState,
	useEffect,
	useMemo,
} from 'react';
import { useHistory } from 'react-router';

// hooks
import { ShopContext } from '../../contexts/ShopContext';

// components
import SearchInput from '../../components/SearchInput';
import LoadingContent from '../../components/LoadingContent';
import Image from '../../components/Image';

// utils
import GetImageUrl from '../../utils/GetImageUrl';

// service
import { getPokemonByName } from '../../services';

// styles
import { SearchResults, SearchItem } from './Search.styled';

export default function Search() {
	const [isLoading, setIsLoading] = useState(false);
	const [search, setSearch] = useState(null);
	const [result, setResult] = useState(null);
	const [display, setDisplay] = useState(false);

	const shopContext = useContext(ShopContext);
	const { setSelectedPokemon } = shopContext.actions;

	const history = useHistory();

	const getSearchResults = useCallback(async (str) => {
		setIsLoading(true);
		try {
			const response = await getPokemonByName(str);

			setResult(response.data);
		} catch (error) {
			setResult(undefined);
			console.error(error);
		}
		setIsLoading(false);
	}, []);

	const onSetNewSearch = useCallback((value) => {
		setSearch(value);
		getSearchResults(value.toLowerCase());
	}, []);

	const getImage = useMemo(() => {
		return GetImageUrl(result);
	}, [result]);

	const selectItem = useCallback((data) => {
		setSelectedPokemon(data);
		history.push(`/profile/${data.name}`);
	}, []);

	useEffect(() => {
		if (search) {
			setDisplay(true);
		}
	}, [search]);

	return (
		<>
			<SearchInput
				name="search-input"
				placeholder="Search for your favorite pokemon"
				onSearch={(e) => onSetNewSearch(e)}
			/>

			{display && (
				<SearchResults
					style={{ justifyContent: isLoading ? 'center' : 'flex-start' }}
					onClick={() => {
						setDisplay(false);
						setSearch('');
					}}
				>
					<LoadingContent
						isLoading={isLoading}
						loadingText={`Searching for ${search}`}
					>
						{result && (
							<SearchItem
								onClick={() => selectItem({ ...result, image: getImage })}
							>
								<Image src={getImage} alt={result.name} />

								<p>{result.name}</p>
							</SearchItem>
						)}
						{result === undefined && <p>{search} not found.</p>}
					</LoadingContent>
				</SearchResults>
			)}
		</>
	);
}
