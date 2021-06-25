import React, { useState, useEffect, useMemo, useContext } from 'react';

// components
import { ShopContext } from '../../contexts/ShopContext';
import LoadingContent from '../../components/LoadingContent';

// service
import { getPokemonByUrl } from '../../services';

function Item({ name, pokemonUrl }) {
	const [isLoadingContent, setIsLoadingContent] = useState(0);
	const [displayImage, setDisplayImage] = useState(false);
	const [pokemonData, setPokemonData] = useState({});
	const [message, setMessage] = useState(undefined);

	const shopContext = useContext(ShopContext);

	useEffect(() => {
		async function getPokemonDataByUrl(url) {
			setIsLoadingContent(true);

			try {
				const response = await getPokemonByUrl(url);

				setPokemonData(response.data);
				setMessage(undefined);
			} catch (error) {
				setMessage(error);
			}

			setIsLoadingContent(false);
		}

		getPokemonDataByUrl(pokemonUrl);
	}, [pokemonUrl]);

	const image = useMemo(() => {
		const imageUrl =
			pokemonData &&
			pokemonData.sprites &&
			(pokemonData.sprites.other['official-artwork'].front_default ||
				pokemonData.sprites.front_default);

		return imageUrl;
	}, [pokemonData]);

	return (
		<div className="item" onClick={() => {}}>
			<LoadingContent
				isLoading={isLoadingContent}
				loadingText={`Loading ${name.toUpperCase()}`}
			>
				<div className="wrap  img__wrapper">
					<img
						src={image}
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
