import React from 'react'
import { connect } from 'react-redux'
import { makeStyles, Typography } from '@material-ui/core'

import { UserFormComponent, LoaderComponent } from '../../components'
import { userSignup } from '../../redux/user/actions'

const useStyles = makeStyles({
    title: {
        margin: '20px auto',
        textAlign: 'center',
    }
})

const mapStateToProps = store => ({
    loading: store.request.loading,
    signupErrorMessage: store.user.errorMessage,
})

const mapDispatchToProps = dispatch => ({
    signupHanlder: (payload) => dispatch(userSignup(payload))
})

function SignupPage({loading, signupErrorMessage, signupHanlder}) {
    const classes = useStyles()

    return (
        <div>
            <Typography className={classes.title} variant="h2">Signup</Typography>
            <LoaderComponent visible={loading} />
            <UserFormComponent submit={signupHanlder} type="signup" error={signupErrorMessage} />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage)
