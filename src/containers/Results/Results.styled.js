import styled from 'styled-components';
import { rem, transitions, rgba } from 'polished';
import { colors, centerContent, fadeIn, devices } from '../../styles/variables';

export const ResultList = styled.section` 
  ${fadeIn()}

	margin: 0 0 60px;
  display: flex;
  flex-wrap: wrap;
  gap: 3%;

	h4 {
		display: block;
		width: 100%;
		margin-bottom: 20px;
	}

	.item {
    background-color: ${colors.white};
		opacity: 1;
		animation: fadeIn 0.3s;
    width: 100%;
    margin-bottom: 14px;
    box-shadow: ${rgba(colors.black, .2)} 0px 2px 6px;
    border-bottom: 2px solid ${colors.primary};

    @media ${devices.tablet} {
      width: 48%;
      margin-bottom: 2%;
    }

    @media ${devices.laptop} {
      width: 31.3333333333%;
    }

		a {
			color: ${colors.white};
		}		

		.wrap {
			text-align: center;
			position: relative;
			height: 250px;
			cursor: pointer;
			${transitions('background-color 0.2s ease-out')};
		}
		
		.img__wrapper {			
      ${centerContent()};      

			img {
        width: auto;
        max-width: 250px;
				object-fit: cover;
        animation: fadeIn 0.3s;
        ${transitions('transform 0.5s ease-out')};

        @media ${devices.tablet} {
          max-width: 60%;
        }
			}
		}

		.text {
			cursor: pointer;
      display: flex;
      justify-content: space-between;

      span {
        display: block;
        font-size: ${rem('16px')};
        padding: 10px 12px;
        margin: 0;
        text-transform: capitalize;
        font-weight: bold;

        &:hover & {
          color: ${colors.primary}
        }
      }
		}

    &:hover {
			a {
				color: ${colors.yellow};
			}

      .title {
        color: ${colors.primary};        
      }

      .img__wrapper {
        img {
          transform: scale(1.14) translateY(7px);
        }
      }
		}
	}
}

.load-more {
	font-size: ${rem('18px')};
	width: 30%;
	display: block;
	margin: 30px auto 100px;
	border: none;
	color: ${colors.text_2};
	background-color: ${colors.white};
	line-height: 3rem;
	cursor: pointer;
	font-weight: bold;

	&:hover {
		background-color: ${colors.yellow};
	}

	@media ${devices.tablet} {
		width: 100%;
	}
`;
