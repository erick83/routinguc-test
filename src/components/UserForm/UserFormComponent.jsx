import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    Container,
    TextField,
    FormControl,
    Input,
    Button,
    InputLabel,
    IconButton,
    InputAdornment,
    withStyles,
    Typography
} from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import { debounce, isEmpty } from 'lodash'
import { EMAIL_REGEX_PATTER } from '../../services/util'

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
        margin: '-8px 0 10px',
        display: 'block',
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
            passwordConfirm: '',
            showPassword: false,
            passwordMatch: true,
            
            email: '',
            
            userPristine: true,
            passwordPristine: true,
            passwordConfirmPristine: true,
            emailPristine: true,

            errorMessage: false,
        }
    }

    handleClickShowPassword = (e) => {
        e.preventDefault()
        this.setState({
            showPassword: !this.state.showPassword
        })
    }

    handleChange = prop => e => {
        e.preventDefault()
        const { value } = e.target
        let confirmPristine = true

        if (prop === 'passwordConfirm') {
            confirmPristine = false
        }

        this.setState({
            [prop]: value,
            [prop+'Pristine']: false,
            errorMessage: false,
        })

        if (/^pass/.test(prop) && !confirmPristine) this.passwordMatchHandler()
    }

    passwordMatchHandler = debounce(() => {
        const { password, passwordConfirm } = this.state
        this.setState({
            passwordMatch: password === passwordConfirm
        })
    }, 500)

    checkEmail = value => EMAIL_REGEX_PATTER.test(value)

    handleSubmit = (e) => {
        e.preventDefault()

        if (this.isValid(this.state)) {
        const data = {
            user: {
                username:this.state.user,
                password: this.state.password,
                email: this.state.email,
            }
        }

            this.props.submit(data)
        } else {
            this.setState({
                errorMessage: true,
                userPristine: false,
                passwordPristine: false,
                passwordConfirmPristine: false,
                emailPristine: false,
            })
        }
    }

    isValid = (state) => {
        if (!isEmpty(state.user) && !isEmpty(state.password) && !isEmpty(state.email) && this.checkEmail(state.email)) {
            if (this.props.type === 'signup' && state.password !== state.passwordConfirm) {
                return false
            }
            return true
        }
        return false
    }

    showErrorEmail = (email, emailPristine) => {
        return !emailPristine && !this.checkEmail(email)
    }

    checkEmpty = prop => (isEmpty(this.state[prop]) && !this.state[prop+'Pristine'])

    render() {
        const { email, emailPristine, errorMessage } = this.state
        const { classes, type, error } = this.props

        return (
        <Container maxWidth="sm">
            <form noValidate>
                <TextField id="user" className={classes.input} error={this.checkEmpty('user')} label="User" onChange={this.handleChange('user')} />

                <FormControl className={classes.input}>
                    <InputLabel htmlFor="password-input" error={this.checkEmpty('password')}>Password</InputLabel>
                    <Input
                        id="password-input"
                        type={this.state.showPassword ? 'text' : 'password'}
                        error={this.checkEmpty('password')}
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
                        error={this.checkEmpty('passwordConfirm') || !this.state.passwordMatch}
                        className={classes.input}
                        type="password"
                        label="Confirm Password"
                        onChange={this.handleChange('passwordConfirm')}
                    />
                }

                {type === 'signup' && !this.state.showPassword && !this.state.passwordMatch &&
                    <Typography variant="caption" color="error" className={classes.matchErrorMessage}>Password did not match</Typography>
                }

                <TextField id="email" className={classes.input} error={this.showErrorEmail(email, emailPristine)} type='email' label="Email" onChange={this.handleChange('email')} />

                <Button className={classes.button} variant="contained" color="primary" onClick={this.handleSubmit}>Enviar</Button>
            </form>

            {error && <Typography className={classes.error} color="error">Error: {error}</Typography>}
            {errorMessage && <Typography className={classes.error} color="error">Please check your user data</Typography>}

        </Container>
        )
    }
}

export default withStyles(styles)(UserFormComponent)
