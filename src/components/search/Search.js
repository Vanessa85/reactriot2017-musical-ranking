import React, { Component } from 'react';
import Card from './Card';
import './search.css';

class Search extends Component {
  render() {
    const { getResults, results, isLoading } = this.props;
    let input;

    return (
      <div className="search-component">
        <form onSubmit={ (e) => {
          e.preventDefault();
          getResults(input.value.trim());
        }}>
          <div className="input-group">
            <input type="text" ref={ node => input = node } className="input-group-field" placeholder="Search..." required />
            <div className="input-group-button">
              <button type="submit" className="button">Search</button>
            </div>
          </div>
        </form>
        {
          isLoading?
            this.renderLoading()
          :
            <div className="row">
              { results.map( (item, index) => <Card key={index} item={item} />) }
            </div>
        }
      </div>
    );
  }

  renderLoading() {
    return (
      <div className="ranking-loading">
        <i className="zmdi zmdi-spinner zmdi-hc-spin zmdi-hc-3x"></i>
      </div>
    );
  }
}

export default Search;
