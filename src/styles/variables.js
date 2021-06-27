/**
 * Theme colors
 */

export const colors = {
	water: '#282dd7',
	fire: '#ef5350',
	ice: '#c4e2f3',
	electric: '#ec9a29',
	white: '#fff',
	red: '#ef5350',
	black: '#000',
	yellow: '#feca1b',
	blue: '#3761a8',
	green: '#40cd28',
	background_clear: '#f2f6f8',
	background_dark: '#222222',
	background_gray: '#5d5e5f',
	text_1: '#000000',
	text_2: '#ffffff',
	text_3: '#999999',
};

/**
 * Center content using flexbox
 */

export const centerContent = () =>
	`
  display: flex;
	justify-content: center;
	text-align: center;
	align-items: center;
  `;

/**
 * Simple fade-in animation
 */

export const fadeIn = () => `
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

/**
 * Loading image placeholder
 */

export const placeHolderShimmer = () => `
  @keyframes placeHolderShimmer{
    0%{
      background-position: -468px 0
    }
    100%{
      background-position: 468px 0
    }
  }
`;

/**
 * A map of breakpoints
 */

export const sizes = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '768px',
	laptop: '1024px',
	laptopL: '1440px',
	desktop: '2560px',
};

export const devices = {
	mobileS: `(min-width: ${sizes.mobileS})`,
	mobileM: `(min-width: ${sizes.mobileM})`,
	mobileL: `(min-width: ${sizes.mobileL})`,
	tablet: `(min-width: ${sizes.tablet})`,
	laptop: `(min-width: ${sizes.laptop})`,
	laptopL: `(min-width: ${sizes.laptopL})`,
	desktop: `(min-width: ${sizes.desktop})`,
	desktopL: `(min-width: ${sizes.desktop})`,
};
