import styled from 'styled-components';
import { rem } from 'polished';
import { colors } from '../../styles/variables';

export const SearchInputStyled = styled.div`
	font-size: ${rem('12px')};
	color: ${colors.text_3};

	input {
		background: ${colors.white};
		border: none;
		padding: 0.6rem;
		width: 100%;
		font-size: ${rem('14px')};
    font-weight: normal;
    border-radius: 8px;

		&:focus,
		&:active {
			border-color:  ${colors.white};
		}
	}

	.icon__wrapper {
		position: relative;
		color: ${colors.text_3};
		float: right;
		margin: -30px 16px 0 0;
		pointer-events: none;
    color: ${colors.blue};

		svg {
			width: 0.9rem;
      cursor: pointer;
		}
	}
`;