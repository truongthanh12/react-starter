import React, { useState } from "react";

interface ImageProps {
  src: string;
  alt: string;
  placeholderSrc?: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  placeholderSrc,
  className,
}) => {
  const [isLoading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleImageLoaded = () => setLoading(false);
  const handleImageError = () => setHasError(true);

  return (
    <div className={className}>
      {isLoading && placeholderSrc && (
        <img src={placeholderSrc} alt="Loading..." />
      )}
      {!hasError && (
        <img
          src={src}
          alt={alt}
          onLoad={handleImageLoaded}
          onError={handleImageError}
          style={{ display: isLoading ? "none" : "block" }}
        />
      )}
      {hasError && <div>Error loading image</div>}
    </div>
  );
};

export default Image;
