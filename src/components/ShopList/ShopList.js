import React, { useEffect, useMemo, useContext } from 'react';
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
	const { search } = shopContext;
	const { setSearchString } = shopContext.actions;

	let history = useHistory();

	const list = useMemo(
		() => [
			{ type: 'ice', icon: faCube },
			{ type: 'water', icon: faWater },
			{ type: 'fire', icon: faFireAlt },
			{ type: 'electric', icon: faPlug },
		],
		[],
	);

	useEffect(() => {
		history.push('/');
	}, [search]);

	return (
		<ShopListStyled>
			<div className="wrapper">
				<ul className="flex">
					{list.map((shop) => (
						<li className="shop-item" key={shop.type}>
							<button
								onClick={() => setSearchString(shop.type)}
								className={search === shop.type ? 'active' : ''}
							>
								<FontAwesomeIcon icon={shop.icon} />
								{shop.type}
							</button>
						</li>
					))}
				</ul>
			</div>
		</ShopListStyled>
	);
}
