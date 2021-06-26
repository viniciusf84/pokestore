import React, { useState } from 'react';

// styles
import { ImageStyled, Placeholder } from './Image.styled';

export default function Image({ src, alt }) {
	const [imageReady, setImageReady] = useState(false);

	return (
		<ImageStyled>
			<img
				src={src}
				alt={alt}
				onLoad={() => setImageReady(true)}
				className={imageReady ? 'show' : 'hide'}
			/>

			{!imageReady && <Placeholder />}
		</ImageStyled>
	);
}
