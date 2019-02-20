<<<<<<< HEAD
import React, {Component} from 'react';
import './Header.scss';
import logo from './../../common/images/logo.png';
import { Redirect } from 'react-router-dom';
import { Image } from "react-bootstrap";

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


    render() {

        if (this.state.navToProfile) {
            return (
                 <Redirect to='/profile'/>
        )}


        return (
            <div className='headerContainer'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-4'>
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
=======
import React from 'react';
import './Header.scss';
import logo from './../../common/images/logo.png';

const gotoProfile = () => {
    console.log('aaa')
};

const Header = () => {


    return (
        <div className='headerContainer'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-4'>
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
                        <div className='profileImg' onClick={gotoProfile}>

>>>>>>> cbaf7c3615dd829f1658d20e61dcb720a0ea3d08
                        </div>
                    </div>
                </div>
            </div>
<<<<<<< HEAD
        );
    }
}


=======
        </div>
    );
};

export default Header;
>>>>>>> cbaf7c3615dd829f1658d20e61dcb720a0ea3d08
