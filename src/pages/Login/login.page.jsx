import React from 'react'
import { connect } from 'react-redux'

import { UserFormComponent, LoaderComponent } from '../../components'
import { userLogin } from '../../redux/user/actions'
import { Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    title: {
        margin: '20px auto',
        textAlign: 'center',
    }
})

const mapStateToProps = store => ({
    loading: store.request.loading,
    loginErrorMessage: store.user.errorMessage,
})

const mapDispatchToProps = dispatch => ({
    loginHandler: (payload) => dispatch(userLogin(payload))
})

function LoginPage({ loading, loginErrorMessage, loginHandler }) {
    const classes = useStyles()

    return (
        <div>
            <Typography className={classes.title} variant="h2">Login</Typography>
            <LoaderComponent visible={loading} />
            <UserFormComponent submit={loginHandler} type="login" error={loginErrorMessage} />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
