import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyDxjbZwKUbMx_lqpBLMRp2ogspvH86uLek';

// Creating a new componenet that procduces some HTML
// Remember components are just code that produce some sort of HTML
// After we create the component we want it to be seen in the DOM aka somehow RENDER it to the page

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('container'));