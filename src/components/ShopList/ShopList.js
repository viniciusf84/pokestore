import React, { useEffect, useMemo, useCallback, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFireAlt,
	faCube,
	faPlug,
	faWater,
} from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

// styles
import { ShopListStyled } from './ShopList.styled';

// hooks
import { ShopContext } from '../../contexts/ShopContext';

export default function ShopList() {
	const shopContext = useContext(ShopContext);
	const { shop, selected } = shopContext;
	const { setShop, setSelectedPokemon } = shopContext.actions;

	let history = useHistory();

	const list = useMemo(
		() => [
			{ type: 'electric', icon: faPlug },
			{ type: 'ice', icon: faCube },
			{ type: 'water', icon: faWater },
			{ type: 'fire', icon: faFireAlt },
		],
		[],
	);

	const selectShop = useCallback((chosen) => {
		setShop(chosen);
		setSelectedPokemon(null);
	}, []);

	useEffect(() => {
		if (!selected) {
			history.push('/');
		}
	}, [selected]);

	return (
		<ShopListStyled>
			<div className="wrapper">
				<ul className="flex">
					{list.map((shopItem) => (
						<li className="shop-item" key={shopItem.type}>
							<button
								onClick={() => selectShop(shopItem.type)}
								className={shop === shopItem.type ? 'active' : ''}
							>
								<FontAwesomeIcon icon={shopItem.icon} />
								{shopItem.type}
							</button>
						</li>
					))}
				</ul>
			</div>
		</ShopListStyled>
	);
}
