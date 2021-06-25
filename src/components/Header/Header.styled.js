import styled from 'styled-components';
import { rem } from 'polished';
import { colors } from '../../styles/variables';

export const HeaderStyled = styled.header`
	padding: 1rem 0rem;
	background-color: ${colors.primary};
	margin-bottom: 10px;

  .wrapper {
    display: flex;
  }

	a {
    color: ${colors.yellow};
	}

	.brand {
		border-radius: 4px;
		padding: 0 10px 0 0;
		height: 30px;
		line-height: 30px;
		width: 33%;
	}

  .search-wrapper {
    width: 67%;
  }

	h1 {
		font-size: ${rem('22px')};
    text-shadow: ${colors.blue} 2px 3px 0px;
	}

`;