import React, {Component} from 'react';
import './App.css';
import apiService from './common/services/ApiService';
import Login from './components/Authentication/Login';

class App extends Component {
    click = () => {
        apiService.simpleApi().then((res) => {
           console.log(res);
        }).catch((error) => {
            console.log(error);
        });
    };

    render() {
        return (
            <Login/>
        );
    }
}

export default App;
