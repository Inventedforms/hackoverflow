import React, {Component} from 'react';
import './Header.scss';

class Header extends Component {
    gotoProfile = () => {

    };

    render() {
        return (
            <div className='headerContainer'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-3'>
                            img here
                        </div>

                        <div className='col-sm-6'>
                            <div className="input-group">
                                <input className='form-control'/>

                                <div className="input-group-append">
                                    <button className="btn btn-outline-light" type="button">Search</button>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-3'>
                            <div className='profileImg' onClick={this.gotoProfile}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
