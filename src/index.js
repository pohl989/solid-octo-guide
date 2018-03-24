// import react into the file
import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import TYSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDQqwBUPzS4Cw5o_Qz9TeSaCjw5RRS23I4';

// Create a new component. this Component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    TYSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      // this.setState({ videos: videos }) ES6 can do this
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (In the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
