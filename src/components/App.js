import React from 'react';
import Footer from './Footer';
import Buttons from './Buttons';
import Header from './Header';
import Charts from './Charts';

class App extends React.Component {

    render() {
        return (
        <div>
            <Header />
            <Buttons />
            <Charts />
            <Footer />
        </div>);
    }
}

export default App;