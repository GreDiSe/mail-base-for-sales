import React from 'react';
import ReactDOM from 'react-dom';
import NotFound from './pages/NotFound/Not found';
import AllUserContainer from './pages/UsersList/AllUserContainer';
import LoginContainer from './pages/Login/Container';
import RegistrationContainer from './pages/Registration/Container';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import {MuiThemeProvider} from "material-ui";
registerServiceWorker();

ReactDOM.render(
    <Provider>
        <Router>
            <MuiThemeProvider>

                <div>
                    <Route exact path='/' component={NotFound}/>
                    <Route exact path='/userList' component={AllUserContainer}/>
                    <Route exact path='/login' component={LoginContainer}/>
                    <Route exact path='/registration' component={RegistrationContainer}/>
                </div>

            </MuiThemeProvider>
        </Router>
    </Provider>,
    document.getElementById('root')
);





