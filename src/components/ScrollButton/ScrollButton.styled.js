import styled from 'styled-components';
import { rem, rgba } from 'polished';
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

	position: fixed;
	left: calc(96% - 43px);
	bottom: 10%;
	z-index: 10;
`;
