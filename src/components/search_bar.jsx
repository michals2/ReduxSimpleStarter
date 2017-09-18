import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "Starting Value" };
  }
  render() {
    return (
      <div>
        <input
          value={this.state.term} // this line makes the input a "controlled component"
          onChange={e => this.setState({ term: e.target.value })}
        />
      </div>
    );
  }
}

export default SearchBar;
