import React, {Component} from 'react';
import './App.css';
import apiService from './common/services/ApiService';
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';
import Question from './components/Question/Question';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Profile from './components/Profile/Profile';


class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/question" component={Question}/>
                    <Route path="/404" component={PageNotFound}/>
                    <Route path="/profile" exact component={Profile}/>
                    <Redirect from="/" to="question" />
                </Switch>
            </BrowserRouter>

        );
    }
}

export default App;
