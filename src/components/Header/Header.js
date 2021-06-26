import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// styles
import { HeaderStyled, SubHeader } from './Header.styled';

// components
import Search from '../Search';
import HeaderCart from '../HeaderCart';
import ShopList from '../ShopList';

// hook
import { ShopContext } from '../../contexts/ShopContext';

const Header = ({ pageTitle }) => {
	const shopContext = useContext(ShopContext);
	const { cart } = shopContext;

	return (
		<>
			<HeaderStyled id="header">
				<div className="wrapper container-fluid">
					<div className="brand start-xs">
						<h1 className="page-title">
							<Link to="/">{pageTitle}</Link>
						</h1>
					</div>

					<div className="search-wrapper">
						<Search />
					</div>

					<HeaderCart items={cart} />
				</div>
			</HeaderStyled>

			<SubHeader>
				<ShopList />
			</SubHeader>
		</>
	);
};

export default Header;
