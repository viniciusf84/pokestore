import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// components
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// pages
import CheckoutModal from '../CheckoutModal';
import Home from '../Home';
import Profile from '../Profile';

// utils
import ScrollToTop from '../../utils/ScrollToTop';

// Store
import { ShopContextProvider } from '../../contexts/ShopContext';

// style
import { GlobalStyle } from '../../styles/global.styled';

const App = () => {
	return (
		<ShopContextProvider>
			<Router>
				<ScrollToTop>
					<GlobalStyle />
					<Header pageTitle="POKESTORE" />
					<Route exact path="/" component={Home} />
					<Route path="/profile/:id" component={Profile} />
					<CheckoutModal />
					<Footer
						text={`Pokestore ${new Date().getFullYear()} - Todos os direitos reservados`}
					/>
				</ScrollToTop>
			</Router>
		</ShopContextProvider>
	);
};

export default App;
