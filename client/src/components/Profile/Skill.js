import React, {Component} from 'react';
import {Col, Alert} from 'react-bootstrap';

import './Skill.css';

export default class Skill extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Skill">

                <Alert
                    dismissible variant="primary"
                    onClose={this.props.closeHandler(this.props.skill)}
                >


                    <Alert.Heading>{this.props.skill}</Alert.Heading>
                </Alert>

            </div>

        );
    }
}
