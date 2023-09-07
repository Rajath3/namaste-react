import React from 'react';
import ReactDOM from 'react-dom/client';


const heading = <h1 id='heading'>Hello from JSX 😃 </h1>


const SubComponent = () => {
    return <h2>I'm sub component</h2>
}

// Composite class - Rendering one component inside another
const MainComponent = () => {
    return <div>
        <h1>I'm main component</h1> 
        <SubComponent />
        {SubComponent()}
        <SubComponent></SubComponent>
        {heading}
    </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<MainComponent />);