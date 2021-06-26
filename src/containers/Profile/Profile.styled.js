import styled from 'styled-components';
import { rem, transitions, darken } from 'polished';
import { colors, fadeIn, devices } from '../../styles/variables';

export const Details = styled.article`
	opacity: 1;
	animation: ${fadeIn()} 1s;
	margin-bottom: 60px;

	h1 {
		font-size: ${rem('40px')};
		margin: 0 0 2rem;
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
		background-color: none;
		color: ${colors.primary};
		font-weight: bold;
		padding: 10px 0;
		margin: 30px 0 40px;
		${transitions('background-color 0.2s ease-out')};

		&:hover {
			color: ${colors.text_1};
		}

		svg {
			margin-right: 8px;
		}
	}

	.row {
		display: flex;
		gap: 2rem;
		justify-content: space-between;
		align-items: flex-start;
		margin-top: 2rem;

		.col {
			width: 50%;

			&__info {
				width: 70%;
			}

			&__add {
				width: 30%;
				background-color: ${colors.white};
				padding: 16px 24px;

				span {
					font-size: ${rem('12px')};
				}
			}

			.image-wrapper {
				background-color: ${colors.white};

				figure {
					margin: 0 0 16px;
				}
			}
		}

		.list {
			padding: 0;
			margin: 0 0 16px;

			li {
				list-style: none;
				display: inline;

				&:after {
					content: ', ';
				}

				&:last-of-type {
					&:after {
						content: '';
					}
				}
			}
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

		span {
			font-weight: bold;
		}

		.price {
			font-size: ${rem('42px')};
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

export const AddToCartButton = styled.button`
	border: none;
	background-color: ${colors.green};
	color: ${colors.white};
	padding: 1.125rem 0;
	width: 100%;
	font-size: ${rem('20px')};
	margin-top: 16px;
	cursor: pointer;
	${transitions('background-color 0.2s ease-out')};

	svg {
		margin-right: 8px;
	}

	&:hover {
		background-color: ${darken(0.2, colors.green)};
	}
`;
