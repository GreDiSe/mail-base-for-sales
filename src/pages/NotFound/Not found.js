import React from "react";
import {Link} from "react-router-dom";

class NotFound extends React.Component {

    render() {
        return (
            <div>
                <h1>Page Not Found</h1>
                <p>Go to <Link to="/userList">index page</Link>.</p>
            </div>
        );

    }

}

export default NotFound;