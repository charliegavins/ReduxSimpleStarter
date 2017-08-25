import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCih-OEBGmQZWEc3sruFfFuWxTIIDQThXQ';

// Create a new component and this component should produce some HTML

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
);
}

// Once HTML is created, this should inject this into the DOM

ReactDOM.render(<App />, document.querySelector('.container'));
