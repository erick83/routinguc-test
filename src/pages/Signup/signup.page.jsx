import React from 'react'
import { connect } from 'react-redux'

import { UserFormComponent } from '../../components'
import { userLogin } from '../../redux/user/actions'

const mapDispatchToProps = { userLogin }

function SignupPage({userLogin}) {
    return (<UserFormComponent submit={userLogin} type="signup" />)
}

export default connect(null, mapDispatchToProps)(SignupPage)
