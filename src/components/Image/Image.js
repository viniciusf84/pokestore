import React, { useState } from "react";

// styles
import { ImageStyled, Placeholder } from "./Image.styled";

export default function Image({ src, alt, width = 475, height = 475 }) {
  const [imageReady, setImageReady] = useState(false);

  return (
    <ImageStyled>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setImageReady(true)}
        className={imageReady ? "show" : "hide"}
      />

      {!imageReady && <Placeholder />}
    </ImageStyled>
  );
}
