import React, {Component} from 'react';
import logo from './../logo.svg';
import './../assets/styles/App.css';
import Header from './Header';
import First from './First';
import Second from './Second';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <First />
                <Second />
             </div>
        );
    }
}

export default App;
