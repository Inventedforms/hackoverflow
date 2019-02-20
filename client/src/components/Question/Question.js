import React, {Component} from 'react';
import Header from './../Header/Header';
import ApiService from './../../common/services/ApiService';
import SingleQuestion from './SingleQuestion/SingleQuestion';
import QuestionDetails from './QuestionDetail/QuestionDetails';

import './Question.scss';

class Question extends Component {
    constructor(props) {
        super(props);

        let isSingleQuestion = false;
        let singleQuestionId = '';

        if (this.props.route.match.params.questionId && this.props.route.match.params.questionId.length > 0) {
            isSingleQuestion = true;
            singleQuestionId = this.props.route.match.params.questionId;
        }

        this.state = {
            ready: false,
            questionArray: [],
            singleQuestionData: null,
            isSingleQuestion,
            singleQuestionId
        };
    }

    componentDidMount() {
        if (this.state.isSingleQuestion) {
            ApiService.getQuestionById(this.state.singleQuestionId).then((result) => {
                this.setState({
                    ready: true,
                    singleQuestionData: result
                });
            }).catch((error) => {
                console.log(error);
            })
        } else {
            ApiService.getAllQuestion().then((result) => {
                console.log(result);
                this.setState({
                    ready: true,
                    questionArray: result
                });
            }).catch((error) => {
                console.log(error);
            })
        }
    }

    questionDetailHandler = (id) => {
        console.log(id)
        ApiService.getQuestionById(id).then((result) => {
            this.setState({
                singleQuestionData: result,
                isSingleQuestion: true,
                singleQuestionId: id
            });
        }).catch((error) => {
            console.log('====', error);
        })
    };

    render() {
        if (this.state.ready) {
            return (
                <React.Fragment>
                    <Header/>
                    <div className='questionContainer'>
                        {
                            this.state.isSingleQuestion ? (
                                <QuestionDetails questionData={this.state.singleQuestionData}/>
                            ) : (
                                this.state.questionArray.map((question) => {
                                    return <SingleQuestion
                                        question={question}
                                        key={question._id}
                                        onClick={() => {
                                            this.questionDetailHandler(question._id)
                                        }}/>
                                })
                            )
                        }
                    </div>

                </React.Fragment>
            );
        } else {
            return '';
        }
    }
}

export default Question;
