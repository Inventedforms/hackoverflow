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
                <div>
                    <MdArrowUpward size={70}/>
                </div>
                <div>
                    {this.state.thread.up.length - this.state.thread.down.length}
                </div>
                <div>
                    <MdArrowDownward size={70}/>
                </div>
            </React.Fragment>
        );
       
    }
}

export default QuestionCardSingle;
