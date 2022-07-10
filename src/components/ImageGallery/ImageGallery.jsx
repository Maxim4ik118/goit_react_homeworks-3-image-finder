import React from 'react';

import PropTypes from 'prop-types';

import Loader from 'components/Loader/Loader';

import { StyledGallery, StyledGalletyItem } from './Styled';

function ImageGallery({ images = [], isFetching, error, openFullScreenMode }) {
  const showLoader = isFetching && images?.length !== 0;
  return (
    <>
      <StyledGallery>
        {images?.length > 0 &&
          images.map(image => {
            return (
              <ImageGalleryItem
                openFullScreenMode={openFullScreenMode}
                key={image.id}
                {...image}
              />
            );
          })}
      </StyledGallery>
      {!!error && <p>{error.message}</p>}
      {showLoader && <Loader />}
    </>
  );
}

function ImageGalleryItem({
  webformatURL,
  tags = '',
  largeImageURL,
  openFullScreenMode,
}) {
  return (
    <StyledGalletyItem onClick={() => openFullScreenMode(largeImageURL, tags)}>
      <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
    </StyledGalletyItem>
  );
}

ImageGalleryItem.propTypes = {
  openFullScreenMode: PropTypes.func.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      largeImageURL: PropTypes.string,
      webformatURL: PropTypes.string,
    })
  ),
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string,
  openFullScreenMode: PropTypes.func.isRequired,
};

export default ImageGallery;
