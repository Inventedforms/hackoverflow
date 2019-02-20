import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import Skill from './Skill';

import 'react-bootstrap-typeahead/css/Typeahead.css';
import './Skills.css';



export default class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            availableTags: [],
            selectedTags: []

        };
    }

    componentDidMount() {

        let currentAvailableTags = [];

        // Get all applicable tags
        let tagsUrl = 'http://localhost:5000/tags';

        fetch(tagsUrl)
            .then(response => response.json())
            .then(result => {
                result.forEach(element => {
                    currentAvailableTags.push(element.name);
                })
                console.log(currentAvailableTags);

<<<<<<< HEAD
                // let userTags = [
                //     "EPC",
                //     "EBS",
                //     "Jenkins"
                // ];
        
                // userTags.forEach(element => {
                //     let index = currentAvailableTags.indexOf(element);
                    
                //     if (index > -1) {
                //         currentAvailableTags.splice(index, 1);
                //     }
                // })
                
            
                // this.setState({selectedTags: userTags});
                // this.setState({availableTags: currentAvailableTags});
                // console.log(this.state);
=======
                let userTags = [
                    "EPC",
                    "EBS",
                    "Jenkins"
                ];
        
                userTags.forEach(element => {
                    let index = currentAvailableTags.indexOf(element);
                    
                    if (index > -1) {
                        currentAvailableTags.splice(index, 1);
                    }
                })
                
            
                this.setState({selectedTags: userTags});
                this.setState({availableTags: currentAvailableTags});
                console.log(this.state);
>>>>>>> cbaf7c3615dd829f1658d20e61dcb720a0ea3d08
            })

        


        // Get tags already associated with user - and remove from available tags
<<<<<<< HEAD
        let userUrl = 'http://localhost:5000/users/5c6d11eef0de7e4d66b1c9e4';

        fetch(userUrl)  
            .then(response => response.json())
            .then(result => {
                
                let userTags = [];
                result.tags.forEach(element => {
                    userTags.push(element);
                    
                    let index = currentAvailableTags.indexOf(element);
                    if (index > -1) {
                        currentAvailableTags.splice(index, 1);
                    }
                });
                
            
                this.setState({selectedTags: userTags});
                this.setState({availableTags: currentAvailableTags});

                console.log(this.state);
            })
=======
        // let userUrl = 'http://localhost:5000/users/5c6d11eef0de7e4d66b1c9e4';

        // fetch(userUrl)  
        //     .then(response => response.json())
        //     .then(result => {
        //         console.log(result);
        //         // let userTags = [];
        //         // result.tags.forEach(element => {
        //         //     userTags.push(element);
                    
        //         //     let index = currentAvailableTags.indexOf[element];
        //         //     if (index > -1) {
        //         //         delete currentAvailableTags[index];
        //         //     }
        //         // });
                
            
        //         // this.setState({selectedTags: userTags});
        //         // this.setState({availableTags: currentAvailableTags});

        //         // console.log(this.state);
        //     })
>>>>>>> cbaf7c3615dd829f1658d20e61dcb720a0ea3d08
    }

    addSkill(selected) {
        console.log(selected);

        let newSelectedTags = this.state.selectedTags.slice();  
        let currentTag = selected[0];

        newSelectedTags.push(currentTag);

        this.setState({selectedTags: newSelectedTags});

        let newAvailableTags = this.state.availableTags.slice();
        let index = newAvailableTags.indexOf(currentTag);
        if (index > -1) {
            delete newAvailableTags[index];
        }

        this.setState({availableTags: newAvailableTags});
        this.typeahead.getInstance().clear();
<<<<<<< HEAD
    }

    removeSkill(selected) {
        console.log(selected);


=======
>>>>>>> cbaf7c3615dd829f1658d20e61dcb720a0ea3d08
    }

    render() {
        return (
            
            <div className="Skills">
                <Container>
                    <Row className = "search-bar">
                        <Col sm={12}>
                            <Typeahead
                                ref={(typeahead) => this.typeahead = typeahead}
                                bsSize = "large"
<<<<<<< HEAD
                                align = "left"
=======
>>>>>>> cbaf7c3615dd829f1658d20e61dcb720a0ea3d08
                                labelKey="name"
                                multiple= {false}
                                options={this.state.availableTags}
                                placeholder="Add your areas of expertise!"
                                onChange = {(selected) => {
                                    this.addSkill(selected)
                                }}
                            />
                        </Col>
                    </Row>
                    {
                        this.state.selectedTags.map((item) => (
<<<<<<< HEAD
                            <Skill 
                                key={item} 
                                skill={item}
                                closeHandler = {this.removeSkill}
                            />
=======
                            <Skill key={item} skill={item}/>
>>>>>>> cbaf7c3615dd829f1658d20e61dcb720a0ea3d08
                        ))
                    }
                </Container>
            </div>
           
        );
    }
}