import React from 'react';
import { Link } from 'react-router-dom';

// styles
import { HeaderStyled, SubHeader } from './Header.styled';

// components
import Search from '../Search';
import HeaderCart from '../HeaderCart';
import ShopList from '../ShopList';

const Header = ({ pageTitle }) => {
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

					<HeaderCart />
				</div>
			</HeaderStyled>

			<SubHeader>
				<ShopList />
			</SubHeader>
		</>
	);
};

export default Header;
