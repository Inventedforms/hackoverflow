import React, {Component} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import UserInfo from './UserInfo';
import Skills from './Skills';

import "./Profile.css";

export default class Profile extends Component{
    constructor(props) {
        super(props);

        this.state = {
            name: "test", 
            screenName: "test", 
            profilePicUrl: "",
            skills: ["test1", "test2", "test3"]
        };
    }

    componentDidMount() {
        //api call to get name, screename, profilePicUrl, skills
    }

    handleSubmit() {

    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col sm = {12}>
                            <UserInfo 
                                name={this.state.name} 
                                username={this.state.screenName}
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
                        <Col sm={4}/>
                        <Col sm={4}>
                            <form onSubmit={this.handleSubmit}>
                                <Button
                                    block
                                    size="md"
                                    disabled={false}
                                    type="submit"
                                >
                                    Save 
                                </Button>
                            </form>
                        </Col>
                        <Col sm={4}/>
                    </Row>
                </Container>
                
            </div>
        );
    }
}