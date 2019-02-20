import React from 'react';
import './Header.scss';

const gotoProfile = () => {
    console.log('aaa')
};

const Header = () => {


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
                        <div className='profileImg' onClick={gotoProfile}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
