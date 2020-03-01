import React from 'react'
import { connect } from 'react-redux'

import { UserFormComponent, LoaderComponent } from '../../components'
import { userLogin, loadSesion } from '../../redux/user/actions'
import { Typography, makeStyles } from '@material-ui/core'
import { getSesionData } from '../../services/sesionService'

const useStyles = makeStyles({
    title: {
        margin: '20px auto',
        textAlign: 'center',
    }
})

const mapStateToProps = store => ({
    loading: store.request.loading,
    auth: store.user.logged,
    loginErrorMessage: store.user.errorMessage,
})

const mapDispatchToProps = dispatch => ({
    loginHandler: (payload) => dispatch(userLogin(payload)),
    loadHandler: (payload) => dispatch(loadSesion(payload)),
})

function LoginPage({ loading, auth, loginErrorMessage, loginHandler, loadHandler }) {
    const classes = useStyles()

    React.useEffect(() => {
        const sesionData = getSesionData()
        if (sesionData) {
            loadHandler(sesionData)
        }
    })

    return (
        <div>
            <Typography className={classes.title} variant="h2">Login</Typography>
            <LoaderComponent visible={loading} />
            <UserFormComponent submit={loginHandler} type="login" error={loginErrorMessage} />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
