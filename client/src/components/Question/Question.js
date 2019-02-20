import React, {Component} from 'react';
import Header from './../Header/Header';
import SingleQuestion from './SingleQuestion'

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {

        fetch('http://localhost:5000/threads')
        .then(res => res.json())
        .then(json => {
            this.setState({ threads: json })
        });
       
    }

    render() {
        if (this.state.threads) {
            return (
                <React.Fragment>
                <Header/>
                    <div style={{marginTop: '60px'}}>
                        <SingleQuestion threads={this.state.threads} />
                    </div>
                </React.Fragment>
            );
    
        } else {
            return (
                <React.Fragment>
                <Header/>
                <div></div>
                </React.Fragment>
            )
        }
    }
}

export default Question;
