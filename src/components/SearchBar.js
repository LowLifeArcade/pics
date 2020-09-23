import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (event) => {
    // i will do this a lot
    event.preventDefault();

    // do do bellow we need an arrow function so it shoots and sticks ".this" to the class
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
    <div className="ui segment" >
      <form onSubmit={this.onFormSubmit} className="ui form" >
        <div className="field" >
          <label>Image Search</label>
          <input type="text"  
          value={this.state.term}
          onChange={e => this.setState({ term: e.target.value })} />
        </div>
      </form>
    </div>
    )
  }
}

export default SearchBar;