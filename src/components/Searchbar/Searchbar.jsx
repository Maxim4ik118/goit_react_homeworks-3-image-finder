import React from 'react';

import PropTypes from 'prop-types';

import { StyledFilter } from './Styled';

class Searchbar extends React.Component {
  state = {
    searchValue: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.searchValue);
    this.setState(() => ({ searchValue: '' }));
  };

  handleSearchTermChange = ({ target: { value, name } }) => {
    this.setState(() => ({ [name]: value }));
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  render() {
    const { searchValue } = this.state;

    return (
      <StyledFilter>
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={this.handleSearchTermChange}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            name="searchValue"
            value={searchValue}
            placeholder="Search images and photos"
          />
        </form>
      </StyledFilter>
    );
  }
}

export default Searchbar;
