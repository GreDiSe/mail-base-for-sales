import React from 'react';
import Registration from './Registration';

const alignmentContainer = {
    width: 400,
    margin: 'auto'
};

class RegistrationContainer extends React.Component {
    render(){
        return (
            <div style={alignmentContainer}>
                <Registration/>
            </div>
        );
    }
}

export default RegistrationContainer;