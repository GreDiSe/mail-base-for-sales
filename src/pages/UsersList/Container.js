import React from 'react';
import Login from './AllUserContainer';
import Link from "react-router-dom/es/Link";

const alignmentContainer = {
    width: 400,
    margin: 'auto'
};

class AllUserContainer extends React.Component {
    render(){
        return (
            <div style={alignmentContainer}>
                <Link to={'/login'}>Login</Link>
                <Link to={'/registration'}>Registration</Link>
                <Link to={'/userList'}>List</Link>
                <Login/>
            </div>
        );
    }
}

export default AllUserContainer;