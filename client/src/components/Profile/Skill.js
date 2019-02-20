import React, {Component} from 'react';
import { Col, Alert } from 'react-bootstrap';

import './Skill.css';

export default class Skill extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Skill">
                    
<<<<<<< HEAD
                <Alert 
                    dismissible variant="primary"
                    onClose = {this.props.closeHandler(this.props.skill)}
                >

=======
                <Alert dismissible variant="primary">
>>>>>>> cbaf7c3615dd829f1658d20e61dcb720a0ea3d08
                    <Alert.Heading>{this.props.skill}</Alert.Heading>
                </Alert>
                    
            </div>

        );
    }
}