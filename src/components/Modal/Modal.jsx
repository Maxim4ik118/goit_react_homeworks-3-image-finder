import { Component } from 'react';
import { PropTypes } from 'prop-types';

import { StyledModal } from './Styled';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.key === 'Escape') {
      this.props.closeModal();
    }
  };

  static propTypes = {
    closeModal: PropTypes.func.isRequired,
  };

  render() {
    const { children, closeModal } = this.props;
    return (
      <StyledModal
        onClick={closeModal()}
      >
        <div className="modal">
          {children}
        </div>
      </StyledModal>
    );
  }
}

export default Modal;
