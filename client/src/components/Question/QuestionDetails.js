import React, {Component} from 'react';
import Header from './../Header/Header';
import QuestionCardSingle from "./QuestionCardSingle"

class QuestionDetails extends Component {
    constructor(props) {
        super(props);

        var fakeData = {
            header: "how does react work",
            body: "i need help",
            up: [1, 2],
            down: [1,2,3,4,5],
            answers:[{
                body: "This is answer 1",
                up: [1, 2, 3, 4, 6],
                down: [1,2],
            }, {
                body: "This is answer 2",
                up: [],
                down: [1,2,3,4,5],
            }]
        }
        
        this.state = {
            thread: fakeData
        }

        console.log(this.state);
        
    }

    
    render() {
        if (this.state.thread) {
            return (
                <React.Fragment>
                    <Header/>
                    <div style={{marginTop: '60px'}} className="container">
                        <QuestionCardSingle type='thread' data={this.state.thread} />
                        {this.state.thread.answers.map((data) => { return (<QuestionCardSingle type='answer' data={data} />)})}
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

export default QuestionDetails;
