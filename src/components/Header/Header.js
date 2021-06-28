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

const Header = ({ pageTitle, setTheme, theme }) => {
	const shopContext = useContext(ShopContext);
	const { cart, total } = shopContext;

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

					<HeaderCart items={cart} total={total} />
				</div>
			</HeaderStyled>

			<SubHeader>
				<ShopList setTheme={setTheme} theme={theme} />
			</SubHeader>
		</>
	);
};

export default Header;
