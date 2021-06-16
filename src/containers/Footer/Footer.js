import React from 'react';
import { StyledFooter } from './Footer.styled';

function Footer(props) {
	return (
		<StyledFooter id="footer">
			<p>{props.text}</p>
		</StyledFooter>
	);
}

export default Footer;
