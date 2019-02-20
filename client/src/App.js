import React, {Component} from 'react';
import './App.css';
import apiService from './common/services/ApiService';

import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';

import Question from './components/Question/Question';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Profile from './components/Profile/Profile';
import Login from './components/Authentication/Login';


class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Login}/>
                    <Route path='/question' component={Question}/>
                    <Route path='/profile/:userId' component={Profile}/>
                    <Route  component={PageNotFound}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
