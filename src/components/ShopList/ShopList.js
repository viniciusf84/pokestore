import React, { useMemo, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFireAlt,
	faCube,
	faPlug,
	faWater,
} from '@fortawesome/free-solid-svg-icons';

// styles
import { ShopListStyled } from './ShopList.styled';

// hooks
import { ShopContext } from '../../contexts/ShopContext';

export default function ShopList() {
	const shopContext = useContext(ShopContext);
	const { setSearchString } = shopContext.actions;

	const list = useMemo(
		() => [
			{ type: 'ice', icon: faCube },
			{ type: 'water', icon: faWater },
			{ type: 'fire', icon: faFireAlt },
			{ type: 'electric', icon: faPlug },
		],
		[],
	);

	return (
		<ShopListStyled>
			<div className="wrapper">
				<ul className="flex">
					{list.map((shop) => (
						<li className="shop-item" key={shop.type}>
							<button onClick={() => setSearchString(shop.type)}>
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
