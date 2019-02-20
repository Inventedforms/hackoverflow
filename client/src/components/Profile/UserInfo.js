import React, {Component} from 'react';
import { Image, InputGroup, FormControl, Container, Row, Col } from 'react-bootstrap';

import "./UserInfo.css";

export default class UserInfo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="UserInfo">
                <Container>
                    <Row>
                        <Col sm={4} className = "center">
                            <Image className = "UserProfilePic scale-center"
                                id = 'profile-pic'
                                src={this.props.profilePicUrl}
                                rounded
                            />
                        </Col>
                        <Col sm={8}>
                            <Container>
                                <Row>
                                    <h1>{this.props.name}</h1>
                                </Row>
                                <Row>
                                    <InputGroup className="UserInfoField">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="username">Username</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            placeholder={this.props.username}
                                            aria-label="Username"
                                            aria-describedby="username"
                                        />
                                    </InputGroup>
                                </Row>
                                <Row>
                                    <InputGroup className="UserInfoField">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="organization">Organization</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            placeholder={this.props.username}
                                            aria-label="Organization"
                                            aria-describedby="organization"
                                        />
                                    </InputGroup>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}