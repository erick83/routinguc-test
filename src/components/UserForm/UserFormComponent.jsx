import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, TextField, FormControl, Input, Button, InputLabel, IconButton, InputAdornment, withStyles } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'

const styles = theme => ({
    input: {
        width: '100%',
        marginBottom: '10px'
    },
});

class UserFormComponent extends Component {

    static propTypes = {
        type: PropTypes.oneOf(['login', 'signup']),
        classes: PropTypes.object,
    }

    constructor(props) {
        super(props)

        this.state = {
            user: '',
            password: '',
            email: '',
            passwordConfirm: '',
            showPassword: false,
        }
    }

    handleClickShowPassword = (e) => {
        e.preventDefault()
        this.setState({
            showPassword: !this.state.showPassword
        })
    }

    handleChange = value => e => {
        e.preventDefault()

        this.setState({
            [value]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            user: this.state.user,
            password: this.state.password,
            email: this.state.email,
        }

        if (this.isValid(data)) {
            this.props.submit(data)
        }
    }

    // TODO: Validators
    isValid = (state) => {
        if (this.props.type === 'signup' && state.password !== '') {
            return state.password === state.passwordConfirm
        }

        return true
    }

    render() {

        const { classes, type } = this.props

        return (
        <Container maxWidth="sm">
            <form noValidate>
                <TextField id="user" className={classes.input} label="User" onChange={this.handleChange('user')} />

                {type === 'signup' ? (
                    <React.Fragment>
                        <TextField id="password" className={classes.input} type="password" label="Password" onChange={this.handleChange('password')} />
                        <TextField id="password-confirm" className={classes.input} type="password" label="Confirm Password" onChange={this.handleChange('passwordConfirm')} />
                    </React.Fragment>
                ) : (
                    <FormControl className={classes.input}>
                        <InputLabel htmlFor="password-input">Password</InputLabel>
                        <Input
                            id="password-input"
                            type={this.state.showPassword ? 'text' : 'password'}
                            value={this.password}
                            onChange={this.handleChange('password')}
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
                )}

                <TextField id="email" className={classes.input} type='email' label="Email" onChange={this.handleChange('email')} />

                <Button variant="contained" color="primary" onClick={this.handleSubmit}>Enviar</Button>
            </form>
        </Container>
        )
    }
}

export default withStyles(styles)(UserFormComponent)
