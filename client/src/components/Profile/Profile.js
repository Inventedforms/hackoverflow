import React, {Component} from 'react';

class Profile extends Component{
    constructor(props) {
        super(props);
        console.log('user id here', props.match.params.userId)
    }

    render() {
        return (
            <div>
                This is profile
            </div>
        );
    }

}

export default Profile;
