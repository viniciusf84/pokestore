import styled from 'styled-components';
import { colors, centerContent } from '../../styles/variables';
import { rem, darken, transitions } from 'polished';

export const ShopListStyled = styled.section`
	.flex {
		margin: 0;
		padding: 1rem 0;
		list-style: none;
		display: flex;
		justify-content: space-between;
		gap: 1rem;

		li {
			width: 100%;
		}
	}

	button {
		${centerContent()};

		color: ${colors.primary};
		border: 1px solid ${colors.primary};
		background-color: none;
		width: 100%;
		padding: 1rem;
		font-size: ${rem('16px')};
		cursor: pointer;
		${transitions('color 0.3s ease-in')};

		svg {
			font-size: ${rem('20px')};
			margin-right: 10px;
		}

		&:hover {
			color: ${darken(0.4, colors.primary)};
		}
	}
`;
