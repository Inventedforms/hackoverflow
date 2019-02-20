import React from 'react';
import './SingleCardQuestion.scss';
import { MdArrowUpward, MdArrowDownward } from "react-icons/md";

const SingleCardQuestion = ({data, onClick, type}) => {

    return (
        <div className='SingleCardQuestionContainer'>
            <div className='voteContainer'>
                <div className='voteInfo' onClick={() => {onClick('up', type, data._id)}}>
                    <MdArrowUpward size='100%'/>
                </div>

                <div className='voteInfo'>
                    {data.up.length}
                </div>

                <div className='voteInfo' onClick={() => {onClick('down', type, data._id)}}>
                    <MdArrowDownward size='100%'/>
                </div>
            </div>

            <div className='contentContainer'>
                {data.body}
            </div>
        </div>
    );
};

export default SingleCardQuestion;
