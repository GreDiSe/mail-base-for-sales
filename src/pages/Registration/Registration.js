import React from 'react';
import TextField from 'material-ui/TextField';
import {Paper, RaisedButton} from "material-ui";

const headerStyle = {
    textAlign: 'center',
    margin: '10px 0 0 0'
};

class Registration extends React.Component {
    constructor(){
        super();
        this.ERROR_MESSAGE = 'Verify that the input is correct';

        this.state = {
            name: '',
            surname: '',
            email: '',
            password: '',
            returnPassword: '',
            error: {
                name: '',
                surname: '',
                email: '',
                password: '',
                returnPassword: ''
            },
            disable: true
        };
    }

    validation = () => {
        const emailValid = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/.test(this.state.email);
        const returnPasswordValid = /^[-._a-z0-9]{4,16}$/.test(this.state.password);
        const passwordValid = /^[-._a-z0-9]{4,16}$/.test(this.state.returnPassword);
        const nameValid = /^[- ._a-z0-9]{1,16}$/.test(this.state.name);
        const surnameValid = /^[-. _a-z0-9]{1,16}$/.test(this.state.surname);

        const valid = emailValid
            && passwordValid
            && nameValid
            && surnameValid
            && returnPasswordValid
            && this.state.password === this.state.returnPassword;

        this.setState({ disable: !valid });

    };

    onSubmitClick = () => {
        console.log(this.state);
    };

    render() {
        return (
            <div>
                <Paper style={{padding: 20}} zDepth={2}>

                    <h2 style={headerStyle}>Registration</h2>
                    <TextField
                        style={{margin: 0}}
                        fullWidth={true}
                        hintText="Jhon"
                        floatingLabelText="Enter name"
                        onChange={ (e, name) => this.setState({ name }, this.validation) }
                        errorText={ this.state.error.name }
                    />
                    <TextField
                        fullWidth={true}
                        hintText="Hojek"
                        floatingLabelText="Enter surname"
                        onChange={ (e, surname) => this.setState({ surname }, this.validation) }
                        errorText={ this.state.error.surname }
                    />
                    <TextField
                        style={{margin: 0}}
                        fullWidth={true}
                        hintText="qwerty@gmail.com"
                        floatingLabelText="Enter email"
                        onChange={ (e, email) => this.setState({ email }, this.validation) }
                        errorText={ this.state.error.email }
                    />
                    <TextField
                        type='password'
                        fullWidth={true}
                        hintText="********"
                        floatingLabelText="Enter password"
                        onChange={ (e, password) => this.setState({ password }, this.validation) }
                        errorText={ this.state.error.password }
                    />
                    <TextField
                        type='password'
                        fullWidth={true}
                        hintText="********"
                        floatingLabelText="Return password"
                        onChange={ (e, returnPassword) => this.setState({ returnPassword }, this.validation) }
                        errorText={ this.state.error.password }
                    />

                    <RaisedButton
                        label="Ok"
                        fullWidth={true}
                        onClick={ this.onSubmitClick }
                        href={'/login'}
                        disabled={ this.state.disable }
                    />

                </Paper>
            </div>
        );
    }
}

export default Registration;
