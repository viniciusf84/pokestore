import styled from 'styled-components';
import { rem, rgba } from 'polished';
import { centerContent, colors, fadeIn } from '../../styles/variables';

export const ModalStyled = styled.div`
	${centerContent()};
	${fadeIn()}

	position: fixed;
	top: 0;
	left: 0;
	padding: 0;
	z-index: 200;

	margin: 0;
	width: 100vw;
	height: 100vh;

	animation: fadeIn 0.3s;
	background-color: ${rgba(colors.background_gray, 0.7)};

	.content {
		background-color: ${colors.white};
		width: 600px;
		height: 65vh;
		max-height: 420px;
		border-radius: 4px;
		box-shadow: ${rgba(colors.black, 0.2)} 0px 2px 6px;
		margin: 24px;
	}

	.modal-header {
		position: relative;
		display: flex;
		justify-content: flex-end;
		color: ${colors.red};
		font-size: ${rem('40px')};

		svg {
			position: absolute;
			top: -3px;
			cursor: pointer;
		}
	}
`;
