import React from 'react';

import { Searchbar, ImageGallery, Modal, Button } from './components';
import { fetchImages } from 'services/api';

class App extends React.Component {
  state = {
    images: [],
    currentPage: 1,
    searchTerm: '',
    error: '',
    isFetching: false,
    modal: { isOpen: false, src: '', alt: '' },
  };

  componentDidMount() {
    this.requestImages(this.state.searchTerm, this.state.currentPage);
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.currentPage !== this.state.currentPage ||
      prevState.searchTerm !== this.state.searchTerm
    ) {
      this.requestImages(this.state.searchTerm, this.state.currentPage);
    }
  }

  requestImages = async (searchTerm, currentPage) => {
    try {
      this.setState(() => ({ isFetching: true }));

      const { hits } = await fetchImages(searchTerm, currentPage);

      if (currentPage === 1) {
        this.setState(() => ({ images: hits }));
      } else {
        this.setState(s => ({
          images: [...s.images, ...hits],
        }));
      }
    } catch (err) {
      this.setState(() => ({ error: err.message }));
    } finally {
      this.setState(() => ({ isFetching: false }));
    }
  };

  handleSubmitSearchTerm = searchTerm => {
    this.setState(() => ({ currentPage: 1 }));
    this.setState(() => ({ searchTerm }));
  };

  handleLoadMore = () => {
    this.setState(s => ({ currentPage: s.currentPage + 1 }));
  };

  handleOpenModal = (src, alt) => {
    this.setState(s => ({ modal: { isOpen: true, src, alt } }));
  };

  handleCloseModal = () => {
    this.setState(s => ({ modal: { isOpen: false, src: '', alt: '' } }));
  };

  handleKeyPress = e => {
    if (e.key === 'Escape') {
      this.handleCloseModal();
    }
  };

  render() {
    const {
      images,
      error,
      isFetching,
      modal: { isOpen, src, alt },
    } = this.state;

    return (
      <div className="app">
        <Searchbar onSubmit={this.handleSubmitSearchTerm} />
        <ImageGallery
          error={error}
          isFetching={isFetching}
          images={images}
          openFullScreenMode={this.handleOpenModal}
        />
        <Button onClick={this.handleLoadMore} />
        {isOpen && <Modal closeModal={this.handleCloseModal} src={src} alt={alt} />}
      </div>
    );
  }
}

export default App;
