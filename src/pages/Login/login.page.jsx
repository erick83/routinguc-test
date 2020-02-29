import React from 'react'
import { connect } from 'react-redux'

import { UserFormComponent } from '../../components'
import { userLogin } from '../../redux/user/actions'

const mapDispatchToProps = dispatch => ({
    login: (payload) => dispatch(userLogin(payload))
})

function LoginPage({login}) {
    return (<UserFormComponent submit={login} type="login" />)
}

export default connect(null, mapDispatchToProps)(LoginPage)
