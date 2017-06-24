import React, { Component } from 'react';

class Search extends Component {
  render() {
    const { getResults } = this.props;
    let input;

    return (
      <form onSubmit={ (e) => {
        e.preventDefault();
        getResults(input.value.trim());
      }}>
        <div className="input-group">
          <input type="text" ref={ node => input = node } className="input-group-field" placeholder="Enter your query" required />
          <div className="input-group-button">
            <button type="submit" className="button">Buscar</button>
          </div>
        </div>
      </form>
    );
  }
}

export default Search;
