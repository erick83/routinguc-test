import React from 'react'
import { connect } from 'react-redux'
import { userListFetch } from '../../redux/user-list/actions'

const mapStateToProps = store => ({
    users: store.users,
})

const mapDispatchToProps = dispatch => ({
    getList: () => dispatch(userListFetch())
})

function UserListPage({ users, getList }) {
    getList()

    console.log(users)
    return (
        <div>User List</div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListPage)
