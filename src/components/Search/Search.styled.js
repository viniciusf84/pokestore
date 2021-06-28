import styled from 'styled-components';
import { rem } from 'polished';
import { colors, fadeIn } from '../../styles/variables';

export const SearchResults = styled.section`
	${fadeIn()};

	position: absolute;

	width: 100%;
	display: flex;
	margin-top: -7px;
	padding: 8px 16px;

	background-color: ${colors.white};

	animation: fadeIn 0.3s;
`;

export const SearchItem = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;

	p {
		font-size: ${rem('14px')};
		text-transform: capitalize;
	}

	figure {
		max-width: 80px;
	}
`;
