import React, {Component} from 'react';
import Header from './../Header/Header';

class Question extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <Header/>

                <div style={{marginTop: '60px'}}>
                    This is question
                </div>
            </React.Fragment>


        );


    }
}

export default Question;
