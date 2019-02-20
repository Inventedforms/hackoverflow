import React, {Component} from 'react';
import './QuestionDetail.scss';
import SingleCardQuestion from "./SingleCardQuestion/SingleCardQuestion"
import ApiService from "../../../common/services/ApiService";

class QuestionDetails extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);

        this.state = {
            questionData: this.props.questionData
        };
    }

    vote = (voteType, type, id) => {
        console.log(voteType, type, id)
        ApiService.vote(id, type, voteType).then((res) => {
            if (type === 'answers') {

            } else {
                //let up =
            }
        }).catch((error) => {
            console.log(error)
        });
    };

    render() {
        return (
            <React.Fragment>
                <div className='questionHeader'>
                    {this.state.questionData.header}
                </div>

                <SingleCardQuestion data={this.state.questionData} type='threads' onClick={this.vote}/>
                <div className='boundary'>
                    {this.state.questionData.answers.length} Answers
                </div>
                {
                    this.state.questionData.answers.map((data) => {
                        return <SingleCardQuestion key={data._id} data={data} type='answers' onClick={this.vote}/>
                    })
                }

            </React.Fragment>
        );
    }
}

export default QuestionDetails;
