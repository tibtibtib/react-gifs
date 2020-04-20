import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gifs_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selected_gif: "LOL72ESZjiBAkHtea9"
    };
  }

  search = (query) => {
    giphy('EIJ24MM6gdLIgPV1FKavTFL2wbHdPYGy').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({ gifs: res.data });
    });
  }

  selectGif = (gif) => {
    this.setState({ selected_gif: gif });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selected_gif} />
          </div>
        </div>
        <div className="right-scene">
          <GifList selectGif={this.selectGif} gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
