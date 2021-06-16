import styled from 'styled-components';
import { rem, transitions } from 'polished';
import { colors, fadeIn, devices } from '../../styles/variables';

export const Details = styled.article`
	opacity: 1;
	animation: ${fadeIn()} 1s;
	margin-bottom: 60px;

	h1 {
		font-size: ${rem('40px')};
		margin: 0 0 30px;
	}

	figure.poster {
		margin: 0;
		min-height: 300px;
		background-color: ${colors.background_gray};

		img {
			width: 100%;
		}
	}

	a.back {
		display: inline-block;
		background-color: ${colors.yellow};
		color: ${colors.black};
		padding: 10px 16px;
		margin: 30px 0 40px;
		${transitions('background-color 0.2s ease-out')};

		&:hover {
			background-color: ${colors.black};
			color: ${colors.yellow};
		}
	}

	.text {
		margin: 0 30px 0 20px;

		p {
			margin-bottom: ${rem('14px')};
		}

		@media ${devices.tablet} {
			margin: 0;
		}
	}

	.small {
		display: block;
		margin: 10px 0;
		font-size: ${rem('13px')};
	}

	strong {
		color: ${colors.text_3};
		font-weight: normal;
	}

	.plot {
		margin-top: 2rem;
		color: ${colors.text_3};
	}

	a {
		color: ${colors.yellow};
	}
`;
