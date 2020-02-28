import React from 'react'
import { connect } from 'react-redux'

import { UserFormComponent } from '../../components'
import { userLogin } from '../../redux/user/actions'

const mapDispatchToProps = { userLogin }

function LoginPage({userLogin}) {
    return (<UserFormComponent submit={userLogin} type="login" />)
}

export default connect(null, mapDispatchToProps)(LoginPage)
