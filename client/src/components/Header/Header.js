import React, {Component} from 'react';
import './Header.scss';
import logo from './../../common/images/logo.png';
import {Redirect} from 'react-router-dom';
import {Image} from "react-bootstrap";

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navToProfile: false
        }
    }

    gotoProfile = () => {
        if (window.location.href.indexOf("profile") > -1) {
            return;
        }

        this.setState({
            navToProfile: true
        })
    };

    gotoQuestion = () => {
        if (window.location.href.indexOf("question") > -1) {
            return;
        }

        this.setState({
            navToQuestion: true
        })
    };

    render() {

        if (this.state.navToProfile) {
            return (
                <Redirect to='/profile'/>
            )
        }

        if (this.state.navToQuestion) {
            return (
                <Redirect to='/question'/>
            )
        }


        return (
            <div className='headerContainer'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-4' onClick={this.gotoQuestion}>
                            <img src={logo} className='logo' alt=''/>
                        </div>

                        <div className='col-sm-6'>
                            <div className="input-group">
                                <input className='form-control'/>

                                <div className="input-group-append">
                                    <button className="btn btn-outline-light" type="button">Search</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-2'>
                            <div className='profileImg' onClick={this.gotoProfile}>
                                <Image
                                    src={this.props.profilePicUrl}
                                    rounded
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}



