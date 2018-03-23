// import react into the file
import React from 'react';
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDQqwBUPzS4Cw5o_Qz9TeSaCjw5RRS23I4';

// Create a new component. this Component should produce some HTML

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Take this component's generated HTML and put it on the page (In the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
