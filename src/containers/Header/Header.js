import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyled } from './Header.styled'

// components 
import Search from '../Search';

const Header = ({ pageTitle }) => {

	return (
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
      </div>
		</HeaderStyled>
	);
};

export default Header;
