import React, { useEffect, useMemo, useCallback, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useHistory } from 'react-router-dom';

// styles
import { ShopListStyled } from './ShopList.styled';

// hooks
import { ShopContext } from '../../contexts/ShopContext';

// themes
import { fire, water, ice, electric } from '../../themes';

export default function ShopList({ setTheme }) {
	const shopContext = useContext(ShopContext);
	const { shop, selected } = shopContext;
	const { setShop, setSelectedPokemon } = shopContext.actions;

	let history = useHistory();

	const list = useMemo(
		() => [electric, fire, water, ice],
		[electric, fire, water, ice],
	);

	const selectShop = useCallback((chosen) => {
		setShop(chosen.name);
		setTheme(chosen);
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
						<li className="shop-item" key={shopItem.name}>
							<button
								onClick={() => selectShop(shopItem)}
								className={shop === shopItem.name ? 'active' : ''}
							>
								<FontAwesomeIcon icon={shopItem.icon} />
								{shopItem.name}
							</button>
						</li>
					))}
				</ul>
			</div>
		</ShopListStyled>
	);
}
