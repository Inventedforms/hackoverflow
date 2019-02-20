import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';

import 'react-bootstrap-typeahead/css/Typeahead.css';
import './Skills.css';



export default class Skills extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Skills">
                <Container>
                    <Row>
                        <Col sm={12}>
                            <Typeahead
                                labelKey="name"
                                multiple= {true}
                                options={this.props.skills}
                                placeholder="Choose your superpowers!"
                            />
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }
}