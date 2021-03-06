import React from 'react'
import { connect } from 'react-redux'
import { Container } from '@material-ui/core'
import { UserListComponent } from '../../components'
import { userListFetch } from '../../redux/user-list/actions'

const mapStateToProps = store => ({
    users: store.userList.users,
})

const mapDispatchToProps = dispatch => ({
    getList: () => dispatch(userListFetch())
})

function UserListPage({ users, getList }) {
    return (
        <Container>
            <UserListComponent users={users} fetchTrigger={getList} />
        </Container>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListPage)
