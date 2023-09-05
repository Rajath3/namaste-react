import React from 'react';
import ReactDOM from 'react-dom/client';

{/* <div id='parent'>
    <div id='child'>
        <h1>Hello H1</h1>
        <h2>Hello H2</h2>
    </div>
</div> */}

// React create element creates an objects, which while rendering 
// will convert to html
const parent = React.createElement('div', {id: 'parent'},
    React.createElement('div', {id: 'child'},
    [React.createElement('h1', {}, "Hello H1"),
    React.createElement('h2', {}, "Hello H2")]
    )
)

const heading = React.createElement('h1', {id: 'heading'}, 'Hello From React!');

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading);
root.render(parent);