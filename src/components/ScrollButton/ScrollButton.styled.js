import styled from 'styled-components';
import { rem, rgba, darken, transitions } from 'polished';
import { colors } from '../../styles/variables';

export const ButtonStyled = styled.button`
	font-size: ${rem('24px')};
	color: ${(props) => props.theme.colors.primary};
	border: none;
	border-radius: 50%;
	background-color: ${colors.white};
	box-shadow: ${rgba(colors.black, 0.2)} 0px 2px 6px;

	display: block;
	width: 42px;
	height: 42px;
	cursor: pointer;

	position: fixed;
	left: calc(96% - 43px);
	bottom: 10%;
	z-index: 10;

	${transitions('color 0.2s ease-out')};

	&:hover {
		color: ${(props) => darken(0.2, props.theme.colors.primary)};
	}
`;
