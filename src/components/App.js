import React from 'react'
import About from './About';
import HomePage from './HomePage';
import Header from './common/Header';

const App = props => {
    const route = window.location.pathname;
    return (
        <div className='container'>
            <Header />
            {
                route === '/about' ? (<About />) : (<HomePage />)
            }
        </div>
    )
}

export default App