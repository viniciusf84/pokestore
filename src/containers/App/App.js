import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Containers
import Header from '../Header';
import Footer from '../Footer';

// Pages
import Home from '../Home';
import Profile from '../Profile';

// utils
import ScrollToTop from '../../utils/ScrollToTop';

// Store
import { SearchContextProvider } from '../../contexts/SearchContext';

// style
import { GlobalStyle } from '../../styles/global.styled';

const App = () => {
	return (
		<SearchContextProvider>
			<Router>
				<ScrollToTop>
          <GlobalStyle />
					<Header pageTitle="POKESTORE" />
					<Route exact path="/" component={Home} />
					<Route path="/profile/:id" component={Profile} />
					<Footer
						text={`Pokestore ${new Date().getFullYear()} - Todos os direitos reservados`}
					/>
				</ScrollToTop>
			</Router>
		</SearchContextProvider>
	);
};

export default App;
