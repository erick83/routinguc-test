import React, { Component } from 'react'
import { Container, TextField, FormControl, Input, Button, InputLabel, IconButton, InputAdornment } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'

class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            user: '',
            password: '',
            email: '',
            showPassword: false,
        }
    }

    handleClickShowPassword = (e) => {
        e.preventDefault()
        this.setState({
            showPassword: !this.state.showPassword
        })
    }

    handleChangeUser = (e) => {
        e.preventDefault()

        this.setState({
            user: e.target.value
        })
    }

    handleChangePassword = (e) => {
        e.preventDefault()

        this.setState({
            password: e.target.value
        })
    }

    handleChangeEmail = (e) => {
        e.preventDefault()

        this.setState({
            email: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        if (this.isValid(this.state)) {
            console.log(this)
            this.props.submit(this.state)
        }
    }

    isValid = (state) => {
        return true
    }

    render() {
        return (
        <Container maxWidth="sm">
            <form noValidate>
                <TextField id="user" label="User" onChange={this.handleChangeUser}/>

                <FormControl>
                    <InputLabel htmlFor="password-input">Password</InputLabel>
                    <Input
                        id="password-input"
                        type={this.state.showPassword ? 'text' : 'password'}
                        value={this.password}
                        onChange={this.handleChangePassword}
                        endAdornment={
                            <InputAdornment>
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={this.handleClickShowPassword}
                                >
                                    {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <TextField id="email" type='email' label="Email" onChange={this.handleChangeEmail}/>
                <Button variant="contained" color="primary" onClick={this.handleSubmit}>Enviar</Button>
            </form>
        </Container>
        )
    }
}

export default LoginComponent
