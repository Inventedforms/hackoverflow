import React from 'react';
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom'

>>>>>>> cbaf7c3615dd829f1658d20e61dcb720a0ea3d08
import './SingleQuestion.scss';
import CommonService from './../../../common/services/CommonService';


const SingleQuestion = ({question, onClick}) => {
    return (
        <div className='singleQuestionContainer' onClick={onClick}>
            <div className='questionInfo'>
                <div className='infoBox'>
                    <div className='number'>
<<<<<<< HEAD
                        {question.up.length}
=======
                        {question.up.length - question.down.length}
>>>>>>> cbaf7c3615dd829f1658d20e61dcb720a0ea3d08
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
                <div className='title'>
                    {question.header}
                </div>


                <div className='tagList'>
                    {
                        question.tags.map((tag, index) => {
                            if (index < 5) {
                                return <div key={tag} className='tag'>{tag}</div>
                            } else {
                                return null;
                            }
                        })
                    }
                </div>
            </div>

            <div className='ownerInfo'>
<<<<<<< HEAD
                {question.creator.name} created at {CommonService.dateHandler(question.createdAt)}
=======
                <a href={`slack://user?team=T2YPRNTU0&id=${question.creator.slack_id}`}>{question.creator.name} </a>
                    created at {CommonService.dateHandler(question.createdAt)}
>>>>>>> cbaf7c3615dd829f1658d20e61dcb720a0ea3d08
            </div>
        </div>
    );
};

export default SingleQuestion;
