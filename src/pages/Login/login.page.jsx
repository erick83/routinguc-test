import React from 'react'
import { connect } from 'react-redux'

import { UserFormComponent, LoaderComponent } from '../../components'
import { userLogin } from '../../redux/user/actions'

const mapStateToProps = store => ({
    loading: store.request.loading,
    loginErrorMessage: store.user.errorMessage,
})

const mapDispatchToProps = dispatch => ({
    login: (payload) => dispatch(userLogin(payload))
})

function LoginPage({login, loading, loginErrorMessage}) {
    return (
        <div>
            <LoaderComponent visible={loading} />
            <UserFormComponent submit={login} type="login" error={loginErrorMessage} />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
