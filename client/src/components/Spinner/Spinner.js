import React from 'react';
import DSLoadingIndicator from '@elliemae/ds-basic/dsloadingindicator';

const Spinner = ({data}) => {
    return (
        <DSLoadingIndicator
            loading={data.show}
            message={data.message}
            style={{color: 'white', fontSize: '1.5em'}}
        />
    );
};

export default Spinner;
