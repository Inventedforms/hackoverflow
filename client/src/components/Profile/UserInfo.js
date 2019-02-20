import React, {Component} from 'react';
import { Image, InputGroup, FormControl, Container, Row, Col } from 'react-bootstrap';

export default class UserInfo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col sm={4}>
                            <Image
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
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            placeholder={this.props.username}
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
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