import React from 'react'
import { connect } from 'react-redux'

import { LoginComponent } from '../../components'
import { userLogin } from '../../redux/user/actions'

const mapDispatchToProps = { userLogin }

function LoginPage({userLogin}) {
    return (<LoginComponent submit={userLogin} />)
}

export default connect(null, mapDispatchToProps)(LoginPage)
