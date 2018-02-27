import React from 'react';
import TextField from 'material-ui/TextField';
import {Paper, RaisedButton} from "material-ui";
import {withRouter} from "react-router-dom";

const headerStyle = {
    textAlign: 'center',
    margin: '10px 0 0 0'
};

const buttonAlign = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: 10,
    marginTop: 20
};

class Login extends React.Component {
    constructor(){
        super();
        this.ERROR_MESSAGE = 'Verify that the input is correct';

        this.state = {
            email: '',
            password: '',
            error: {
                email: '',
                password: ''
            },
            disable: true
        };
    }

    validation = () => {
        const emailValid = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/.test(this.state.email);
        const passwordValid = /^[-._a-z0-9]{4,16}$/.test(this.state.password);

        this.setState({ disable: !(emailValid && passwordValid) });

    };

    onSubmitClick = () => {
        const { email, password } = this.state;

        fetch('http://localhost:3000/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json, text/plain'
            },
            body: JSON.stringify({ email, password })
        })
            .then(res => {
                if(res.status === 401){
                    this.setState(prevState => {
                        const newState = {...prevState};
                        newState.error.email = this.ERROR_MESSAGE;
                        newState.error.password = this.ERROR_MESSAGE;
                        return newState
                    })
                } else if(res.status === 200){
                    this.props.history.push('/');
                }
            })
            .catch(err => {
                console.log(err);
            });
    };

    render() {
        return (
            <div>
                <Paper style={{padding: 20}} zDepth={2}>

                    <h2 style={headerStyle}>Authorization</h2>
                    <TextField
                        style={{margin: 0}}
                        fullWidth={true}
                        hintText="qwerty@gmail.com"
                        floatingLabelText="Enter email"
                        onChange={ (e, email) => this.setState({ email }, this.validation) }
                        errorText={ this.state.error.email }
                    />
                    <TextField
                        fullWidth={true}
                        hintText="********"
                        type='password'
                        floatingLabelText="Enter password"
                        onChange={ (e, password) => this.setState({ password }, this.validation) }
                        errorText={ this.state.error.password }
                    />
                    <div style={buttonAlign}>
                        <RaisedButton
                            label="Ok"
                            fullWidth={true}
                            onClick={ this.onSubmitClick }
                            disabled={ this.state.disable }
                        />
                        <RaisedButton
                            fullWidth={true}
                            onClick={ () => this.props.history.push('/registration') }
                            label="Sing up"
                        />
                    </div>

                </Paper>
            </div>
        );
    }
}

export default withRouter(Login);
