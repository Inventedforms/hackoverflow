import React, {Component} from 'react';
import Header from './../Header/Header';
import { MdArrowUpward, MdArrowDownward } from "react-icons/md";

class QuestionCardSingle extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        
        this.state = {
          thread: props.data,
          type: props.type
        }
    }

    handleVote(voteType) {
        console.log(voteType);
        
        const url = `http://localhost:5000/${this.state.type}s/${this.state.thread._id.$oid}/vote`

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                voteType: voteType
            }),
            headers: {
                "user_id": "5c6d1c4f57a5cf4500863fc0",
                "Content-Type": "application/json"
            }
        }).then((data) => console.log(data))

    }
    

    render() {
        let heading = ""
        if (this.state.type == "thread") {
            heading = <div><h2>{this.state.thread.header}</h2></div>
        }
    
        return (
            <React.Fragment>
            <Header/>
                {heading}
                <p>{this.state.thread.body}</p>
                <div onClick={() => {this.handleVote('up')}}>
                    <MdArrowUpward size={70} />
                </div>
                <div>
                    {this.state.thread.up.length - this.state.thread.down.length}
                </div>
                <div onClick={() => {this.handleVote('down')}}>
                    <MdArrowDownward size={70} />
                </div>
            </React.Fragment>
        );
       
    }
}

export default QuestionCardSingle;
