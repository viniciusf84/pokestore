import styled from 'styled-components';
import { rem } from 'polished';
import { centerContent, colors } from '../../styles/variables';

export const ModalStyled = styled.div`
	${centerContent()};

	position: fixed;
	top: 0;
	left: 0;
	padding: 0;
	margin: 0;
	width: 100vw;
	height: 100vh;

	.content {
		background-color: ${colors.white};
		width: 600px;
		height: 400px;
	}

	.modal-header {
		display: flex;
		justify-content: flex-end;
		font-size: ${rem('20px')};
	}
`;
