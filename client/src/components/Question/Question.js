import React, {Component} from 'react';
import Header from './../Header/Header';
import ApiService from './../../common/services/ApiService';
import SingleQuestion from './SingleQuestion/SingleQuestion';

import './Question.scss';

class Question extends Component {
    constructor(props) {
        super(props);

        this.state = {
            questionArray: []
        };
    }

    componentDidMount() {
        ApiService.getAllQuestion().then((result) => {
            console.log(result);
            this.setState({
                questionArray: result
            });
        }).catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            <React.Fragment>
                <Header/>

                {
                    this.state.questionArray.length !== 0 ? (
                        <div className='questionContainer'>
                            {
                                this.state.questionArray.map((question) => {
                                    return <SingleQuestion question={question} key={question._id}/>
                                })
                            }
                        </div>
                    ) : ''
                }

            </React.Fragment>
        );
    }
}

export default Question;
