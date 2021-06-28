import React, { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

// styles
import { ButtonStyled } from './ScrollButton.styled';

export default function ScrollButton() {
	const smoothScroll = useCallback(() => {
		const element = document.getElementById('header');
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
			});
		}
	}, []);

	return (
		<ButtonStyled onClick={() => smoothScroll()}>
			<FontAwesomeIcon icon={faArrowUp} size={24} />
		</ButtonStyled>
	);
}
