import React from 'react';
import ReactDOM from 'react-dom/client';
import Heading from './Components/Header';
import Body from './Components/Body';
import About from './Components/About';
import Contact from './Components/Contact';
import Error from './Components/Error';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';



const AppLayout = () => {
    return (
        <div className='app'>
            <Heading/>
            <Body />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        errorElement: <Error />
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/contact',
        element: <Contact />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>);