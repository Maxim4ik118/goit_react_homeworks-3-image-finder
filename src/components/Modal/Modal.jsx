import { PropTypes } from 'prop-types';

import { StyledModal } from './Styled';

function Modal({ src, alt, closeModal }) {
  return (
    <StyledModal onClick={() => closeModal()}>
      <div className="modal">
        <img src={src} alt={alt} />
      </div>
    </StyledModal>
  );
}

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
