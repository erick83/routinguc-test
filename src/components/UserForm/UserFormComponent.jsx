import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, TextField, FormControl, Input, Button, InputLabel, IconButton, InputAdornment, withStyles, Typography } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'

const styles = theme => ({
    input: {
        width: '100%',
        marginBottom: '10px',
    },
    button: {
        margin: '10px 0',
    },
    error: {
        margin: '20px 0',
    },
    matchErrorMessage: {
        margin: '10px'
    }
});

class UserFormComponent extends Component {

    static propTypes = {
        type: PropTypes.oneOf(['login', 'signup']).isRequired,
        classes: PropTypes.object,
        error: PropTypes.string,
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

    passwordMatch = () => {
        const { password, passwordConfirm } = this.state
        return password === passwordConfirm
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            user: {
                username:this.state.user,
                password: this.state.password,
                email: this.state.email,
            }
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

        const { classes, type, error } = this.props

        return (
        <Container maxWidth="sm">
            <form noValidate>
                <TextField id="user" className={classes.input} label="User" onChange={this.handleChange('user')} />

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

                {type === 'signup' && !this.state.showPassword &&
                    <TextField
                        id="password-confirm"
                        error={!this.passwordMatch()}
                        className={classes.input}
                        type="password"
                        label="Confirm Password"
                        onChange={this.handleChange('passwordConfirm')}
                    />
                }

                {type === 'signup' && !this.state.showPassword && !this.passwordMatch() &&
                    <Typography variant="caption" color="error" className={classes.matchErrorMessage}>Password did not match</Typography>
                }

                <TextField id="email" className={classes.input} type='email' label="Email" onChange={this.handleChange('email')} />

                <Button className={classes.button} variant="contained" color="primary" onClick={this.handleSubmit}>Enviar</Button>
            </form>

            {error && <Typography className={classes.error} color="error">Error: {error}</Typography>}

        </Container>
        )
    }
}

export default withStyles(styles)(UserFormComponent)
