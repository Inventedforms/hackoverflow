import React, {Component} from 'react';
import './App.css';

import {Route, Switch, BrowserRouter} from 'react-router-dom';

import Question from './components/Question/Question';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Profile from './components/Profile/Profile';
import Login from './components/Authentication/Login';
import ProtectedRoute from './components/Authentication/ProtectedRoute';
import Spinner from './components/Spinner/Spinner';

class App extends Component {

    state = {
        spinnerData: {
            show: false,
            message: 'Loading, please wait...'
        }
    };

    changeSpinnerState = ({show, message = 'Loading, please wait...'}) => {
        this.setState({
            spinnerData: {
                show: show,
                message: message
            }
        })
    };

    render() {
        return (
            <React.Fragment>
                <Spinner data={this.state.spinnerData}/>

                <BrowserRouter>
                    <Switch>
                        <Route path='/' exact component={Login}/>
                        <ProtectedRoute path='/profile'
                                        component={() => <Profile spinnerData={this.changeSpinnerState}/>}/>
                        <ProtectedRoute path='/question'
                                        component={() => <Question spinnerData={this.changeSpinnerState}/>}/>
                        <ProtectedRoute path='/question/:questionId'
                                        component={() => <Question spinnerData={this.changeSpinnerState}/>}/>
                        <ProtectedRoute path='/profile/:userId'
                                        component={() => <Profile spinnerData={this.changeSpinnerState}/>}/>
                        <Route component={PageNotFound}/>
                    </Switch>
                </BrowserRouter>
            </React.Fragment>

        );
    }
}

export default App;
