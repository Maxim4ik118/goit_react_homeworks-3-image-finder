import React from 'react';

import PropTypes from 'prop-types';

import { StyledFilter } from './Styled';

class Searchbar extends React.Component {
  state = {
    searchValue: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    const searchTerm = e.target.search.value;

    this.props.onSubmit(searchTerm);
    this.setState(() => ({ searchValue: '' }));
  };

  handleSearchTermChange = ({ target: { value } }) => {
    this.setState(() => ({ searchValue: value }));
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  render() {
    const { searchTerm, handleSearchTermChange } = this.state;

    return (
      <StyledFilter>
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={handleSearchTermChange}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            name="search"
            value={searchTerm}
            placeholder="Search images and photos"
          />
        </form>
      </StyledFilter>
    );
  }
}

export default Searchbar;
