import React, {
	useState,
	useEffect,
	useMemo,
	useContext,
	useCallback,
} from 'react';
import { useHistory } from 'react-router';

// hook
import { ShopContext } from '../../contexts/ShopContext';

// components
import LoadingContent from '../../components/LoadingContent';
import Image from '../../components/Image';

// service
import { getPokemonByUrl } from '../../services';

function Item({ name, pokemonUrl }) {
	const [isLoadingContent, setIsLoadingContent] = useState(true);
	const [displayImage, setDisplayImage] = useState(false);
	const [pokemonData, setPokemonData] = useState({});

	let history = useHistory();

	const shopContext = useContext(ShopContext);
	const { selected } = shopContext;
	const { setSelectedPokemon, setMessage } = shopContext.actions;

	useEffect(() => {
		async function getPokemonDataByUrl(url) {
			setIsLoadingContent(true);

			try {
				const response = await getPokemonByUrl(url);

				setPokemonData(response.data);
			} catch (error) {
				setMessage(error);
			}

			setIsLoadingContent(false);
		}

		getPokemonDataByUrl(pokemonUrl);
	}, [pokemonUrl]);

	const getImage = useMemo(() => {
		const imageUrl =
			pokemonData &&
			pokemonData.sprites &&
			(pokemonData.sprites.other['official-artwork'].front_default ||
				pokemonData.sprites.front_default);

		return imageUrl;
	}, [pokemonData]);

	const selectItem = useCallback((data) => {
		setSelectedPokemon(data);
		history.push(`/profile/${data.name}`);
	}, []);

	return (
		<div
			className="item"
			onClick={() => selectItem({ ...pokemonData, image: getImage })}
		>
			<LoadingContent
				isLoading={isLoadingContent}
				loadingText={`Loading ${name.toUpperCase()}`}
			>
				<div className="wrap  img__wrapper">
					<Image
						src={getImage}
						alt={name}
						onLoad={() => setDisplayImage(true)}
						className={displayImage ? 'show' : 'hide'}
					/>
				</div>

				<div className="text">
					<span className="title">{name}</span>

					{/* Base experience replaces price   */}
					<span className="price">${pokemonData.base_experience}</span>
				</div>
			</LoadingContent>
		</div>
	);
}

export default Item;
