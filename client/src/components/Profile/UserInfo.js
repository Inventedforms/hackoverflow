import React, {Component} from 'react';
import { Image, Container, Row, Col, Card } from 'react-bootstrap';

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
                                    <Card className="UserInfoCard">
                                        <Card.Header as="h5">Username</Card.Header>
                                        <Card.Body>
                                            <Card.Title>
                                                {this.props.username}
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Row>
                                <Row>
                                    <Card className="UserInfoCard">
                                        <Card.Header as="h5">Organization</Card.Header>
                                        <Card.Body>
                                            <Card.Title>
                                                {this.props.organization}
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}