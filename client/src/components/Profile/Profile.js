import React, {Component} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import UserInfo from './UserInfo';
import Skills from './Skills';
import Header from './../Header/Header';
<<<<<<< HEAD
import { Redirect } from 'react-router-dom';
=======
import ApiService from '../../common/services/ApiService';
>>>>>>> cbaf7c3615dd829f1658d20e61dcb720a0ea3d08

import "./Profile.css";

export default class Profile extends Component{
    constructor(props) {
        super(props);
<<<<<<< HEAD
        
    this.state = {
            displayName: "",
            username: "",
            organization: "",
            profilePicUrl: "https://s3-us-west-1.amazonaws.com/team-2-emxhange/15-15cm-car-sticker-cool-Heisenberg-cartoon-celebrity-Car-window-car-body-Bumper-Vinyl-sticker-Black.jpg_640x640.png",
            skills: [],
            toQuestion: false,
            userId: "5c6d11eef0de7e4d66b1c9e4"
=======
        //console.log('user id here', this.props.match.params.userId)



    this.state = {
            displayName: "Rishabh Prakash",
            username: "rprakash",
            organization: "Product",
            profilePicUrl: "https://s3-us-west-1.amazonaws.com/team-2-emxhange/15-15cm-car-sticker-cool-Heisenberg-cartoon-celebrity-Car-window-car-body-Bumper-Vinyl-sticker-Black.jpg_640x640.png",
            skills: [
                {
                    _id: "5c6d1607f0de7e4d66b1c9e7",
                    name: "EPC"
                },
                {
                    _id: "5c6d160df0de7e4d66b1c9e8",
                    name: "EBS"
                },
                {
                    _id: "5c6d1614f0de7e4d66b1c9e9",
                    name: "Jenkins"
                }
                
            ]
>>>>>>> cbaf7c3615dd829f1658d20e61dcb720a0ea3d08
        }
    }

    componentDidMount() {

<<<<<<< HEAD
        let userUrl = 'http://localhost:5000/users/' + this.state.userId;

        fetch(userUrl)  
            .then(response => response.json())
            .then(result => {
                console.log(result);
                this.setState({
                    username: result.screen_name,
                    displayName: result.name,
                    organization: result.organization,
                    //profilePicUrl:  result.profile_picture,
                    skills: result.tags
                 })
        });
    }

    handleSubmit = () => {
        this.setState({
            toQuestion: true
        })
        console.log(this.state.toQuestion);
    }

    handleEdit() {

=======

        let url = 'http://977051ba.ngrok.io/users/5c6c66915abceabc53933c96'

        fetch(url, {
            method: 'GET',
            header: {
                'Content-Type': 'application/json'
            }
        })  .then(res => res.json())
            .then(json => {
                console.log(json);
                this.setState({
                    name: json.name,
                    displayName: json.screen_name,
                    organization: json.organization,
                    profilePicUrl:  json.profile_picture,
                    skills: json.tags
                 })
        });
>>>>>>> cbaf7c3615dd829f1658d20e61dcb720a0ea3d08
    }

    render() {
        if (this.state.toQuestion) {
            return (
                 <Redirect to='/question'/>
        )}

        return (
            <React.Fragment>
                <Header/>

                <div style={{marginTop: '60px'}} className = "UserProfile">
                    <Container>
                        <Row>
                            <Col sm = {12}>
                                <UserInfo
                                    name={this.state.displayName}
                                    username={this.state.username}
                                    organization={this.state.organization}
                                    profilePicUrl={this.state.profilePicUrl}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Skills
                                    skills={this.state.skills}
                                />
                            </Col>
                        </Row>
                        <Row>
<<<<<<< HEAD
                            <Col sm={7}/>
                            <Col sm={3}>
                                <form>
                                    <Button
                                        className = "form-button"
                                        block
                                        size="lg"
                                        disabled={false}
                                        onClick = {this.handleSubmit}
                                        variant="primary"
                                    >
                                        Save and Continue
                                    </Button>
                                </form>
                            </Col>
                            <Col sm={2}>
                                <form>
                                    <Button
                                        className = "form-button"
                                        block
                                        size="lg"
                                        disabled={false}
                                        onClick = {this.handleEdit}
                                        variant="secondary"
                                    >
                                        Edit
=======
                            <Col sm={12}>
                                <form onSubmit={this.handleSubmit}>
                                    <Button
                                        block
                                        size="lg"
                                        disabled={false}
                                        type="submit"
                                        variant="primary"
                                    >
                                        Save
>>>>>>> cbaf7c3615dd829f1658d20e61dcb720a0ea3d08
                                    </Button>
                                </form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}
