import React, {Component} from 'react';
import DSLoadingIndicator from '@elliemae/ds-basic/dsloadingindicator';

class Spinner extends Component{
    state= {
        show: false,
        message: 'Loading, please wait...'
    };

    render() {
        return (
            <DSLoadingIndicator
                loading={this.state.show}
                message={this.state.message}
                style={{ color: 'white', fontSize: '1.5em' }}
            />
        );
    }
}

export default Spinner;
