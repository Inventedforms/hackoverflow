import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import UserInfo from './UserInfo';
import Skills from './Skills';
import Header from './../Header/Header';
import {Redirect} from 'react-router-dom';

import "./Profile.css";

export default class Profile extends Component {
    constructor(props) {
        super(props);


        this.state = {
            displayName: "",
            username: "",
            organization: "",
            profilePicUrl: "https://s3-us-west-1.amazonaws.com/team-2-emxhange/15-15cm-car-sticker-cool-Heisenberg-cartoon-celebrity-Car-window-car-body-Bumper-Vinyl-sticker-Black.jpg_640x640.png",
            skills: [],
            toQuestion: false,
            userId: "5c6d11eef0de7e4d66b1c9e4"

        }
    }

    componentDidMount() {

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

    }

    render() {
        if (this.state.toQuestion) {
            return (
                <Redirect to='/question'/>
            )
        }

        return (
            <React.Fragment>
                <Header/>

                <div style={{marginTop: '60px'}} className="UserProfile">
                    <Container>
                        <Row>
                            <Col sm={12}>
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
                            <Col sm={7}/>
                            <Col sm={3}>
                                <form>
                                    <Button
                                        className="form-button"
                                        block
                                        size="lg"
                                        disabled={false}
                                        onClick={this.handleSubmit}
                                        variant="primary"
                                    >
                                        Save and Continue
                                    </Button>
                                </form>
                            </Col>
                            <Col sm={2}>
                                <form>
                                    <Button
                                        className="form-button"
                                        block
                                        size="lg"
                                        disabled={false}
                                        onClick={this.handleEdit}
                                        variant="secondary"
                                    >
                                        Edit

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
