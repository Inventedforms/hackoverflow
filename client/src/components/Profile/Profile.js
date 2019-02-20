import React, {Component} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import UserInfo from './UserInfo';
import Skills from './Skills';

import "./Profile.css";

export default class Profile extends Component{
    constructor(props) {
        super(props);
       // console.log('user id here', this.props.match.params.userId)
    
    this.state = {
            displayName: "Rishabh Prakash",
            username: "rprakash",
            profilePicUrl: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            skills: [
                "test1",
                "test2",
                "test3"
            ]
        }
    }

    componentDidMount() {

        let user = {
            displayName: "Rishabh Prakash",
            username: "rprakash",
            profilePicUrl: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            skills: [
                "test1",
                "test2",
                "test3"
            ]
        };

        this.setState({
            name: user.displayName,
            displayName: user.displayName,
            profilePicUrl: user.profilePicUrl,
            skills: user.skills
        })
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