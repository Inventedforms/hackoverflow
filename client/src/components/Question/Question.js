import React, {Component} from 'react';
import Header from './../Header/Header';
import ApiService from './../../common/services/ApiService';
import SingleQuestion from './SingleQuestion/SingleQuestion';
<<<<<<< HEAD
import QuestionDetails from './QuestionDetails';
=======
import QuestionDetails from './QuestionDetail/QuestionDetails';
>>>>>>> cbaf7c3615dd829f1658d20e61dcb720a0ea3d08

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
<<<<<<< HEAD
                console.log(result);
=======
>>>>>>> cbaf7c3615dd829f1658d20e61dcb720a0ea3d08
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
<<<<<<< HEAD

    }

    questionDetailHandler = (id) => {
        console.log(id)
        ApiService.getQuestionById(id).then((result) => {
            console.log(result);
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

                    {
                        this.state.isSingleQuestion ? (
                            <QuestionDetails questionData={true}/>
                        ) : (
                            <div className='questionContainer'>
                                {
                                    this.state.questionArray.map((question) => {
                                        return <SingleQuestion
                                            question={question}
                                            key={question._id}
                                            onClick={() => {
                                                this.questionDetailHandler(question._id)
                                            }}/>
                                    })
                                }
                            </div>
                        )
                    }
=======

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
>>>>>>> cbaf7c3615dd829f1658d20e61dcb720a0ea3d08

                </React.Fragment>
            );
        } else {
            return '';
        }
    }
}

export default Question;
