/**
 * Play around with Babel --> http://babeljs.io/repl/#?babili=false&browsers=&build=&builtIns=false&circleciRepo=&code_lz=MYewdgzgLgBAggBwTAvDAZgVzMKBLcGACgEoYBvAKBhgCcBTKTWsGammAHhABsA-djQCQnHnhjAeAQwgQAclIC29VDABEkmRACMavts4B6MQI5muYmOADCY4AGtV5Uij4BfPgCYjJwTBEmAMw-eKYcRrwCbkA&debug=false&evaluate=true&lineWrap=false&presets=react%2Cstage-2&prettier=false&showSidebar=true&targets=&version=6.26.0
 * 
*/

import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
const API_KEY = "AIzaSyB1vSW7UU36XX7wNwd-XC9dSkz_APKJmRY";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({ key: API_KEY, term: "surfboards" }, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
