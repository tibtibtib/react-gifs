import React from 'react';
import SearchBar from './search_bar';

const App = ({ name }) => {
  return (
    <div>
      <div className="left-scene">
        <SearchBar />
      </div>
      <div className="right-scene">
        Hello,
        {name}
      </div>
    </div>
  );
};

export default App;
