import React from 'react';
import './SingleQuestion.scss';

const SingleQuestion = ({question}) => {
    return (
        <div className='singleQuestionContainer'>
            <div className='questionInfo'>
                <div className='infoBox'>
                    <div className='number'>
                        {question.up.length}
                    </div>

                    <div className='info'>
                        votes
                    </div>
                </div>

                <div className='infoBox'>
                    <div className='number'>
                        {question.answers.length}
                    </div>

                    <div className='info'>
                        ans
                    </div>
                </div>

                <div className='infoBox'>
                    <div className='number'>
                        {question.views}
                    </div>

                    <div className='info'>
                        views
                    </div>
                </div>
            </div>

            <div className='questionTitle'>

            </div>

            <div className='ownerInfo'>
                Alex
            </div>
        </div>
    );
};

export default SingleQuestion;
