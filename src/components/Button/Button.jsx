import React from 'react';

import PropTypes from 'prop-types';

import { StyledButton } from './Styled';

const Button = ({ onClick }) => {
  return <StyledButton onClick={onClick}>Load more</StyledButton>;
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
