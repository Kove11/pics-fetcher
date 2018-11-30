import React from "react";

class SearchBar extends React.Component {
  state = {
    term: ""
  };
  onFormSubmit = e => {
    // arrow functions here automatically bind "this" to the instance of our SearchBar class
    e.preventDefault(); // if using onFormSubmit() {asdasd} ... it does not automatically bind "this" in the function to the instance of the SearchBar Class
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
