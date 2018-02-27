import React from 'react';
import Login from './Login';

const alignmentContainer = {
    width: 400,
    margin: 'auto'
};

class LoginContainer extends React.Component {
    render(){
        return (
            <div style={alignmentContainer}>
                <Login/>
            </div>
        );
    }
}

export default LoginContainer;