import styled from 'styled-components';
import { rem, transitions } from 'polished';
import { colors } from '../../styles/variables';

export const SearchInputStyled = styled.div`
	font-size: ${rem('12px')};
	color: ${colors.text_3};

	input {
		background: ${colors.white};
		border: none;
		padding: 0.4rem;
		width: 100%;
		font-size: ${rem('14px')};
		font-weight: normal;
		border-radius: 8px;

		&:focus,
		&:active {
			border-color: ${colors.white};
		}
	}

	.icon__wrapper {
		position: relative;
		color: ${colors.text_3};
		float: right;
		margin: -27px 16px 0 0;
		color: ${colors.text_3};
		${transitions('color 0.2s ease-out')};

		&:hover {
			color: ${colors.text_1};
		}

		svg {
			width: 0.9rem;
			cursor: pointer;
		}
	}
`;
