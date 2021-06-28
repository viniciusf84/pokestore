import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// components
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// pages
import CheckoutModal from '../CheckoutModal';
import Home from '../Home';
import Profile from '../Profile';

// utils
import ScrollToTop from '../../utils/ScrollToTop';
import useLocalState from '../../utils/UseLocalState';

// context
import { ShopContextProvider } from '../../contexts/ShopContext';

// themes
import { electric } from '../../themes';

// style
import { GlobalStyle } from '../../styles/global.styled';

const App = () => {
	const [theme, setTheme] = useLocalState('theme', electric);

	return (
		<ThemeProvider theme={theme}>
			<ShopContextProvider setTheme={setTheme} theme={theme}>
				<Router>
					<ScrollToTop>
						<GlobalStyle />
						<Header pageTitle="POKESTORE" setTheme={setTheme} theme={theme} />
						<Route exact path="/" component={Home} />
						<Route path="/profile/:id" component={Profile} />
						<CheckoutModal />
						<Footer
							text={`Pokestore ${new Date().getFullYear()} - Todos os direitos reservados`}
						/>
					</ScrollToTop>
				</Router>
			</ShopContextProvider>
		</ThemeProvider>
	);
};

export default App;
